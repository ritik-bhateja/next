# Next.js 15 Learning Project

A comprehensive hands-on learning project for Next.js 15 with React 19, TypeScript, and modern web development practices.

## 🚀 Quick Start

```bash
cd nextjs-15-learning
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the project.

## 📚 Learning Modules

### ✅ Completed
1. **Project Setup** - Next.js 15 with JavaScript, Tailwind CSS, and React Compiler
2. **Server Components** - Understanding server-side rendering and async components
3. **Client Components** - Interactive components with hooks and event handlers
4. **App Router Routing** - Static routes, dynamic routes, and nested layouts
5. **Navigation Patterns** - Link components, useRouter hook, and programmatic navigation
6. **Advanced Routing** - Catch-all, optional catch-all, route groups, and private routes
7. **Parallel Routes** - Dashboard with independent loading analytics, notifications, and team panels
8. **Intercepting Routes** - Photo gallery with modal experience and URL updates

### 🎯 Next Up
9. **Data Fetching** - Server-side data fetching, caching, and revalidation
10. **Server Actions** - Form handling and server-side mutations
11. **Loading & Error States** - Advanced loading.js and error.js patterns
12. **Performance Optimization** - React Compiler and caching strategies

## 🏗️ Project Structure

```
nextjs-15-learning/
├── src/app/                 # App Router directory
│   ├── components/          # Reusable components
│   │   └── Counter.js       # Interactive Client Component
│   ├── layout.js           # Root layout (Server Component)
│   ├── page.js             # Home page (Server Component)
│   └── globals.css         # Global styles
├── specs/                  # Learning documentation
│   ├── 01-project-setup.md
│   ├── 02-server-components.md
│   └── 03-client-components.md
└── .kiro/steering/         # Learning guides
    └── nextjs-15-learning-guide.md
```

## Tech Stack

- **Next.js 15.5.11** (latest stable Next.js 15)
- **React 18.3.1** (stable React 18)
- **JavaScript** (no TypeScript for simplicity)
- **Tailwind CSS v4** for styling
- **React Compiler** for automatic optimizations
- **ESLint** for code quality

## 📖 Key Concepts Learned

### Server Components (Default)
- Run on the server during build or request time
- Can be async and fetch data directly
- Zero impact on client bundle size
- Perfect for static content and data fetching

### Client Components ('use client')
- Run in the browser with full React features
- Use hooks, event handlers, and browser APIs
- Required for interactivity
- Should be kept small and focused

### Component Composition
- Server Components can contain Client Components
- Client Components cannot directly import Server Components
- Use children pattern to pass Server Components to Client Components

## 🎮 Interactive Demo

The home page demonstrates:
- **Server Component**: Shows server-rendered timestamp
- **Client Component**: Interactive counter with state management
- **Composition**: How Server and Client Components work together

## 📝 Learning Documentation

Each learning module is documented in the `specs/` directory with:
- Concept explanations
- Code examples
- Best practices
- Next steps

## 🚀 Development Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 🎯 Learning Goals

This project teaches Next.js 15 through practical implementation:
1. Understanding the App Router architecture
2. Mastering Server vs Client Components
3. Learning modern React patterns with React 19
4. Building performant, SEO-friendly applications
5. Implementing best practices for production apps

---

**Ready to continue learning?** Check out the `specs/` directory for detailed learning modules and run `npm run dev` to see the interactive examples!