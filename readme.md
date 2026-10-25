# ✦ Kyson Dana Inspired Portfolio & CV Website

A production-grade, editorial CV and portfolio website engineered for high-volume project showcases (20 to 50+ projects) while preserving the high-contrast minimalism, typography, and motion choreography of **[kysondana.com](https://www.kysondana.com/)**.

---

## ⚡ Quick Preview

You can preview the website immediately in several ways:

### Option 1: Double-Click
Open `index.html` directly in any modern browser (Chrome, Edge, Safari, Arc, Firefox).

### Option 2: Local HTTP Server (Recommended)
Using Python or Node in PowerShell or Terminal:
```powershell
# Python
python -m http.server 3000

# or Node.js / npx
npx serve .
```
Then visit `http://localhost:3000`.

---

## 📁 Project Structure

```
D:\Projs\CV_Website\
├── index.html                      # Main HTML structure & views (Home, Work, About, Modal)
├── readme.md                       # Setup & customization guide
├── css\
│   └── style.css                   # Custom styles, grain noise overlay, custom cursor, Lenis
├── js\
│   ├── data.js                     # Master data store (Projects, Experience, Skills, Config)
│   └── app.js                      # Lenis smooth scroll, magnetic cursor, filtering, modals
├── assets\
│   └── images\                     # Drop your portraits, screenshots, and CV PDF here
└── ShaanReferences\                # Ignored by git (local personal notes & requirements)
    └── portfolio_data_requirements.md
```

---

## 🎨 Key Features & Architecture

1. **Editorial Design System:**
   - **Colors:** Deep Matte Obsidian (`#0A0A0A`), Elevated Charcoal (`#121212`), Warm Alabaster Off-White (`#F4F3EF`), Muted Grey (`#8E8D8A`).
   - **Typography:** Plus Jakarta Sans (tight tracking `-0.03em`), Instrument Serif (italicized accents), JetBrains Mono (technical metadata).
   - **Texture:** Persistent SVG fractal-noise film grain overlay (`opacity: 0.038`).
2. **Motion Choreography:**
   - **Lenis Smooth Scroll:** Weightless, inertial scrolling.
   - **Magnetic Follower Cursor:** Dynamic pill that trails the mouse with lerp physics and expands on project cards ("View Work" / "Coming soon").
   - **Scroll Reveals:** Cubic-bezier `(0.16, 1, 0.3, 1)` staggered animations.
3. **High-Volume Project Vault ("Shit Load of Projects"):**
   - **Home View:** Flagship 5–6 featured projects in an asymmetric editorial grid (`col-span-7`, `col-span-5`, `col-span-12`).
   - **Work View (`/work`):** Complete archive supporting 20, 30, or 50+ projects.
     - Live category filter pills (`All`, `AI & ML`, `Full-Stack`, `Design & Brand`, `Open Source`).
     - Instant real-time search by keyword, title, or stack.
     - Layout switcher: **Grid View** vs **Index Table View**.
     - In **Index Table View**, hovering over any row spawns a floating thumbnail card following the cursor!
4. **Rich Case Study Modal:**
   - Deep dive into problem, architecture, metrics, role, live demo URL, and GitHub repository.
   - Keyboard accessible (`Esc` closes modal) with scroll locking.
5. **Kyson Dana `/about` Page:**
   - Split narrative hero + high-contrast portrait container.
   - Horizontal Experience Timeline (`Year Range | Company | / In-house or Freelance | Role Title`).
   - 3-Column Capabilities Matrix (Product Engineering, AI & Interactive Design, Leadership & Strategy).
   - "Beyond the Terminal" candid origin story.

---

## 📝 Customization Instructions

Please review [`ShaanReferences/portfolio_data_requirements.md`](file:///D:/Projs/CV_Website/ShaanReferences/portfolio_data_requirements.md) to provide your personal details, career history, and project list. Whenever you're ready, simply paste your information and we will update `js/data.js` and `assets/` for you!
