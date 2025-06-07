# Modern Portfolio Website

A responsive and modern portfolio website built with React, Styled Components, and Framer Motion. This single-page application showcases your skills, projects, and contact information in a clean and interactive way.

## Features

- 🌓 Light/Dark mode
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 📝 Contact form with validation
- 📊 Skills progress bars
- 🎯 Project filtering
- 📱 Mobile-friendly navigation
- ⚡ Optimized performance

## Technologies Used

- ⚛️ React 18
- 💅 Styled Components
- 🎨 Framer Motion
- 📱 React Icons
- 📧 EmailJS
- 🔍 React Intersection Observer
- 📱 React Responsive

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)

---

Feel free to customize this template to make it your own! If you have any questions or run into any issues, please open an issue on GitHub.
