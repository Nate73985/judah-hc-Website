# Judah Health Care Services - Marketing Website

A production-ready marketing website for Judah Health Care Services, a Massachusetts-based home care and home health business.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Client-side routing
- **Framer Motion** - Subtle animations
- **Lucide React** - Icons
- **React Helmet Async** - SEO management

## Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

   **Note for Windows:** This command works in both PowerShell and Command Prompt (cmd).

2. **Logo Files** (Required for logo display):
   - Place `JACHS LOGO BLUE.png` in the `public/` directory (for header)
   - Place `JACHS LOGO WHITE.png` in the `public/` directory (for footer)
   
   **Note:** If logo files are not present, the site will automatically display a text-based logo. The Logo component handles this gracefully.

**Image System:**
The website uses real healthcare images from Unsplash (free, high-quality photos). The HealthcareImage component automatically loads appropriate healthcare/caregiving images:
- Hero section: Professional caregiver images
- Service illustrations: Nursing, therapy, medication, companion care images
- About page: Healthcare professional images

Images are loaded from Unsplash CDN and include error handling with fallback placeholders if images fail to load. No additional setup required - images load automatically.

## Development

Start the development server:

```bash
npm run dev
```

**The site will be available at `http://localhost:3000`**

The Vite dev server is configured to use port 3000 with `strictPort: true`, so it will always use port 3000 or fail if that port is unavailable.

### Troubleshooting Blank Page Issues

If you see a blank white page:

1. **Check Browser Console (F12)**
   - Open Developer Tools → Console tab
   - Look for red error messages
   - Copy any error messages you see

2. **Check Terminal Output**
   - Look at the terminal where `npm run dev` is running
   - Verify it shows: `Local: http://localhost:3000/`
   - Check for any compilation errors

3. **Verify Dependencies**
   ```bash
   npm install
   ```

4. **Clear Cache and Restart**
   ```bash
   # Stop the server (Ctrl+C), then:
   Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
   npm run dev
   ```

5. **Check Diagnostics Page**
   - Navigate to `http://localhost:3000/__diagnostics`
   - This page shows system status and helps identify issues

6. **Common Issues**
   - **Port 3000 in use**: Stop other applications using port 3000, or change the port in `vite.config.ts`
   - **Missing dependencies**: Run `npm install` again
   - **Browser cache**: Try hard refresh (Ctrl+Shift+R) or use Incognito mode
   - **TypeScript errors**: Check terminal for compilation errors

### Error Boundary

The app includes an Error Boundary that will display error messages instead of a blank page if a React error occurs. Check the browser console for detailed error information.

## Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── JACHS LOGO BLUE.png      # Primary logo (light backgrounds)
│   ├── JACHS LOGO WHITE.png      # Logo for dark sections
│   └── images/                    # Image assets
│       ├── hero-caregiver.jpg
│       ├── nurse-home-visit.jpg
│       ├── pt-session.jpg
│       ├── medication-support.jpg
│       └── companion-care.jpg
├── src/
│   ├── components/                # Reusable components
│   │   ├── Layout.tsx
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileCallButton.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── ContactForm.tsx
│   ├── pages/                     # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Careers.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx                    # Main app component with routing
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## Features

- **Responsive Design** - Mobile-first, works on all devices
- **Accessibility** - Semantic HTML, keyboard navigation, ARIA labels
- **SEO Optimized** - Meta tags, structured content
- **Contact Forms** - Mailto links (no backend required)
- **Mobile Navigation** - Slide-out menu for mobile devices
- **Sticky Call Button** - Mobile-only floating call button
- **FAQ Accordion** - Expandable FAQ section
- **Smooth Scrolling** - Smooth scroll to contact section

## Pages

1. **Home** (`/`) - Hero, services overview, how it works, testimonials, FAQ, contact form
2. **Services** (`/services`) - Detailed service descriptions
3. **About** (`/about`) - Mission, values, company information
4. **Contact** (`/contact`) - Contact information and form
5. **Careers** (`/careers`) - Job openings and application information
6. **Privacy** (`/privacy`) - Privacy policy

## Contact Information

- **Address:** 56 Central Avenue, Suite 314, Lynn, MA 01901
- **Phone:** 781-500-2893 (click-to-call)
- **Fax:** 781-998-0510
- **Email:** judahhealthcareservices@gmail.com (click-to-email)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Judah Health Care Services
