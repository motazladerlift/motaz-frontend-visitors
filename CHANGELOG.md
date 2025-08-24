# Changelog

## [2.1.0] - 2024-01-XX

### Added
- إضافة `usePricing` Hook لإدارة الأسعار من API
- تحديث صفحة الأسعار لاستخدام API
- دعم الأسعار الديناميكية من API
- إضافة endpoint `/pricing` للـ API
- تحديث جميع مكونات صفحة الأسعار

### Changed
- تحديث `PricingPage.jsx` لتفعيل جميع الأقسام
- تحديث `PricingHero.jsx` لاستخدام بيانات API
- تحديث `PricingSection.jsx` لاستخدام الأسعار من API
- تحديث `AdditionalServices.jsx` لاستخدام الأسعار من API
- تحديث `ContactOptions.jsx` لاستخدام بيانات الاتصال من API
- تحديث `ServiceAreaInfo.jsx` لاستخدام معلومات المدينة من API
- تحديث ملف `hooks/index.js` لإضافة `usePricing`

### Technical
- إضافة هيكل بيانات الأسعار في API
- تحسين معالجة الأخطاء في صفحة الأسعار
- إضافة loading states لصفحة الأسعار
- تحديث الوثائق لتشمل صفحة الأسعار

## [2.0.0] - 2024-01-XX

### Added
- تحويل المشروع من Static Site إلى API-based
- إضافة `useSiteConfiguration` Hook لإدارة إعدادات الموقع
- دعم جلب البيانات الديناميكية من API
- معالجة أفضل للأخطاء مع fallback للإعدادات الافتراضية
- دعم متغيرات البيئة (`VITE_API_URL`)
- تحديث جميع المكونات لاستخدام API

### Changed
- تحديث `Header.jsx` لاستخدام بيانات API
- تحديث `Footer.jsx` لاستخدام بيانات API
- تحديث `WhatsAppButton.jsx` لاستخدام رابط WhatsApp من API
- تحديث `ContactSectionComponent.jsx` ليرسل النماذج إلى API
- تحديث `HeroSection.jsx` لاستخدام اسم الشركة والشعار من API
- تحديث `AboutSection.jsx` لاستخدام معلومات الاتصال من API
- تحديث `LastMinuteSection.jsx` لاستخدام رقم الهاتف من API
- تحديث `ContactPage.jsx` لاستخدام معلومات العنوان والاتصال من API
- تحديث ملفات الإعدادات (`vite.config.js`, `netlify.toml`, `vercel.json`)

### Fixed
- حل مشكلة "Unexpected token '<'" عند عدم توفر API
- تحسين معالجة الأخطاء في جميع المكونات
- إضافة fallback values لجميع البيانات الديناميكية

### Technical
- إضافة ملف `.env.example` مع إعدادات API
- تحديث `.gitignore` لتجاهل ملفات البيئة
- إضافة ملفات README محدثة مع تعليمات مفصلة
- تحسين هيكل المشروع

## [1.0.0] - 2024-01-XX

### Initial Release
- إطلاق المشروع كـ Static Site
- تصميم متجاوب مع Bootstrap 5
- تحريكات سلسة مع Framer Motion
- وضع الظلام/الضوء
- نموذج اتصال
- زر WhatsApp
- زر العودة للأعلى
