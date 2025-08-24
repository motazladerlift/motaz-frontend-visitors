# Motaz Ladderlift - Frontend

هذا هو المشروع الأمامي لموقع Motaz Ladderlift، وهو يستخدم API بدلاً من البيانات الثابتة.

## المميزات

- ✅ استخدام API للبيانات الديناميكية
- ✅ إدارة إعدادات الموقع من خلال API
- ✅ إدارة الأسعار من خلال API
- ✅ نموذج اتصال يعمل مع API
- ✅ تصميم متجاوب
- ✅ وضع الظلام/الضوء
- ✅ تحريكات سلسة
- ✅ تحسين الأداء
- ✅ معالجة الأخطاء بشكل أفضل

## المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

## التثبيت

1. استنسخ المشروع:
```bash
git clone <repository-url>
cd motazladderliftmoh-main-old-no-admin-panel
```

2. ثبت التبعيات:
```bash
npm install
```

3. أنشئ ملف `.env` في المجلد الجذر:
```bash
cp .env.example .env
```

4. عدّل ملف `.env` بإعدادات API الخاصة بك:
```env
VITE_API_URL=https://motaz-backend-api.onrender.com
VITE_SITE_NAME=Motaz Ladderlift
VITE_SITE_DESCRIPTION=Professionele verhuis- en ladderlift services in Antwerpen en omgeving.
```

## التشغيل

### وضع التطوير
```bash
npm run dev
```

### بناء المشروع
```bash
npm run build
```

### معاينة البناء
```bash
npm run preview
```

## حل المشاكل الشائعة

### مشكلة "Unexpected token '<', "<!doctype "... is not valid JSON"

هذه المشكلة تحدث عندما يحاول المشروع جلب البيانات من API غير متاح. الحلول:

1. **تأكد من أن API يعمل:**
   - تحقق من أن الخادم يعمل على العنوان المحدد
   - تأكد من أن `VITE_API_URL` صحيح في ملف `.env`

2. **استخدام الإعدادات الافتراضية:**
   - إذا لم يكن API متاحاً، سيستخدم المشروع الإعدادات الافتراضية تلقائياً
   - لا حاجة لتغيير أي شيء في الكود

3. **إعداد API محلي:**
   ```env
   VITE_API_URL=http://localhost:3001
   ```

### مشكلة CORS

إذا واجهت مشاكل CORS:

1. تأكد من أن API يدعم CORS
2. أضف headers مناسبة في API
3. استخدم proxy في Vite إذا لزم الأمر

### مشكلة تحميل الصور

تأكد من أن الصور موجودة في مجلد `public/images/`

## هيكل المشروع

```
src/
├── components/          # مكونات React
│   ├── common/         # مكونات مشتركة
│   │   ├── Header.jsx  # رأس الصفحة (يستخدم API)
│   │   ├── Footer.jsx  # تذييل الصفحة (يستخدم API)
│   │   ├── WhatsAppButton.jsx  # زر WhatsApp (يستخدم API)
│   │   └── ContactSectionComponent.jsx  # نموذج الاتصال (يستخدم API)
│   ├── home/           # مكونات الصفحة الرئيسية
│   │   ├── HeroSection.jsx  # القسم الرئيسي (يستخدم API)
│   │   ├── AboutSection.jsx  # قسم حول الشركة (يستخدم API)
│   │   └── LastMinuteSection.jsx  # قسم الطلبات العاجلة (يستخدم API)
│   ├── pricing/        # مكونات صفحة الأسعار
│   │   ├── PricingHero.jsx  # رأس صفحة الأسعار (يستخدم API)
│   │   ├── PricingSection.jsx  # قسم الأسعار الأساسية (يستخدم API)
│   │   ├── AdditionalServices.jsx  # الخدمات الإضافية (يستخدم API)
│   │   ├── ContactOptions.jsx  # خيارات الاتصال (يستخدم API)
│   │   ├── ServiceAreaInfo.jsx  # معلومات منطقة الخدمة (يستخدم API)
│   │   └── PricingCard.jsx  # بطاقة السعر
│   └── ui/             # مكونات واجهة المستخدم
├── hooks/              # React Hooks
│   ├── useSiteConfiguration.js  # Hook لإدارة إعدادات الموقع
│   └── usePricing.js  # Hook لإدارة الأسعار
├── config/             # ملفات الإعدادات
├── assets/             # الأصول (الصور، الأنماط)
└── pages/              # صفحات الموقع
    ├── HomePage.jsx    # الصفحة الرئيسية
    ├── PricingPage.jsx # صفحة الأسعار (يستخدم API)
    ├── ContactPage.jsx # صفحة الاتصال (يستخدم API)
    └── ...
```

