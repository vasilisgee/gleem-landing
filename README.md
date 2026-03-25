# Gleem: SaaS Landing Page

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-111111?style=flat&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Marketing landing page for **Gleem**, an original portfolio concept exploring a SaaS model for delivering affordable one-page websites to small local businesses.

🌐 [View Live](https://getgleem.vercel.app) &nbsp;&nbsp; 🍽 [See a Live Example: theGreek](https://thegreekrestaurant.vercel.app) &nbsp;&nbsp; 🎛 [Try the Admin Panel](https://thegreekrestaurant.vercel.app/login)

---

## The Concept

Small local businesses (restaurants, barbers, electricians, plumbers) still rely on bloated WordPress installs and overpriced hosting when all they need is a fast, professional one-page site.

Gleem bridges that gap: a human designer (AI-assisted) builds the site quickly, and the business owner manages their content through a simple panel. Hosted on Vercel, the infrastructure cost is near zero, passed on as an affordable flat monthly fee.

The live demo linked above, [theGreek](https://github.com/vasilisgee/thegreek), is the actual product Gleem sells, fully deployed with a working CMS admin panel.

## Project Highlights

- Full SaaS marketing landing page with conversion-focused layout and clear CTA hierarchy
- Scroll-triggered animations via Framer Motion throughout all major sections
- Monochrome design system with a consistent line-art illustration character set
- Interactive pricing toggle (monthly / annual billing)
- Modal lead capture flow with form validation and toast notification feedback
- Contact form with simulated submission
- Live links to a real deployed product as the in-page demo

## Screenshots

> Coming soon.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Vercel

## Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Headline, primary CTA, animated trust ticker |
| **How it Works** | 3-step process: form, design, launch |
| **Why Gleem** | Comparison table vs website builders |
| **What We Offer** | Feature grid: design, SEO, maps, catalogue, speed |
| **Pricing** | Single plan, monthly/annual toggle |
| **One Panel to Go** | Admin panel screenshots linked to live theGreek demo |
| **Team** | 3 team members |
| **FAQ** | Accordion with common questions |
| **Contact** | Contact form + email + FAQ shortcut |
| **Footer CTA** | Final conversion section |

## Design Decisions

**No accent color:** the entire UI runs on black, white, and grey. CTA hierarchy is handled through fill, border weight, and a shine/glow hover effect on primary buttons. The monochrome palette was a deliberate choice to complement the line-art illustration set and create a bold, memorable identity without relying on color as a crutch.

**Illustration system:** three recurring characters from the same FreePeeps illustration set are used consistently across sections, giving the page a cohesive visual personality.

**Single pricing plan:** intentional. The target audience (local business owners) benefits from zero decision fatigue. One plan, one price, everything included.

**Frontend-only architecture:** no backend is required. The project demonstrates what a polished, production-grade marketing site can achieve purely on the frontend, with Framer Motion handling the interaction layer and shadcn/ui providing the component foundation.

---

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

---

## Part of the Gleem Ecosystem

This landing page is one half of a two-project portfolio exercise:

- **Gleem** (this repo), the company marketing site
- **[theGreek](https://github.com/vasilisgee/thegreek)**, the actual product Gleem delivers, with full CMS admin panel

Both projects are documented at **[vasilisportfolio.com](https://vasilisportfolio.com)**.

## License

This project is personal and educational work. Free to explore and reference. Commercial use or redistribution is not permitted without permission.
