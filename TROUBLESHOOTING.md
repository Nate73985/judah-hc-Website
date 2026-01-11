# Troubleshooting Blank Page Issue

If you're seeing a blank white page at `http://localhost:3001`, follow these steps:

## Step 1: Check Browser Console

1. Open your browser's Developer Tools (F12 or Right-click → Inspect)
2. Go to the **Console** tab
3. Look for any red error messages
4. Copy any error messages you see

Common errors:
- `Cannot find module` - Missing dependencies
- `Failed to load resource` - Missing files
- `Uncaught TypeError` - JavaScript error

## Step 2: Check Network Tab

1. In Developer Tools, go to the **Network** tab
2. Refresh the page (F5)
3. Look for any failed requests (red status codes)
4. Check if `main.tsx` or other JS files are loading

## Step 3: Verify Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

## Step 4: Clear Cache and Restart

1. Stop the dev server (Ctrl+C)
2. Clear browser cache or use Incognito/Private mode
3. Delete `node_modules/.vite` folder if it exists
4. Restart the dev server:

```bash
npm run dev
```

## Step 5: Check for Missing Files

The following files are optional but recommended:
- `public/JACHS LOGO BLUE.png` - Header logo
- `public/JACHS LOGO WHITE.png` - Footer logo
- `public/images/hero-caregiver.jpg` - Hero image
- `public/images/nurse-home-visit.jpg` - Services images
- `public/images/pt-session.jpg` - Therapy image
- `public/images/medication-support.jpg` - Medication image
- `public/images/companion-care.jpg` - Companion care image

**Note:** Missing images won't cause a blank page - they'll just show broken image icons. The page should still render.

## Step 6: Verify Port

The Vite config is set to use port 3000, but if that's taken, Vite will automatically use the next available port (like 3001). This is normal.

## Step 7: Check Terminal Output

Look at the terminal where you ran `npm run dev`. It should show:
- The local URL (e.g., `http://localhost:3001`)
- Any compilation errors or warnings

## Common Solutions

### If you see "Cannot find module" errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### If you see React errors:
- Make sure you're using Node.js 18+
- Check that all imports are correct

### If the page loads but is completely white:
- Check the browser console for JavaScript errors
- Verify that CSS is loading (check Network tab for `index.css`)

## Still Having Issues?

1. Share the error message from the browser console
2. Share the terminal output from `npm run dev`
3. Check that you're accessing the correct URL shown in the terminal
