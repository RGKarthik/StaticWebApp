# Troubleshooting Guide

## Issue: Buttons don't show results when clicked

### Problem
When you click on the alphabet buttons (A-Z), no countries are displayed.

### Common Causes & Solutions

#### 1. **CORS (Cross-Origin) Issue** 
**Cause:** Opening `index.html` directly in browser (file:// protocol) blocks loading of `countries.json`

**Solutions:**
- **Option A:** Use the included Node.js server
  ```bash
  node server.js
  ```
  Then open: http://localhost:8000

- **Option B:** Use Python server (if available)
  ```bash
  python -m http.server 8000
  ```
  Then open: http://localhost:8000

- **Option C:** Use Live Server extension in VS Code

#### 2. **Missing countries.json file**
**Check:** Make sure `countries.json` exists in the same folder as `index.html`

#### 3. **JavaScript disabled**
**Check:** Enable JavaScript in your browser settings

#### 4. **Browser compatibility**
**Use:** Modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

### How to Debug

1. **Open Developer Tools** (F12 key)
2. **Check Console tab** for error messages
3. **Look for these messages:**
   - ✅ "Successfully loaded countries: 195"
   - ❌ "Error loading countries data"

### Expected Behavior

When working correctly:
- Page loads with 26 alphabet buttons visible
- Clicking a letter shows countries starting with that letter
- Console shows: "Successfully loaded countries: 195"
- Results appear in a grid layout below buttons

### Quick Test

1. Open http://localhost:8000 (with server running)
2. Click letter "A" 
3. Should see countries like Afghanistan, Albania, Algeria, etc.
4. Check browser console (F12) for debug messages