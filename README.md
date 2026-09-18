# BizFlow AI 2.0

نظام إدارة أعمال احترافي يحوي:

- لوحة تحكم ذكية
- إدارة المنتجات والمخزون
- إنشاء الفواتير وتحديث المخزون تلقائيًا
- إدارة العملاء والموظفين
- تقارير ومخططات المبيعات
- إعدادات العمل
- تسجيل دخول حقيقي عبر Flask + SQLite

## التشغيل السريع عبر المتصفح

### 1) تثبيت المتطلبات

```powershell
cd "d:\11\BizFlow-AI"
"C:/Users/MOATAZ/AppData/Local/Programs/Python/Python312/python.exe" -m pip install -r requirements.txt
```

### 2) تشغيل الخادم

```powershell
cd "d:\11\BizFlow-AI"
"C:/Users/MOATAZ/AppData/Local/Programs/Python/Python312/python.exe" backend/app.py
```

### 3) افتح التطبيق في المتصفح

```text
http://localhost:5000/
```

## بيانات تسجيل الدخول الافتراضية

```text
Username: admin
Password: admin123
```

## ملاحظات مهمة

- يتم حفظ البيانات في SQLite داخل مجلد [BizFlow-AI/backend](backend).
- الخادم يعمل على المنفذ 5000.
- إذا أردت فحص الحالة الصحية:

```text
http://localhost:5000/api/health
```

## هيكل المشروع

- [BizFlow-AI/index.html](index.html) — واجهة التطبيق
- [BizFlow-AI/style.css](style.css) — التصميم والهوية البصرية
- [BizFlow-AI/script.js](script.js) — منطق الواجهة وطلب البيانات
- [BizFlow-AI/backend/app.py](backend/app.py) — API الرئيسي وقاعدة البيانات
- [BizFlow-AI/requirements.txt](requirements.txt) — الحزم المطلوبة

## المزايا الرئيسية

- نظام تسجيل دخول حقيقي
- قاعدة بيانات SQLite فعليّة
- مخزون يخصم تلقائيًا عند إنشاء فاتورة
- حساب الربح بناء على التكلفة والسعر
- تقارير يومية/أسبوعية/شهرية
- إعدادات كاملة للمؤسسة
- تصميم متجاوب للجوال والكمبيوتر

