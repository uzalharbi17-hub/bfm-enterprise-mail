# نظام متابعة الطلبات

نظام عربي RTL مبني بـ Flask لمتابعة الطلبات الداخلية.

## التشغيل على Windows

1. ثبّت Python 3.11.
2. افتح CMD داخل مجلد المشروع.
3. نفّذ:
   python -m venv venv
   venv\\Scripts\\activate
   pip install -r requirements.txt
   python app.py
4. افتح:
   http://127.0.0.1:5000

بيانات الدخول التجريبية:
- اسم المستخدم: admin
- كلمة المرور: admin123

ملاحظة: إرسال البريد في هذه النسخة وضع تجريبي ويتم تسجيل إشعار البريد في سجل التعديلات. لإرسال SMTP فعلي نضيف بيانات بريد الشركة من الإعدادات.

## ربط البريد مع Microsoft 365

النظام يستخدم Microsoft Graph لإرسال الإشعارات من بريد الشركة بدون تخزين كلمة مرور البريد داخل التطبيق. يعتمد على Client Credentials مع Application Permission باسم Mail.Send وموافقة مسؤول Microsoft 365.

### إعداد Microsoft Entra ID
1. افتح Microsoft Entra admin center.
2. أنشئ App Registration جديد للنظام.
3. من API permissions أضف Microsoft Graph ثم Application permissions ثم Mail.Send.
4. اضغط Grant admin consent.
5. من Certificates & secrets أنشئ Client Secret وانسخ قيمة السر مرة واحدة.
6. ضع القيم في متغيرات البيئة: MS_TENANT_ID و MS_CLIENT_ID و MS_CLIENT_SECRET و MS_SENDER_EMAIL.
7. أعد تشغيل النظام.

### مثال Windows CMD
```bat
set MS_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
set MS_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
set MS_CLIENT_SECRET=ضع_السر_هنا
set MS_SENDER_EMAIL=no-reply@company.com
python app.py
```

لا تضع MS_CLIENT_SECRET داخل GitHub أو داخل ملفات المشروع.