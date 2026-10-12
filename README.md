# 👋 Ananthi P. — Full Stack Developer Portfolio

<div align="center">

**Python Full Stack Developer | Backend Developer | Generative AI Enthusiast**

A modern, responsive personal portfolio website showcasing my skills, projects, and professional experience as a Python Full Stack Developer.

[Live Demo](https://ananthi-portfolio-5iwle89x2-ananthip490-5577s-projects.vercel.app/) • [GitHub](https://github.com/Ananthiproject) • [LinkedIn](https://linkedin.com/in/ananthi-p-60774a2a8) • [Resume](https://ananthi-portfolio-5iwle89x2-ananthip490-5577s-projects.vercel.app/)

</div>

---

## 📋 About the Project

This is a **personal portfolio website** designed to present my professional identity and expertise to recruiters and potential collaborators. The portfolio features a clean, modern UI with smooth animations and a professional dark theme, built with React.js and Vite for optimal performance.

The portfolio is fully responsive, supports dark mode animations, and includes sections for:
- Professional introduction and about me
- Technical skills showcase
- Work experience and internships
- Project portfolio with links
- Education and certifications
- Downloadable resume
- Contact information

---

## ✨ Features

- 🎨 **Modern & Professional Design** — Dark navy and blue theme with cyan accents for a polished look
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** — Scroll-triggered animations that respect user preferences for reduced motion
- 🎯 **Navigation** — Sticky header with smooth scrolling and active link highlighting
- 📥 **Resume Download** — Direct download link to your resume from the portfolio
- 📞 **Contact Section** — Get in touch section with email and social links
- ♿ **Accessible** — Built with accessibility best practices in mind
- 🚀 **Fast Performance** — Optimized build with Vite for instant page loads
- 📧 **SEO Ready** — Proper meta tags and semantic HTML structure

---

## 🛠️ Technology Stack

<div align="center">

![React](https://img.shields.io/badge/React-18.3-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js&logoColor=white)

</div>

**Frontend:**
- **React.js** (v18.3) — UI component library
- **Vite** (v6.0) — Ultra-fast build tool and dev server
- **React Icons** (v5.3) — Icon library for SVG icons
- **Vanilla CSS** — Custom styling for complete design control

**Development:**
- **Node.js** (v18 or newer) — JavaScript runtime
- **npm** — Package manager

---

## 📑 Website Sections

| Section | Purpose |
|---------|---------|
| **Hero / Home** | Eye-catching introduction with CTA |
| **About Me** | Professional background and introduction |
| **Technical Skills** | Programming languages, frameworks, and tools |
| **Professional Experience** | Internship experiences and roles |
| **Projects** | Showcased portfolio projects with descriptions |
| **Education** | Academic qualifications and certifications |
| **Resume** | Downloadable PDF resume |
| **Contact** | Email and social media links |

---

## 📸 Screenshots

To add screenshots of your portfolio:

1. Take screenshots of different sections (desktop and mobile views)
2. Create a `screenshots/` folder in the project root
3. Add your images and reference them below:

```markdown
### Desktop View
![Hero Section](./screenshots/desktop-hero.png)
![About Section](./screenshots/desktop-about.png)

### Mobile View
![Mobile Navigation](./screenshots/mobile-nav.png)
![Mobile Projects](./screenshots/mobile-projects.png)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or newer) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** — [Download here](https://git-scm.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ananthiproject/ananthi-portfolio.git
   cd ananthi-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5173/`

4. **Make it your own:**
   - Edit your information in `src/data.js`
   - Replace your profile photo: `public/profile-photo.jpg`
   - Replace your resume: `public/Ananthi_P_Resume.pdf`
   - Customize colors and styles in `src/index.css`

---

## 📦 Installation & Setup

### Project Dependencies

All dependencies are listed in `package.json`:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0"
  }
}
```

### npm Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production (creates dist/ folder)
npm run preview  # Preview production build locally
```

### Environment Configuration

No environment variables are required for this project. However, you may customize:

- **`src/data.js`** — All portfolio content (name, bio, skills, projects, etc.)
- **`src/index.css`** — Colors, fonts, spacing, and responsive breakpoints
- **`vite.config.js`** — Build configuration (e.g., for GitHub Pages sub-path hosting)

---

## 📁 Project Structure

