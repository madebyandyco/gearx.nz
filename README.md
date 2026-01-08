# Gear-X Automotive

A modern, responsive website for Gear-X Automotive, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Features

- **Static Site Generation** - Fast, SEO-friendly static pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimised** - Minimal JavaScript, optimised assets
- **SEO Ready** - Meta tags, sitemap, robots.txt, and structured data
- **Accessibility** - WCAG compliant with proper semantic HTML
- **TypeScript** - Full type safety and better developer experience

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Inter Font](https://rsms.me/inter/) - Modern typeface

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gear-x
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
gear-x/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable Astro components
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. Key features:

- **Utility-first approach** - No custom CSS classes
- **Responsive design** - Mobile-first breakpoints
- **Custom color palette** - Primary brand colors
- **Typography** - Inter font family
- **Forms** - Styled form elements with Tailwind Forms plugin

## 🔧 Configuration

### Astro Configuration

- Static site generation
- Tailwind CSS integration
- Performance optimisations
- SEO-friendly settings

### Tailwind Configuration

- Custom color palette
- Responsive container
- Typography plugin
- Forms plugin
- Aspect ratio plugin

## 📱 Responsive Design

The site is built with a mobile-first approach using Tailwind's responsive utilities:

- **Mobile**: Default styles
- **Tablet**: `sm:` prefix (640px+)
- **Desktop**: `md:` prefix (768px+)
- **Large Desktop**: `lg:` prefix (1024px+)

## 🚀 Deployment

The site is configured for static hosting platforms like:

- **Netlify** - Automatic deployments from Git
- **Vercel** - Edge deployment with CDN
- **GitHub Pages** - Free hosting for public repos
- **AWS S3** - Scalable cloud hosting

## 📊 Performance

- **Core Web Vitals** optimised
- **Lighthouse** score: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO

- Meta tags and Open Graph
- Twitter Card support
- Canonical URLs
- XML sitemap
- Robots.txt
- Structured data (when applicable)

Any static assets, like images, can be placed in the `public/` directory.

## Build commands

All commands are run from the root of the project, from the terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Git commands

| Command                                                      | Action                                                        |
| :----------------------------------------------------------- | :------------------------------------------------------------ |
| `git init`                                                   | start tracking current directory                              |
| `git add -A`                                                 | add files in current directory to staging                     |
| `git commit -m "commit message"`                             | commit your changes                                           |
| `git remote add origin https://github.com/username/repo.git` | add remote repository URL which contains the required details |
| `git pull origin main`                                       | always pull from remote before pushing                        |
| `git push -u origin main`                                    | publish changes to your remote repository                     |

## All together now

| Command                                                                                    |
| :----------------------------------------------------------------------------------------- |
| `npm run build && git add . && git commit -m "commit description" && git push origin main` |
