# موقع بورتفوليو عصري

موقع بورتفوليو تفاعلي متجاوب مبني باستخدام React و Styled Components و Framer Motion. يعرض المهارات والمشاريع ومعلومات الاتصال بطريقة أنيقة وسهلة الاستخدام.

## معلومات الطالب
- **الاسم:** عبد الفتاح أبو شكيان
- **الرقم الجامعي:** 120210664
- **المادة:** تطوير الويب 1 - مختبر نهائي

## الميزات الرئيسية

- 🌓 وضع الضوء/الظلام
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- ✨ تأثيرات حركية سلسة
- 📝 نموذج اتصال مع تحقق من صحة البيانات
- 📊 أشرطة تقدم للمهارات
- 🎯 تصفية المشاريع حسب الفئة
- 📱 تنقل سهل على الأجهزة المحمولة
- ⚡ أداء مُحسن

## التقنيات المستخدمة

- ⚛️ React 18
- 💅 Styled Components
- 🎨 Framer Motion
- 📱 React Icons
- 🔍 React Intersection Observer
- 📱 React Responsive

## إعداد خادم نموذج الاتصال

### المتطلبات الأساسية

- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn

### خطوات الإعداد

1. انتقل إلى مجلد المشروع:
   ```bash
   cd server
   ```

2. قم بتثبيت الحزم المطلوبة:
   ```bash
   npm install express cors
   ```

3. قم بتشغيل الخادم:
   ```bash
   node server.js
   ```

4. سيعمل الخادم على المنفذ 3001 وسيقوم بحفظ الردود في مجلد `contact-form-responses`

### ملاحظات هامة
- تأكد من تشغيل الخادم قبل إرسال النموذج
- يتم حفظ كل رد في ملف JSON منفصل مع طابع زمني
- يمكنك العثور على الردود المحفوظة في مجلد `contact-form-responses`

## Technologies Used

- ⚛️ React 18
- 💅 Styled Components
- 🎨 Framer Motion
- 📱 React Icons
- 📧 EmailJS
- 🔍 React Intersection Observer
- 📱 React Responsive

## البدء

### المتطلبات الأساسية

- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn

### خطوات التشغيل

1. استنسخ المستودع:
   ```bash
   git clone https://github.com/mxarkan/portfolio.git
   cd portfolio
   ```

2. قم بتثبيت المكتبات المطلوبة:
   ```bash
   npm install
   # أو
   yarn install
   ```

3. ابدأ خادم التطوير:
   ```bash
   npm start
   # أو
   yarn start
   ```

4. افتح المتصفح على العنوان:
   ```
   http://localhost:3000
   ```

## تحديث المعلومات الشخصية

1. **رأس الصفحة**: قم بتحديث `src/components/Header.js` بالبيانات الشخصية وروابط التواصل الاجتماعي.
2. **قسم الملف الشخصي**: قم بتحديث `src/components/About.js` بالمعلومات الشخصية والسيرة الذاتية.
3. **المهارات**: قم بتحديث `src/components/Skills.js` بالمهارات ومستويات الإتقان.
4. **المشاريع**: قم بتحديث `src/components/Projects.js` بالمشاريع الخاصة بك.
5. **اتصل بي**: قم بتحديث معلومات الاتصال في `src/components/Contact.js`.

## النشر

### إنشاء نسخة للإنتاج

```bash
npm run build
# أو
yarn build
```

سيتم إنشاء مجلد `build` يحتوي على الملفات المحسنة جاهزة للنشر.

### النشر على GitHub Pages

1. قم بتثبيت حزمة gh-pages:
   ```bash
   npm install --save gh-pages
   # أو
   yarn add gh-pages
   ```

2. أضف الأوامر التالية إلى ملف `package.json`:
   ```json
   "homepage": "https://mxarkan.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. قم بالنشر:
   ```bash
   npm run deploy
   # أو
   yarn deploy
   ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mxarkan/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Personal Information

1. **Header Section**: Update `src/components/Header.js` with your name, title, and social links.
2. **About Section**: Update `src/components/About.js` with your personal information and bio.
3. **Skills Section**: Update `src/components/Skills.js` with your skills and proficiency levels.
4. **Education/Experience**: Update `src/components/Education.js` with your education and work experience.
5. **Projects**: Update `src/components/Projects.js` with your projects.
6. **Contact**: Update the contact information in `src/components/Contact.js` and `src/components/Footer.js`.

### Styling

- Theme colors and styles can be modified in `src/styles/theme.js`.
- Global styles are in `src/index.css`.
- Component-specific styles are co-located with each component using Styled Components.

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with optimized and minified files ready for deployment.

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save gh-pages
   # or
   yarn add gh-pages
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

