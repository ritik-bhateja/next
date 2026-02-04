# Spec 01: Next.js 15 Project Setup

## Overview
Initial setup of a Next.js 15 learning project with modern tooling and best practices.

## What We've Created
- **Next.js 15.5.11** (latest stable Next.js 15)
- **React 18.3.1** (stable React 18)
- **JavaScript** (no TypeScript for simplicity)
- **Tailwind CSS v4** for styling
- **App Router** (not Pages Router)
- **React Compiler** enabled for automatic optimizations

## Key Files Analysis

### package.json
- Uses Next.js 15.5.11 (latest stable Next.js 15)
- React 18.3.1 (stable React 18)
- JavaScript only (no TypeScript dependencies)
- Tailwind CSS v4 (latest version)
- React Compiler plugin for automatic optimizations

### next.config.js
- JavaScript configuration file (not TypeScript)
- React Compiler enabled in experimental mode (`experimental.reactCompiler: true`)
- This enables automatic memoization and optimization

### src/app/layout.js (Root Layout)
- **Server Component** by default (no 'use client')
- Uses Next.js font optimization with Geist fonts
- Metadata export for SEO
- CSS variables for font families

### src/app/page.js (Home Page)
- **Server Component** by default
- Uses Next.js Image component for optimization
- Tailwind CSS classes for styling
- Responsive design patterns

## Next.js 15 Key Concepts Demonstrated

1. **App Router**: File-based routing in `src/app/`
2. **Server Components**: Default for all components
3. **Font Optimization**: Automatic font loading and optimization
4. **Image Optimization**: Built-in Image component
5. **JavaScript**: Simple JavaScript without TypeScript complexity
6. **React Compiler**: Automatic performance optimizations

## Next Steps
1. Understand Server vs Client Components
2. Explore routing and navigation
3. Learn data fetching patterns
4. Implement Server Actions
5. Build interactive components

## Development Commands
```bash
cd nextjs-15-learning
npm run dev    # Start development server on http://localhost:3000
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```