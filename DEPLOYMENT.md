# دليل النشر - Motaz Ladderlift Frontend

## نظرة عامة

هذا الدليل يشرح كيفية نشر مشروع Motaz Ladderlift Frontend على منصات مختلفة.

## المتطلبات المسبقة

- حساب GitHub
- حساب على منصة النشر المختارة (Netlify/Vercel)
- API يعمل ومتاح

## النشر على Netlify

### الخطوة 1: رفع المشروع إلى GitHub

```bash
# إنشاء مستودع جديد على GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/motazladderlift-frontend.git
git push -u origin main
```

### الخطوة 2: ربط المشروع بـ Netlify

1. اذهب إلى [Netlify](https://netlify.com)
2. اضغط على "New site from Git"
3. اختر GitHub وحدد المستودع
4. اضبط إعدادات البناء:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (أو أحدث)

### الخطوة 3: إعداد متغيرات البيئة

في إعدادات الموقع على Netlify:

1. اذهب إلى **Site settings** > **Environment variables**
2. أضف المتغيرات التالية:

```
VITE_API_URL=https://motaz-backend-api.onrender.com
VITE_SITE_NAME=Motaz Ladderlift
VITE_SITE_DESCRIPTION=Professionele verhuis- en ladderlift services in Antwerpen en omgeving.
```

### الخطوة 4: النشر

Netlify سينشر الموقع تلقائياً عند كل push إلى branch `main`.

## النشر على Vercel

### الخطوة 1: رفع المشروع إلى GitHub

نفس الخطوات المذكورة أعلاه.

### الخطوة 2: ربط المشروع بـ Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط على "New Project"
3. اختر المستودع من GitHub
4. اضبط إعدادات البناء:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### الخطوة 3: إعداد متغيرات البيئة

في إعدادات المشروع على Vercel:

1. اذهب إلى **Settings** > **Environment Variables**
2. أضف المتغيرات التالية:

```
VITE_API_URL=https://motaz-backend-api.onrender.com
VITE_SITE_NAME=Motaz Ladderlift
VITE_SITE_DESCRIPTION=Professionele verhuis- en ladderlift services in Antwerpen en omgeving.
```

### الخطوة 4: النشر

Vercel سينشر الموقع تلقائياً عند كل push إلى branch `main`.

## النشر على Render

### الخطوة 1: إنشاء Static Site

1. اذهب إلى [Render](https://render.com)
2. اضغط على "New" > "Static Site"
3. اربط المستودع من GitHub
4. اضبط الإعدادات:
   - **Name**: `motazladderlift-frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

### الخطوة 2: إعداد متغيرات البيئة

في إعدادات الموقع:

1. اذهب إلى **Environment**
2. أضف المتغيرات التالية:

```
VITE_API_URL=https://motaz-backend-api.onrender.com
VITE_SITE_NAME=Motaz Ladderlift
VITE_SITE_DESCRIPTION=Professionele verhuis- en ladderlift services in Antwerpen en omgeving.
```

## اختبار النشر

### قبل النشر

```bash
# اختبار البناء محلياً
npm run build

# اختبار البناء المكتمل
npm run preview
```

### بعد النشر

1. تحقق من أن الموقع يعمل بشكل صحيح
2. اختبر النماذج والروابط
3. تحقق من أن API يعمل
4. اختبر على الأجهزة المحمولة

## استكشاف أخطاء النشر

### مشاكل شائعة

#### 1. خطأ في البناء
```bash
# تحقق من التبعيات
npm install

# امسح cache
rm -rf node_modules package-lock.json
npm install
```

#### 2. مشاكل في متغيرات البيئة
- تأكد من أن أسماء المتغيرات صحيحة
- تأكد من أن القيم صحيحة
- أعد نشر الموقع بعد تغيير المتغيرات

#### 3. مشاكل في API
- تأكد من أن API يعمل
- تحقق من CORS settings
- اختبر API مباشرة

#### 4. مشاكل في الصور
- تأكد من أن الصور موجودة في `public/images/`
- تحقق من مسارات الصور

### أوامر مفيدة

```bash
# اختبار محلي
npm run dev

# بناء للمنتج
npm run build

# معاينة البناء
npm run preview

# تنظيف cache
npm run clean

# فحص الأخطاء
npm run lint
```

## مراقبة الأداء

### أدوات المراقبة

1. **Google Analytics**: لتتبع الزوار
2. **Google PageSpeed Insights**: لقياس الأداء
3. **Lighthouse**: لتحليل SEO والأداء

### مؤشرات الأداء

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## الأمان

### أفضل الممارسات

1. **HTTPS**: تأكد من أن الموقع يستخدم HTTPS
2. **متغيرات البيئة**: لا تشارك متغيرات البيئة الحساسة
3. **CORS**: اضبط CORS بشكل صحيح في API
4. **Content Security Policy**: أضف CSP headers

### فحص الأمان

```bash
# فحص التبعيات
npm audit

# إصلاح الثغرات
npm audit fix
```

## النسخ الاحتياطية

### استراتيجية النسخ الاحتياطية

1. **Git**: جميع التغييرات محفوظة في Git
2. **API**: تأكد من نسخ احتياطية للـ API
3. **البيانات**: نسخ احتياطية منتظمة للبيانات

### استعادة النسخ الاحتياطية

```bash
# استعادة من Git
git checkout <commit-hash>

# إعادة نشر
git push origin main
```

## الدعم

للحصول على الدعم في النشر:

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Render**: [render.com/docs](https://render.com/docs)

## ملاحظات مهمة

- تأكد من أن API يعمل قبل النشر
- اختبر الموقع على أجهزة مختلفة
- راقب الأداء بعد النشر
- احتفظ بنسخ احتياطية منتظمة
