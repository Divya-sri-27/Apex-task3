# Advanced CSS & JavaScript — Project Document

**Title:** Advanced CSS & JavaScript — Interactive Web Applications  
**Author:** Generated for user  
**Date:** 2025-09-13

---

## 1. Project Overview
This project demonstrates how to build a **responsive**, **interactive**, and **data-driven** web application using modern CSS and JavaScript features. The deliverable includes:
- A responsive layout using CSS Grid & Flexbox and media queries.
- An interactive **image carousel** with automatic/manual navigation.
- An interactive **quiz** with scoring and results.
- A **live API** section demonstrating `fetch()` to retrieve a random joke.

All source files are static and can be deployed to **GitHub Pages**, **Netlify**, or any static hosting.

---

## 2. Objectives
- Master responsive design with media queries.
- Implement interactive components using DOM manipulation and event handling.
- Fetch and display real-time data using the Fetch API (async/await).
- Improve UI/UX with transitions, state management, and accessibility considerations.

---

## 3. Files Included
- `index.html` — Main HTML file with structure for hero, carousel, quiz, and API demo.
- `styles.css` — Styling for layouts, responsive rules, and components.
- `script.js` — JavaScript for interactivity (carousel, quiz, API).
- `images/img1.svg`, `images/img2.svg`, `images/img3.svg` — Simple SVG illustrations used by the carousel.
- `README.md` — This document.

---

## 4. How to Run Locally
1. Unzip the provided archive.
2. Open `index.html` in your web browser.
3. For the API demo, ensure your browser has internet access (the joke API is fetched client-side).

Optional: Serve with a simple server:
```bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

---

## 5. Implementation Notes & Highlights
### Responsive Design
- Uses CSS variables for theme control.
- Media queries adjust layout for small screens (`max-width:700px`) for improved usability.
- Flexbox and the grid-friendly structure provide robust layouts.

### Image Carousel
- Uses a transform on the `.carousel-track` to shift slides.
- Supports manual prev/next and automatic cycling with a toggle to enable/disable auto-advance.

### Quiz
- Simple quiz data is embedded in `script.js`. Extendable to load from JSON or an API.
- Buttons are disabled upon selection to avoid multiple answers.
- Basic feedback (correct/wrong) uses visual states.

### API
- Fetches from `https://official-joke-api.appspot.com/jokes/random`.
- Gracefully degrades with error messaging if the network fails.

---

## 6. Accessibility & UX
- Buttons and interactive controls include `aria-*` labels where relevant.
- The joke output uses `aria-live="polite"` so screen readers announce updates politely.
- Ensure images have descriptive `alt` text (SVGs included).

---

## 7. Testing Checklist
- [ ] Layout scales correctly between mobile, tablet, and desktop.
- [ ] Carousel navigation works with buttons and on window resize.
- [ ] Quiz flows through all questions and shows the correct score.
- [ ] Fetch button returns a joke when network is available.
- [ ] Dark mode persists via `localStorage`.

---

## 8. Future Enhancements
- Add more quiz questions, load via external JSON.
- Swipe gestures for carousel (touch events).
- Use IntersectionObserver to lazy-load images for performance.
- Add unit tests for key JS logic (if converted to modules).
- Convert into a Progressive Web App (PWA) with offline capabilities and service worker.

---

## 9. License & Attribution
Use and modify this project freely. No external assets are required to run the demo.

---

## 10. Contact
If you want this packaged differently (for example, split into separate modules, or with build tooling like a Vite setup) tell me and I'll prepare it.

