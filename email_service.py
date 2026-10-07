import os
from urllib.parse import quote
import msal, requests

GRAPH_SCOPE=["https://graph.microsoft.com/.default"]
GRAPH_BASE="https://graph.microsoft.com/v1.0"
GRAPH_SEND_URL=GRAPH_BASE+"/users/{sender}/sendMail"

def is_configured():
    return all(os.environ.get(k) for k in ("MS_TENANT_ID","MS_CLIENT_ID","MS_CLIENT_SECRET","MS_SENDER_EMAIL"))

def _token():
    if not is_configured(): return None,"إعدادات Microsoft 365 غير مكتملة"
    client=msal.ConfidentialClientApplication(os.environ["MS_CLIENT_ID"],authority=f"https://login.microsoftonline.com/{os.environ['MS_TENANT_ID']}",client_credential=os.environ["MS_CLIENT_SECRET"])
    result=client.acquire_token_for_client(scopes=GRAPH_SCOPE)
    token=result.get("access_token")
    return (token,None) if token else (None,result.get("error_description") or "تعذر الحصول على رمز Microsoft 365")

def send_email(recipients,subject,body):
    recipients=[x.strip() for x in recipients if x and x.strip()]
    if not recipients: return False,"لا يوجد مستلمون"
    try:
        token,error=_token()
        if error: return False,error
        payload={"message":{"subject":subject,"body":{"contentType":"HTML","content":body.replace("\n","<br>")},"toRecipients":[{"emailAddress":{"address":x}} for x in recipients]},"saveToSentItems":True}
        url=GRAPH_SEND_URL.format(sender=quote(os.environ["MS_SENDER_EMAIL"],safe=""))
        r=requests.post(url,headers={"Authorization":f"Bearer {token}","Content-Type":"application/json"},json=payload,timeout=30)
        if r.status_code==202: return True,"تم إرسال البريد"
        try: detail=r.json()
        except Exception: detail=r.text
        return False,f"Microsoft Graph {r.status_code}: {detail}"
    except Exception as exc: return False,str(exc)

def fetch_inbox(limit=50):
    token,error=_token()
    if error: return [],error
    sender=quote(os.environ["MS_SENDER_EMAIL"],safe="")
    url=f"{GRAPH_BASE}/users/{sender}/mailFolders/inbox/messages"
    params={"$top":min(max(int(limit),1),100),"$orderby":"receivedDateTime desc","$select":"id,internetMessageId,subject,from,toRecipients,receivedDateTime,body"}
    try:
        r=requests.get(url,headers={"Authorization":f"Bearer {token}"},params=params,timeout=30)
        if r.status_code!=200:
            try: detail=r.json()
            except Exception: detail=r.text
            return [],f"Microsoft Graph {r.status_code}: {detail}"
        return r.json().get("value",[]),None
    except Exception as exc: return [],str(exc)
