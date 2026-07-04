# Sada Kakarla — Portfolio

Personal portfolio website built with Next.js, showcasing background, experience, education, and projects.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Resend](https://resend.com) for the contact form backend

## Sections

- Hero
- About
- Experience
- Projects
- Education
- Contact

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Environment Variables

The contact form requires a Resend API key. Create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to the `main` branch triggers a new deployment.
