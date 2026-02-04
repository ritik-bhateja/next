# Next.js 15 Learning Guide

## Project Overview
This project is designed to learn Next.js 15 features and concepts through hands-on development using the latest stable Next.js 15.5.11.

## Key Next.js 15 Features We'll Explore
- App Router (file-based routing)
- Server Components vs Client Components
- React Server Components (RSC)
- Async Request APIs (new in Next.js 15)
- New caching behavior (less aggressive by default)
- Form Component (new in Next.js 15)
- Server Actions with enhanced security
- React Compiler (experimental)
- Turbopack for development
- Enhanced error messages and debugging

## Project Structure
```
nextjs-15-learning/
├── src/
│   └── app/           # App Router directory
│       ├── components/ # Reusable components
│       ├── layout.tsx # Root layout
│       ├── page.tsx   # Home page
│       └── globals.css
├── specs/             # Learning documentation
├── public/            # Static assets
├── next.config.ts     # Next.js configuration
└── package.json       # Next.js 15.5.11
```

## Learning Progress
- [x] Project initialization with Next.js 15.5.11
- [x] Understanding App Router
- [x] Server vs Client Components
- [x] Component composition patterns
- [x] Next.js 15 features overview
- [x] JavaScript-only approach (no TypeScript)
- [ ] Async Request APIs
- [ ] New caching behavior
- [ ] Form Component
- [ ] Server Actions
- [ ] Performance optimization with React Compiler

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint