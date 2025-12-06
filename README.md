# Riya Chandra - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)]()

Modern, responsive portfolio website showcasing projects, skills, and contact information. Built with Next.js 16, React 19, and TypeScript.

![Portfolio Preview](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)

---

## ✨ Features

- 🎨 **Modern Dark Design** - Sleek, professional interface with gradient accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Next.js 16 with Turbopack for lightning-fast builds
- 📧 **Working Contact Form** - Send emails directly through the website
- 🎭 **Smooth Animations** - Framer Motion for engaging user experience
- 🎯 **SEO Optimized** - Meta tags, sitemap, robots.txt
- ♿ **Accessible** - WCAG compliant with keyboard navigation

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Gmail account with App Password

### Installation

```bash
# Clone the repository
git clone https://github.com/Riya-chandra/New-Personal-Portfolio.git

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Gmail credentials to .env.local
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

---

## 📧 Contact Form Setup

The contact form sends emails using Gmail SMTP. Here's how to set it up:

### 1. Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate password for "Mail"
5. Copy the 16-character password

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password-here
```

### 3. Test the Form

1. Start dev server: `npm run dev`
2. Navigate to footer section
3. Fill out the contact form
4. Click "Send Message"
5. Watch for "Engaging & Connecting..." → Green button ✅

**For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md)**

---

## 🛠️ Tech Stack

### Core

- **Framework**: Next.js 16.0.3
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4

### Animation & UI

- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible components
- **Lucide React** - Beautiful icons

### Email Integration

- **Nodemailer** - Email sending
- **Gmail SMTP** - Email service

### Development

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS compatibility

---

## 📁 Project Structure

```
rc/
├── app/
│   ├── api/
│   │   └── send/              # Email API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── about.tsx              # About section
│   ├── certificates.tsx       # Certificates
│   ├── footer.tsx             # Footer with contact form ⭐
│   ├── hero.tsx               # Hero section
│   ├── navbar.tsx             # Navigation
│   ├── services.tsx           # Services section
│   ├── skills.tsx             # Skills section
│   └── work.tsx               # Projects showcase
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   └── assets/                # Images, icons
├── .env.local                 # Environment variables (not in Git)
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**
    - Go to [vercel.com](https://vercel.com)
    - Import your GitHub repository
    - Add environment variables (`EMAIL_USER`, `EMAIL_PASS`)
    - Click Deploy

3. **Test Live Site**
    - Visit your Vercel URL
    - Test the contact form
    - Verify email delivery

**For detailed deployment instructions, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)**

---

## 📧 Contact Form Features

✅ **Real-time Validation** - Immediate feedback on errors
✅ **Loading State** - "Engaging & Connecting..." during send
✅ **Success Feedback** - Green button with "Message Sent Successfully!"
✅ **Auto-clear** - Form resets after 3.5 seconds
✅ **Error Handling** - User-friendly error messages
✅ **Beautiful Emails** - HTML template with gradient design
✅ **Reply-to** - Easy to respond to inquiries

---

## 🎨 Sections

1. **Hero** - Welcome section with animated introduction
2. **Work** - Project showcase with hover effects
3. **Services** - Services offered with detailed cards
4. **Skills** - Technology stack and expertise
5. **About** - Personal background and story
6. **Certificates** - Achievements and certifications
7. **Contact** - Get in touch via contact form
8. **Footer** - Social links, sitemap, contact form

---

## 📄 Documentation

- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference card
- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - Email configuration guide
- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete docs
- **[CHECKLIST.md](./CHECKLIST.md)** - Deployment checklist
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Implementation details

---

## 🐛 Troubleshooting

### Contact Form Not Working?

1. Check `.env.local` exists with credentials
2. Restart dev server: `Ctrl+C` then `npm run dev`
3. Verify Gmail App Password is valid
4. Check browser console for errors

### Build Errors?

```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### More Help?

See [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) or contact me at riyachandra9119@gmail.com

---

## 📊 Performance

- ⚡ **Build Time**: ~22 seconds
- 🎯 **TypeScript**: Zero errors
- ✅ **Production Ready**: Yes
- 📦 **Bundle Size**: Optimized
- 🚀 **Lighthouse Score**: 90+

---

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ Input validation and sanitization
- ✅ CSRF protection (Next.js built-in)
- ✅ Email validation
- ✅ Error handling
- ✅ `.env.local` in `.gitignore`

---

## 📝 License

This project is private. All rights reserved.

---

## 👨‍💻 Author

**Riya Chandra**

- 📧 Email: [riyachandra9119@gmail.com](mailto:riyachandra9119@gmail.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/riya-chandra-856657248/](https://www.linkedin.com/in/riya-chandra-856657248/)
- 🐙 GitHub: [@riyachandra](https://github.com/Riya-chandra)

---

## 🙏 Acknowledgments

Built with ❤️ using:

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Vercel](https://vercel.com/) - Hosting platform
- [Nodemailer](https://nodemailer.com/) - Email sending

---

## ⭐ Show Your Support

If you like this portfolio, give it a ⭐ on [GitHub](https://github.com/Riya-chandra)!

---

## 📞 Support

For questions, issues, or collaboration:

- 📧 **Email**: riyachandra9119@gmail.com
- 💬 **LinkedIn**: [Message me](https://www.linkedin.com/in/riya-chandra-856657248/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Riya-chandra)

---

**Status**: 🟢 Production Ready | **Version**: 1.0.0 | **Last Updated**: November 30, 2025

---

Made with 💻 and ☕ by Riya Chandra
#   P o r t f o l i o  
 #   P o r t f o l i o  
 