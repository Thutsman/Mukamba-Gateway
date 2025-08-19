# Mukamba Gateway - Real Estate Platform

A modern, responsive single-page React application for Mukamba Gateway, a real estate platform connecting Zimbabwean diaspora with local property opportunities.

## 🚀 Features

- **Hero Section**: Victorian houses background with compelling call-to-action
- **What We Do**: Three feature cards showcasing platform services
- **Why Join Early Access**: Dark-themed section with four benefit cards
- **Footer**: Contact information and social links
- **Modal Form**: Professional signup form with validation
- **Responsive Design**: Mobile-first approach with smooth animations
- **Professional UI**: Red (#B91C1C) and dark gray color scheme

## 🛠️ Technical Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hooks** for state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mukamba-gateway
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with background image
│   ├── WhatWeDo.tsx          # Services and features section
│   ├── WhyJoinEarly.tsx      # Early access benefits section
│   ├── Footer.tsx            # Footer with contact info
│   └── SignupModal.tsx       # Modal form with validation
├── App.tsx                   # Main application component
├── index.tsx                 # React entry point
└── index.css                 # Tailwind CSS and custom styles
```

## 🎨 Design Features

### Color Scheme
- **Primary Red**: #B91C1C
- **Dark Gray**: #111827
- **Light Gray**: #F3F4F6

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive**: Mobile-first design
- **Hierarchy**: Clear typography scale

### Animations
- **Framer Motion**: Smooth page transitions
- **Hover Effects**: Interactive card animations
- **Scroll Animations**: Reveal animations on scroll

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured experience
- **Breakpoints**: Tailwind CSS responsive utilities

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: '#B91C1C',
    dark: '#991B1B',
    light: '#DC2626'
  }
}
```

### Content
Update component files to modify:
- Hero text and background image
- Feature descriptions
- Contact information
- Form fields

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, contact:
- **Email**: info@mukambagateway.com
- **Phone**: +263 77 123 4567
- **Location**: Harare, Zimbabwe

---

**Mukamba Gateway** - Connecting Zimbabwean diaspora with local property opportunities.
