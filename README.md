# دليل إدارة موقع Vayner Group

## تشغيل الموقع محلياً
```bash
bundle install
bundle exec jekyll serve
```
ثم افتحوا `http://localhost:4000`.

## تعديل بيانات التواصل
من `_config.yml` فقط:
```yaml
email: info@yourcompany.com
phone: "+1 555 123 4567"
linkedin: "https://www.linkedin.com/company/your-company"
```

## إضافة مشروع جديد للبورتفوليو
1. أنشئوا ملفاً جديداً داخل `_portfolio/` مثل `northwind-store.md`:

```markdown
---
title: Northwind Store
category: E-commerce        # Websites | Mobile Apps | E-commerce
client: Northwind           # اختياري
year: 2026
date: 2026-03-01            # يحدد ترتيب المشاريع (الأحدث أولاً)
published: true             # ضعوا false لإخفاء المشروع دون حذفه
description: A full Shopify store with custom checkout and inventory sync.
cover: /assets/img/portfolio/northwind-store/cover.jpg
gallery:                    # اختياري
  - /assets/img/portfolio/northwind-store/1.jpg
  - /assets/img/portfolio/northwind-store/2.jpg
link: https://example.com   # اختياري
---

وصف المشروع هنا بالتفصيل: التحدي، ما الذي تم بناؤه، والنتيجة.
```

2. ضعوا الصور في `assets/img/portfolio/northwind-store/`، واستخدموا صورة واحدة مناسبة للغلاف بنسبة 4:3 أو 16:9.
3. أعيدوا تشغيل الموقع أو ارفعوا التحديث، وسيظهر المشروع في صفحة البورتفوليو وفي الصفحة الرئيسية تلقائياً.

**ملاحظة:** الحقل `category` يجب أن يطابق تماماً أحد الخيارات الموجودة في أزرار التصفية داخل `portfolio.md`.

## تعديل الخدمات
من `_data/services.yml`. كل خدمة لها: العنوان، الوصف، قائمة الكلمات المختصرة، وسطر النتيجة للعميل.

## تعديل النصوص
- الصفحة الرئيسية: `index.md`
- من نحن: `about.md`
- سياسة العمل والاستخدام: `terms.md`
- الألوان والخطوط والمسافات: `assets/css/style.css`

## النشر
أسهل خيار هو **Netlify**: اربطوا المستودع أو اسحبوا المجلد، ثم أضيفوا الرابط النهائي في `url` داخل `_config.yml`.