## API Endpoints

المشروع يتوقع وجود API مع النقاط التالية:

### GET /site-configuration
يحصل على إعدادات الموقع:
```json
{
  "contact": {
    "phone": "+32 469 11 91 19",
    "phone_display": "0469 119 119",
    "email": "motazladerlift@gmail.com",
    "email_display": "motazladerlift@gmail.com",
    "whatsapp": "https://wa.me/message/27GB2V4YVAZ4E1",
    "whatsapp_number": "+32469119119"
  },
  "address": {
    "street": "Frans Adriaenssensstraat 25",
    "city": "Antwerpen",
    "postal_code": "2170",
    "country": "België"
  },
  "business_hours": {
    "display": "24 uur / 7 dagen",
    "availability": "24/7 Beschikbaar"
  },
  "social_media": {
    "facebook": "https://www.facebook.com/motaz.ladderlift",
    "instagram": "https://www.instagram.com/motaz_ladderlift/",
    "youtube": "https://www.youtube.com/@motazladderlift",
    "tiktok": "https://www.tiktok.com/@motazladderlift"
  },
  "company": {
    "name": "Motaz Ladderlift",
    "description": "Professionele verhuis- en ladderlift services in Antwerpen en omgeving.",
    "tagline": "Uw betrouwbare partner voor verhuis en ladderlift services",
    "founded_year": 2020
  }
}
```

### GET /pricing
يحصل على الأسعار:
```json
{
  "ladderlift": {
    "basic": {
      "price": "€60",
      "period": "/ UUR",
      "title": "Ladderlift met bediener",
      "features": [
        "1ste – 5de verdieping",
        "Extra half uur €30",
        "Geldig in Antwerpen (10km)",
        "per adres"
      ]
    },
    "medium": {
      "price": "€80",
      "period": "/ UUR",
      "title": "Ladderlift met bediener",
      "features": [
        "6de – 7de verdieping",
        "Extra half uur €40",
        "Geldig in Antwerpen (10km)",
        "per adres"
      ]
    },
    "high": {
      "price": "€120",
      "period": "/ UUR",
      "title": "Ladderlift met bediener",
      "features": [
        "8ste - 9de verdieping",
        "Extra half uur €60",
        "Geldig in Antwerpen (10km)",
        "per adres"
      ]
    }
  },
  "packages": {
    "package1": {
      "price": "€250",
      "period": "2 UUR",
      "title": "VERHUISPAKKET 1",
      "features": [
        "Bijkomende halfuur €100",
        "LADDERLIFT TOT DE 5DE",
        "VERHUISWAGEN (22m3)",
        "2 ADRESSEN",
        "2 VERHUIZERS"
      ]
    },
    "package2": {
      "price": "€350",
      "period": "3 UUR",
      "title": "VERHUISPAKKET 2",
      "features": [
        "Bijkomende halfuur €100",
        "LADDERLIFT TOT DE 5DE",
        "VERHUISWAGEN (22m3)",
        "2 ADRESSEN",
        "2 VERHUIZERS"
      ]
    }
  },
  "truck": {
    "price": "€60",
    "period": "/ PER UUR",
    "title": "VERHUISWAGEN MET CHAUFFEUR",
    "features": [
      "Minimum 2 Uur",
      "VERHUISWAGEN (22m3)",
      "1 VERHUIZER",
      "Geldig rond Antwerpen (10km)",
      "per adres"
    ]
  }
}
```

