# NeelX Technologies - Modern Web Services Website

A complete, modern web services selling website built with React.js (Vite), Tailwind CSS, React Router, and Framer Motion.

## 🚀 Features

- **19 Complete Pages**: Home, Services, Service Details, Pricing, Portfolio, About Us, Contact, FAQ, Testimonials, Blog List, Blog Details, Terms & Conditions, Privacy Policy, Refund Policy, Careers, Order Form, Thank You, and 404
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Framer Motion for engaging user experience
- **Modern UI/UX**: Clean, professional design with Tailwind CSS
- **SEO Friendly**: Optimized for search engines
- **Fast Performance**: Vite build tool for lightning-fast development and builds

## 🛠️ Tech Stack

- **React.js 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **React Router DOM 6.20.0** - Client-side routing
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Animation library
- **EmailJS 3.2.0** - Email service integration
- **React Icons 4.12.0** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd NeelX
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
NeelX/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components (12 components)
│   │   ├── layout/           # Layout components (Navbar, Footer, Layout)
│   │   └── sections/         # Home page sections (8 sections)
│   ├── data/                 # Data files (7 files)
│   ├── pages/                # Page components (18 pages)
│   ├── utils/                # Utility functions (helpers, animations)
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Colors are defined in `tailwind.config.js`:
- **Primary**: Blue tones (50-900)
- **Secondary**: Purple tones (50-900)
- **Dark**: Gray tones (50-900)

### Fonts

Default fonts are **Inter** (body) and **Poppins** (headings), loaded from Google Fonts.

### Content

All content is stored in `src/data/` directory:
- `servicesData.js` - Services information
- `pricingData.js` - Pricing plans
- `portfolioData.js` - Portfolio projects
- `testimonialsData.js` - Client testimonials
- `blogData.js` - Blog articles
- `faqData.js` - FAQ content
- `aboutData.js` - Company information, team, jobs

## 📧 Email Integration

The contact form and order form are set up to integrate with EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the integration in `src/pages/Contact.jsx` and `src/pages/OrderForm.jsx`

Replace the TODO comments with your EmailJS credentials:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
```

## 📱 Pages Overview

1. **Home** - Hero, services preview, why choose us, portfolio, pricing, testimonials, FAQ, CTA
2. **Services** - All services with detailed descriptions
3. **Service Details** - Individual service pages (dynamic routing)
4. **Pricing** - Development packages, maintenance plans, custom packages
5. **Portfolio** - Project showcase with category filtering
6. **About Us** - Company story, stats, mission, vision, values, team
7. **Contact** - Contact form, information, map
8. **FAQ** - Frequently asked questions with category filtering
9. **Testimonials** - Client reviews and ratings
10. **Blog List** - Blog articles with search and filtering
11. **Blog Details** - Individual blog posts (dynamic routing)
12. **Terms & Conditions** - Legal terms
13. **Privacy Policy** - Privacy information
14. **Refund Policy** - Refund terms
15. **Careers** - Job openings and application process
16. **Order Form** - Project inquiry/order form
17. **Thank You** - Success page after form submission
18. **404** - Page not found

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Smooth page transitions with Framer Motion
- ✅ Dynamic routing for services and blog posts
- ✅ Form validation
- ✅ Interactive components (accordions, modals, cards)
- ✅ Category filtering (Portfolio, FAQ, Blog)
- ✅ SEO-friendly structure
- ✅ Performance optimized
- ✅ Clean, maintainable code

## 🤝 Support

For support or questions:
- **Email**: info@neelx.com
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is created for NeelX Technologies.

## 👨‍💻 Development

Built with ❤️ using modern web technologies.

---

**Note**: Remember to update the EmailJS integration, replace placeholder images, and customize content to match your brand before deploying to production.
