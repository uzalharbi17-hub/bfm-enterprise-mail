# نظام متابعة الطلبات

نظام عربي RTL مبني بـ Flask لمتابعة الطلبات الداخلية مع ربط Microsoft 365 فعلي.

## التشغيل على Windows
```bat
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

بيانات الدخول التجريبية: admin / admin123

## ربط Microsoft 365
أنشئ App Registration في Microsoft Entra ID وأضف Microsoft Graph **Application permissions**:
- Mail.Send
- Mail.Read

ثم اضغط **Grant admin consent** وأنشئ Client Secret.

```bat
set MS_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
set MS_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
set MS_CLIENT_SECRET=ضع_السر_هنا
set MS_SENDER_EMAIL=no-reply@company.com
set EMAIL_SYNC_SECONDS=60
python app.py
```

لا تضع Client Secret داخل GitHub.

## الربط الفعلي
إشعارات الطلبات تحمل الرقم التسلسلي داخل عنوان البريد بصيغة [REQ:REQ-...].
النظام يراقب Inbox الخاص ببريد الشركة عبر Microsoft Graph، ويتعرف على الردود التي تحتوي على رقم الطلب ويحفظها داخل صفحة الطلب. المزامنة الافتراضية كل 60 ثانية، ولا يحتاج IMAP.

التنبيهات الحالية تشمل المتابعة، طلب اعتماد الإنهاء، اعتماد الإنهاء، ورفض الإنهاء.