### POST /contact
يرسل رسالة اتصال:
```json
{
  "name": "اسم العميل",
  "email": "email@example.com",
  "phone": "+32469119119",
  "message": "نص الرسالة",
  "moveDate": "2024-01-15"
}
```

## المكونات الرئيسية

### useSiteConfiguration Hook
هذا Hook يدير جلب إعدادات الموقع من API:

```javascript
import useSiteConfiguration from '../hooks/useSiteConfiguration';

const MyComponent = () => {
  const { config, loading, error } = useSiteConfiguration();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{config.company.name}</div>;
};
```

### usePricing Hook
هذا Hook يدير جلب الأسعار من API:

```javascript
import usePricing from '../hooks/usePricing';

const PricingComponent = () => {
  const { pricing, loading, error } = usePricing();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{pricing.ladderlift.basic.price}</div>;
};
```

### المكونات المحدثة
- `Header.jsx` - يستخدم بيانات API للاتصال والشركة
- `Footer.jsx` - يستخدم بيانات API للروابط والاتصال
- `WhatsAppButton.jsx` - يستخدم رابط WhatsApp من API
- `ContactSectionComponent.jsx` - يرسل النماذج إلى API
- `HeroSection.jsx` - يستخدم اسم الشركة والشعار من API
- `AboutSection.jsx` - يستخدم معلومات الاتصال من API
- `LastMinuteSection.jsx` - يستخدم رقم الهاتف من API
- `ContactPage.jsx` - يستخدم معلومات العنوان والاتصال من API
- `PricingPage.jsx` - صفحة الأسعار الكاملة (يستخدم API)
- `PricingHero.jsx` - رأس صفحة الأسعار (يستخدم API)
- `PricingSection.jsx` - قسم الأسعار الأساسية (يستخدم API)
- `AdditionalServices.jsx` - الخدمات الإضافية (يستخدم API)
- `ContactOptions.jsx` - خيارات الاتصال (يستخدم API)
- `ServiceAreaInfo.jsx` - معلومات منطقة الخدمة (يستخدم API)

## النشر

### Netlify
1. اربط مستودع GitHub بـ Netlify
2. اضبط متغيرات البيئة في إعدادات Netlify:
   - `VITE_API_URL`: `https://motaz-backend-api.onrender.com`
3. اضبط `VITE_API_URL` ليشير إلى API المباشر

### Vercel
1. اربط المستودع بـ Vercel
2. اضبط متغيرات البيئة في إعدادات Vercel:
   - `VITE_API_URL`: `https://motaz-backend-api.onrender.com`
3. اضبط `VITE_API_URL` ليشير إلى API المباشر

## استكشاف الأخطاء

### مشاكل API
- تأكد من أن `VITE_API_URL` صحيح
- تحقق من أن API يعمل على المنفذ المحدد
- تحقق من CORS settings في API
- إذا فشل API، سيستخدم المشروع الإعدادات الافتراضية تلقائياً

### مشاكل البناء
- تأكد من تثبيت جميع التبعيات
- تحقق من ملف `.env`
- امسح cache: `npm run build --force`

### مشاكل التطوير
- تأكد من أن Node.js محدث
- امسح cache: `rm -rf node_modules && npm install`
- تحقق من console للرسائل

## المساهمة

1. Fork المشروع
2. أنشئ branch جديد: `git checkout -b feature/new-feature`
3. اكتب التغييرات: `git commit -am 'Add new feature'`
4. ادفع التغييرات: `git push origin feature/new-feature`
5. أنشئ Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## الدعم

للحصول على الدعم، يرجى التواصل عبر:
- البريد الإلكتروني: motazladerlift@gmail.com
- الهاتف: +32 469 11 91 19

## ملاحظات مهمة

- المشروع مصمم للعمل مع أو بدون API
- إذا لم يكن API متاحاً، سيستخدم الإعدادات الافتراضية
- جميع النماذج تعمل بشكل صحيح حتى بدون API
- التصميم والتنسيق لم يتغير أبداً كما طُلب
- الأسعار قابلة للتحديث من خلال API
- جميع البيانات الديناميكية تأتي من API
