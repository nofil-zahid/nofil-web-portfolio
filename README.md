<div align="center">
  <h1>Nofil — Personal Portfolio</h1>
  <p>
    A terminal-inspired developer portfolio built with Next.js, showcasing Nofil Zahid’s projects, expertise, experience, and professional journey.
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  </p>
</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [License](#-license)

---

## 🧐 About

This is a modern, responsive personal portfolio for Nofil Zahid, a full-stack developer. Built with Next.js App Router, React, TypeScript, and Tailwind CSS, it presents professional experience, technical expertise, projects, and ways to get in touch through a distinctive terminal-inspired interface. The portfolio combines a persistent navigation shell, responsive layouts, animated transitions, and an interactive terminal to create an experience that feels both polished and technical.

---

## 🚀 Tech Stack

| Category                 | Technology                                                       | Description                                 |
| ------------------------ | ---------------------------------------------------------------- | ------------------------------------------- |
| **Framework**            | [Next.js 16](https://nextjs.org/)                                | App Router, Server Components               |
| **UI Library**           | [React 19](https://react.dev/)                                   | Utilizing the newly stable React Compiler   |
| **Language**             | [TypeScript 5](https://www.typescriptlang.org/)                  | Strict type safety                          |
| **Styling**              | [Tailwind CSS v4](https://tailwindcss.com/)                      | Utility-first, responsive design            |
| **Animations**           | [Framer Motion](https://www.framer.com/motion/)                  | Polished UI transitions                     |
| **Icons**                | [Lucide React](https://lucide.dev/)                              | Beautifully crafted open-source icons       |
| **Email**                | [EmailJS](https://www.emailjs.com/)                              | Client-side email sending without a backend |
| **Validation**           | [Zod](https://zod.dev/)                                          | Runtime environment variable validation     |
| **Linting & Formatting** | [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) | Zero-warning policy code quality            |

---

## ✨ Features

- **⚡ Blazing Fast Performance:** Next.js App Router coupled with React Compiler for optimal delivery.
- **🎨 Fluid Animations:** Elegant scroll and page-transition animations using Framer Motion.
- **📬 Serverless Contact Form:** Built-in contact form powered by EmailJS.
- **🔒 Typesafe Environment:** Build-time and runtime validation of environment variables using Zod.
- **🔁 CI/CD Ready:** Configured with GitHub Actions for linting, type-checking, and ensuring code quality on every push/PR.
- **📱 Fully Responsive:** Carefully crafted layouts using Tailwind CSS v4 to look great on any device.

---

## 📁 Project Structure

```text
nofil-web-portfolio/
├── .github/workflows/      # CI pipelines
├── public/                 # Static public assets, icons, llms.txt, and llm.txt
├── src/
│   ├── app/                # Next.js App Router endpoints & layouts
│   │   ├── (pages)/        # Portfolio page routes & layouts
│   │   │   ├── (home)/     # Root landing page (/) & dedicated loading skeleton
│   │   │   ├── contact-me/ # Contact page & message form
│   │   │   ├── experience/ # Career history & timeline
│   │   │   ├── expertise/  # Engineering capabilities & toolkit
│   │   │   ├── faqs/       # Frequently asked questions
│   │   │   ├── projects/   # Project list & dynamic [id] case studies
│   │   │   └── who-am-i/   # Background & engineering philosophy
│   │   └── api/            # API route handlers (/health, /ip)
│   ├── components/         # Organized React UI components (layout, pages, shared)
│   ├── config/             # Environment and runtime configurations
│   ├── constants/          # Static app constants (data, routes, metadata, profile)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Wrappers around 3rd-party libraries
│   ├── schema/             # Validation schemas (Zod form & env schemas)
│   ├── styles/             # Global stylesheets and Tailwind utilities
│   ├── types/              # Abstract TypeScript types/interfaces
│   └── utils/              # Self-contained pure utility functions
├── .nvmrc                  # Node.js version pin
└── package.json            # Project dependencies and scripts
```

---

## 📜 Available Scripts

| Command              | Action                                                            |
| :------------------- | :---------------------------------------------------------------- |
| `npm run dev`        | Boots up the local development server with Turbopack enabled.     |
| `npm run build`      | Compiles the production build.                                    |
| `npm start`          | Starts the Next.js production server (requires a build first).    |
| `npm run lint`       | Analyzes code to find and report errors (zero warnings enforced). |
| `npm run format`     | Formats the entire codebase using Prettier.                       |
| `npm run type-check` | Performs TypeScript type verification without emitting files.     |

---

## 📄 License

This project is open-source. Feel free to use it as inspiration, fork it, and adapt it for your own portfolio use.

---

<div align="center">
  <br />
  Made with 💻 by <strong>Nofil</strong>
</div>
