# Portfolio Project - Complete Documentation

## 🚀 Project Overview

Modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features stunning animations, interactive components, and a fully functional contact form.

---

## ✨ Features

### 🎨 Design & UI

- **Modern Dark Theme** with gradient accents
- **Smooth Animations** using Framer Motion
- **Responsive Layout** - Mobile, Tablet, Desktop optimized
- **Custom UI Components** with Radix UI primitives
- **Glass Morphism** effects
- **Shine Borders** and animated gradients
- **Particle Effects** and interactive backgrounds

### 📧 Contact Form

- ✅ Real-time validation
- ✅ Email sending via Gmail SMTP (Nodemailer)
- ✅ Beautiful HTML email templates
- ✅ Success/Error feedback
- ✅ Green button on success
- ✅ "Engaging & Connecting..." during send
- ✅ Auto-clear form after success
- ✅ Reply-to functionality

### 🧩 Sections

1. **Hero** - Animated introduction with particles
2. **Work** - Project showcase with hover effects
3. **Services** - Service offerings with cards
4. **Skills** - Technology stack display
5. **About** - Personal introduction
6. **Certificates** - Achievements and certifications
7. **Contact** - Functional contact form
8. **Footer** - Social links and site map

---

## 🛠️ Tech Stack

### Core

- **Next.js 16.0.3** - React framework
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling

### UI Libraries

- **Framer Motion 12** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Three.js** - 3D graphics (optional)

### Email & Forms

- **Nodemailer 7** - Email sending
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Utilities

- **clsx** & **tailwind-merge** - Class management
- **date-fns** - Date formatting

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Gmail account with App Password

### Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd rc
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your credentials
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

4. **Run development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:3000
```

---

## 🔧 Configuration

### Email Setup

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

**Quick setup**:

1. Enable 2FA on Gmail
2. Generate App Password
3. Add to `.env.local`
4. Restart dev server

### Environment Variables

Create `.env.local`:

```bash
# Gmail Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
```

⚠️ **Never commit `.env.local` to Git!**

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**
    - Go to [vercel.com](https://vercel.com)
    - Import your repository
    - Configure project

3. **Add Environment Variables**
    - Go to Project Settings
    - Environment Variables
    - Add `EMAIL_USER` and `EMAIL_PASS`

4. **Deploy**
    - Vercel auto-deploys on push
    - Check deployment logs

### Alternative Platforms

**Netlify**:

```bash
npm run build
# Deploy the .next folder
```

**Self-hosted**:

```bash
npm run build
npm run start
# Use PM2 or similar for process management
```

---

## 📁 Project Structure

```
rc/
├── app/
│   ├── api/
│   │   └── send/           # Email API endpoint
│   │       ├── route.ts    # API handler
│   │       └── types.ts    # Type definitions
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── background-paths.tsx
│   │   ├── border-beam.tsx
│   │   ├── card.tsx
│   │   ├── electric-border.tsx
│   │   ├── glass-card.tsx
│   │   ├── particles.tsx
│   │   ├── radial-socials.tsx
│   │   ├── shine-border.tsx
│   │   ├── social-orbit.tsx
│   │   └── spotlight-card.tsx
│   ├── about.tsx           # About section
│   ├── certificates.tsx    # Certificates section
│   ├── contact-form.tsx    # Contact form (unused, in footer)
│   ├── footer.tsx          # Footer with contact form
│   ├── hero.tsx            # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── project-cta.tsx     # Project CTA
│   ├── services.tsx        # Services section
│   ├── skills.tsx          # Skills section
│   └── work.tsx            # Work/Projects section
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Images, icons, etc.
├── .env.local              # Environment variables (not in Git)
├── .gitignore              # Git ignore rules
├── EMAIL_SETUP.md          # Email configuration guide
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎯 Usage

### Development

```bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

### Testing Contact Form

1. Navigate to footer section
2. Fill in the form:
    - **Name**: Your name
    - **Email**: Valid email address
    - **Message**: Your message
3. Click "Send Message"
4. Watch for:
    - Button text: "Engaging & Connecting..."
    - Success: Green button, "Message Sent Successfully!"
    - Email arrives at configured address

### Customization

#### Change Email Recipient

Edit `app/api/send/route.ts`:

```typescript
to: "your-email@example.com", // Change this
```

#### Modify Button Text

Edit `components/footer.tsx`:

```typescript
<span>Engaging & Connecting...</span> // Change this
```

#### Update Colors

Edit `tailwind.config.js` or use Tailwind classes directly.

---

## 🐛 Troubleshooting

### Contact Form Issues

**Problem**: Email not sending
**Solution**:

1. Check `.env.local` exists with correct credentials
2. Verify Gmail App Password is valid
3. Check console for errors
4. Restart development server

**Problem**: "All fields are required" error
**Solution**: Ensure all form fields are filled

**Problem**: "Invalid email address" error
**Solution**: Use a valid email format (name@domain.com)

### Build Issues

**Problem**: TypeScript errors
**Solution**:

```bash
npm run lint
# Fix reported issues
```

**Problem**: Module not found
**Solution**:

```bash
rm -rf node_modules
npm install
```

### Performance

**Problem**: Slow page load
**Solution**:

- Optimize images (use Next.js Image component)
- Lazy load heavy components
- Check bundle size: `npm run build`

---

## 📝 Scripts

```json
{
	"dev": "next dev", // Start development server
	"build": "next build", // Build for production
	"start": "next start", // Start production server
	"lint": "eslint ." // Run ESLint
}
```

---

## 🔒 Security

### Best Practices Implemented

✅ Environment variables for sensitive data
✅ Input validation and sanitization
✅ CSRF protection (Next.js built-in)
✅ Email validation
✅ Error handling
✅ Rate limiting ready (add middleware)

### Recommendations

- [ ] Add rate limiting to API routes
- [ ] Implement CAPTCHA for contact form
- [ ] Use CSP headers
- [ ] Regular dependency updates
- [ ] Monitor for security vulnerabilities

---

## 🤝 Contributing

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Pull Request Process

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is private. All rights reserved.

---

## 👨‍💻 Author

**Riya Chandra**

- Email: riyachandra9119@gmail.com
- GitHub: [@riyachandra](https://github.com/Riya-chandra)
- LinkedIn: [@riyachandra](https://www.linkedin.com/in/riya-chandra-856657248/)

---

## 📚 Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Nodemailer](https://nodemailer.com)

### Tutorials

- [Next.js 16 Tutorial](https://nextjs.org/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

### Tools

- [VS Code](https://code.visualstudio.com/)
- [Vercel](https://vercel.com)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)

---

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- Radix UI for accessible components
- Framer Motion for animations
- Open source community

---

## 📞 Support

If you encounter any issues:

1. Check documentation
2. Review console logs
3. Check [EMAIL_SETUP.md](./EMAIL_SETUP.md)
4. Contact: riyachandra9119@gmail.com

---

**Last Updated**: November 26, 2025
**Version**: 1.0.0
**Status**: ✅ Production Ready