```
ananthi-portfolio/
├── public/                    # Static assets
│   ├── profile-photo.jpg     # Your profile picture
│   ├── Ananthi_P_Resume.pdf  # Your resume (PDF)
│   └── favicon.svg           # Browser tab icon
│
├── src/
│   ├── components/           # React components
│   │   ├── Hero.jsx         # Home/hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Education.jsx    # Education & certifications
│   │   ├── Resume.jsx       # Resume download section
│   │   ├── Contact.jsx      # Contact information
│   │   ├── Header.jsx       # Navigation header
│   │   └── Footer.jsx       # Footer
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollAnimation.js  # Scroll-triggered animations
│   │   └── useActiveSection.js    # Active menu link tracking
│   │
│   ├── data.js              # All portfolio content (edit here!)
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
│
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata & dependencies
└── README.md               # This file
```

**Key File: `src/data.js`**
This file contains all your portfolio content. Edit here to update:
- Personal info and bio
- Skills and technical expertise
- Work experience
- Projects with descriptions and links
- Education details
- Social media links

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (if not already done)
2. **Go to [Vercel](https://vercel.com)**
3. **Click "Import Project"** and select your GitHub repository
4. **Configure:**
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Click "Deploy"**
6. Your portfolio will be live in seconds!

**Current Deployment:**
- 🔗 [Live Portfolio](https://ananthi-portfolio-5iwle89x2-ananthip490-5577s-projects.vercel.app/)
- Automatically updates when you push to GitHub

### Deploy to Other Platforms

**Netlify:**
- Connect GitHub → auto-deploys on push
- Build: `npm run build` | Output: `dist`

**GitHub Pages:**
- Build: `npm run build`
- Upload `dist/` contents to GitHub Pages
- For sub-path hosting, add `base` in `vite.config.js`

---

## ✅ Customization Guide

### 1. Update Your Information
Edit `src/data.js` to add your:
- Name, title, and bio
- Email and phone
- Skills and technologies
- Work experience
- Projects with GitHub links
- Education and certifications
- Social media URLs

### 2. Update Your Photo & Resume
Replace these files (use exact names):
- `public/profile-photo.jpg` — Your profile picture
- `public/Ananthi_P_Resume.pdf` — Your resume

### 3. Customize Colors & Fonts
Edit `src/index.css` to:
- Change the color scheme
- Adjust fonts and typography
- Modify spacing and layouts
- Update responsive breakpoints

### 4. Add Project Links
In `src/data.js`, add GitHub and live demo links to your projects

---

## 🔗 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Ananthiproject-black?logo=github&logoColor=white)](https://github.com/Ananthiproject)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ananthi%20P-blue?logo=linkedin&logoColor=white)](https://linkedin.com/in/ananthi-p-60774a2a8)
[![Email](https://img.shields.io/badge/Email-ananthip490%40gmail.com-red?logo=gmail&logoColor=white)](mailto:ananthip490@gmail.com)

**Let's collaborate!** Feel free to reach out via email or connect on LinkedIn.

</div>

---

## 🚀 Future Enhancements

Potential improvements for future versions:

- [ ] **Blog Section** — Add a blog to share insights on Python, Django, and web development
- [ ] **Dark Mode Toggle** — User control to switch between light and dark themes
- [ ] **Contact Form** — Functional contact form with email integration (Formspree, EmailJS)
- [ ] **Project Filtering** — Filter projects by technology stack or category
- [ ] **Testimonials Section** — Add client or colleague testimonials
- [ ] **Analytics Integration** — Track portfolio visitors with Google Analytics or Vercel Analytics
- [ ] **Multi-Language Support** — Localization for different languages
- [ ] **PDF Generation** — Generate resume as PDF from portfolio data
- [ ] **Animations Library** — More sophisticated scroll animations (Framer Motion)
- [ ] **Performance Optimization** — Code splitting and lazy loading

---

## 📄 License

This project is open source and available under the **MIT License**.

You are free to:
- ✅ Use this portfolio as a template for your own
- ✅ Modify and customize the design
- ✅ Deploy and host anywhere
- ✅ Share and redistribute

**Attribution:** If you fork or use this project, a credit to the original is appreciated but not required.

For details, see the [LICENSE](./LICENSE) file (add one if needed).

---

## 🤝 Contributing

This is a personal portfolio, but if you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

If you have questions or run into issues:

1. Check the **Troubleshooting** section (if issues persist)
2. Review `src/data.js` and `src/index.css` for customization help
3. Consult [Vite Documentation](https://vitejs.dev/)
4. Consult [React Documentation](https://react.dev/)
5. Open an issue on [GitHub Issues](https://github.com/Ananthiproject/ananthi-portfolio/issues)

---

<div align="center">

**Made with ❤️ by Ananthi P.**

⭐ If you find this project helpful, please consider starring it on GitHub!

</div>
