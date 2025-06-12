# مملكة المعرقين

مشروع ويب مبسط يعمل محليًا ويشبه Discord بخصائص محدودة.

## التشغيل

1. **Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```
   يتطلب MongoDB محلي على المنفذ الافتراضي.

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   ستعمل الواجهة على `http://localhost:3000`.

يمكن مشاركة الموقع عبر عنوان Tailscale IP بعد تشغيل السيرفرين.

## تحديث الفروع مع وجود ملفات ثنائية
لدمج فرع `dev` في `main` عند وجود صور أو ملفات ثنائية يمكن استخدام الأمر التالي من الطرفية:
```bash
git checkout main
git merge dev
# في حال عدم وجود تعارضات سيتم الدمج مباشرة
# إن ظهرت رسالة بخصوص "Binary files are not supported" فغالبًا تكون هناك تعارضات في ملفات ثنائية.
# يمكن تخطي عرض الفروقات لهذه الملفات عبر ملف `.gitattributes` كما هو موجود في هذا المشروع.
git push origin main
```

**ملاحظة**: يتطلب رفع صورة افتراضية للملف "backend/uploads/default.png" يدوياً، حيث أن المستودع لا يتضمن ملفات ثنائية.
