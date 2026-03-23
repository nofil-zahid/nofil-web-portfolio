# Nofil — Personal Portfolio

> A modern, performant personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**, showcasing projects, experience, expertise, and a contact form powered by EmailJS.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Email** | [EmailJS](https://www.emailjs.com/) |
| **Validation** | [Zod](https://zod.dev/) |
| **Linting** | ESLint (zero warnings policy) |
| **CI** | GitHub Actions |

---

## 📁 Project Structure

```
nofil-web-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── (pages)/        # Route groups
│   │   │   ├── who-am-i/   # About page
│   │   │   ├── experience/ # Work experience
│   │   │   ├── expertise/  # Skills & expertise
│   │   │   ├── projects/   # Portfolio projects
│   │   │   ├── faqs/       # FAQ section
│   │   │   └── contact-me/ # Contact form
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable UI components
│   │   ├── core/
│   │   ├── element/
│   │   ├── hoc/
│   │   ├── layout/
│   │   ├── providers/
│   │   ├── shared/
│   │   └── ui/
│   ├── config/
│   │   └── env.ts          # Validated env config (Zod)
│   ├── schema/
│   │   └── env.ts          # Zod env schemas
│   ├── constants/          # App-wide constants
│   ├── helpers/            # Utility helpers
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Third-party integrations
│   ├── styles/             # Global CSS
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Pure utility functions
├── next.config.ts
├── tsconfig.json
├── package.json
└── .nvmrc                  # Node.js version pin (22.22.0)
```

---

## ✨ Features

- ⚡ **Next.js App Router** with React Compiler enabled for optimal performance
- 🎨 **Framer Motion** animations for smooth, polished UI transitions
- 📬 **EmailJS** contact form — no backend required
- 🔒 **Zod-validated environment variables** at build time (client & server)
- 🔁 **GitHub Actions CI** — lint, type-check, and build on every push/PR
- 🖋️ **Inter** (sans) and **JetBrains Mono** (monospace) Google Fonts
- 📐 **Strict TypeScript** with zero-warning ESLint policy

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint (zero warnings enforced) |
| `npm run type-check` | Run TypeScript type checking |

---

## 📄 License

This project is open-source. Feel free to use it as inspiration for your own portfolio.

---

<div align="center">
  Made with 💻 by <strong>Nofil</strong>
</div>
