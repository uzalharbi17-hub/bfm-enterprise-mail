import os
from urllib.parse import quote

import msal
import requests

GRAPH_SCOPE = ["https://graph.microsoft.com/.default"]
GRAPH_SEND_URL = "https://graph.microsoft.com/v1.0/users/{sender}/sendMail"


def is_configured():
    return all(
        os.environ.get(k)
        for k in ("MS_TENANT_ID", "MS_CLIENT_ID", "MS_CLIENT_SECRET", "MS_SENDER_EMAIL")
    )


def send_email(recipients, subject, body):
    recipients = [x.strip() for x in recipients if x and x.strip()]
    if not recipients:
        return False, "لا يوجد مستلمون"
    if not is_configured():
        return False, "إعدادات Microsoft 365 غير مكتملة"

    tenant_id = os.environ["MS_TENANT_ID"]
    client_id = os.environ["MS_CLIENT_ID"]
    client_secret = os.environ["MS_CLIENT_SECRET"]
    sender = os.environ["MS_SENDER_EMAIL"]

    try:
        client = msal.ConfidentialClientApplication(
            client_id=client_id,
            authority=f"https://login.microsoftonline.com/{tenant_id}",
            client_credential=client_secret,
        )
        token_result = client.acquire_token_for_client(scopes=GRAPH_SCOPE)
        access_token = token_result.get("access_token")
        if not access_token:
            return False, token_result.get("error_description") or "تعذر الحصول على رمز Microsoft 365"

        payload = {
            "message": {
                "subject": subject,
                "body": {
                    "contentType": "HTML",
                    "content": body.replace("\n", "<br>"),
                },
                "toRecipients": [{"emailAddress": {"address": x}} for x in recipients],
            },
            "saveToSentItems": True,
        }

        url = GRAPH_SEND_URL.format(sender=quote(sender, safe=""))
        response = requests.post(
            url,
            headers={
                "Authorization": f"Bearer {access_token}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=30,
        )

        if response.status_code == 202:
            return True, "تم إرسال البريد"

        try:
            detail = response.json()
        except Exception:
            detail = response.text
        return False, f"Microsoft Graph {response.status_code}: {detail}"

    except Exception as exc:
        return False, str(exc)
