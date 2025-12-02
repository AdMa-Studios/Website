# Adma Studios

A modern, responsive multi-page website built with React and Vite, featuring a floating pill-shaped navbar and professional software studio content.

## Features

- 🎨 Modern glassmorphism design with dark theme
- 🚀 Built with React 18 and Vite for optimal performance
- 📱 Fully responsive across all devices
- 🎭 Smooth animations and transitions
- 🧭 React Router for seamless navigation
- 💅 Custom CSS with design system and CSS variables
- 🎯 SEO-optimized with proper meta tags

## Pages

- **Home**: Hero section, services overview, process timeline, and stats
- **About**: Company story, values, and team members
- **Services**: Detailed service offerings with tech stacks
- **Portfolio**: Project showcase with categories and tags
- **Contact**: Contact form and information

## Tech Stack

- React 18.3
- Vite 5.4
- React Router DOM 6.20
- Modern CSS with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd adma-studios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
adma-studios/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Portfolio.jsx
│   │   ├── Portfolio.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

The website is designed to be easily customizable:

### Theme Colors

Edit the CSS variables in `src/index.css`:

```css:root {
  --color-primary: #6366f1;
  --color-accent: #f43f5e;
  /* ... other colors */
}
```

### Content

All content can be modified in the respective page components in the `src/pages/` directory.

### Fonts

The website uses Inter and Space Grotesk fonts from Google Fonts. You can change these in `index.html`.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or support, contact hello@admastudios.com
