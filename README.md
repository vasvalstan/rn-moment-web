# Moment - Landing Page

Beautiful, minimal landing page for the Moment meditation app built with TanStack Start.

## 🌐 Live Site

**Production**: https://stillmoment.dev

## 🎨 Features

- **Dark Theme**: Elegant dark design with gold accents (`#DBC188`)
- **Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags and semantic HTML
- **Legal Pages**: Privacy Policy, Terms of Service, Contact
- **Fast**: Built with TanStack Start + Vite

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
moment-web/
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Root layout
│   │   ├── index.tsx       # Landing page
│   │   ├── privacy.tsx     # Privacy policy
│   │   ├── terms.tsx       # Terms of service
│   │   └── contact.tsx     # Contact page
│   ├── styles.css          # Global styles
│   └── router.tsx          # Router config
├── public/
│   └── favicon.svg         # Favicon
└── vite.config.ts          # Vite configuration
```

## 🎨 Design System

### Colors
- **Background**: `#121212`
- **Foreground**: `#ECECEC`
- **Accent Gold**: `#DBC188`
- **Accent Green**: `#9CAF88`
- **Muted**: `#8A8A8A`
- **Border**: `#333333`

### Typography
- **Headings**: DM Serif Display
- **Body**: Instrument Sans

## 🔗 Related Repositories

- **React Native App**: https://github.com/vasvalstan/rn-moment.git
- **Backend**: Convex (configured in React Native app)
- **Auth**: Clerk (configured in React Native app)

## 📦 Tech Stack

- **Framework**: TanStack Start
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: TanStack Router
- **Deployment**: Vercel
- **Icons**: Lucide React

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import project from GitHub: `vasvalstan/rn-moment-web`

2. **Configure**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `.output/public`

3. **Domain**:
   - Add custom domain: `stillmoment.dev`

### Manual Deployment

```bash
npm run build
npx vercel --prod
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with app showcase |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/contact` | Contact information |

## 🔧 Configuration

### Environment Variables

No environment variables required for the landing page.

### Vite Config

```typescript
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    viteReact(),
  ],
})
```

## 🤝 Contributing

This is a personal project, but feel free to fork and adapt for your own use!

## 📝 License

Private - All rights reserved

## 👤 Author

**Valentin Stanciu**
- GitHub: [@vasvalstan](https://github.com/vasvalstan)
- Website: https://stillmoment.dev

---

Built with ❤️ for mindful living
