const customEntities = {
  // ────────────── BASIC SYMBOLS ──────────────
  "cedis": "₵",
  "euro": "€",
  "yen": "¥",
  "tick": "✔️",
  "cross": "❌",
  "arrow-right": "➡️",
  "arrow-left": "⬅️",
  "check": "✅",
  "star": "⭐",

  // ────────────── EMOJI EXPRESSIONS ──────────────
  "heart": "❤️",
  "blue-heart": "💙",
  "smile": "😊",
  "sad": "😢",
  "fire": "🔥",
  "cool": "😎",
  "greet": "Akwaaba!", // Text greeting
  "ghflag": "🇬🇭",

  // ────────────── INLINE SVG ICONS ──────────────
  "cloud": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M19 18H6a4 4 0 0 1 0-8 6 6 0 0 1 11.8 1.5A3.5 3.5 0 0 1 19 18z"/>
    </svg>
  `,
  "sun": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16v2m0 16v2m8-10h2m-18 0H2m15.54 6.46l1.41 1.41m-12.73 0l-1.41 1.41m0-12.73l1.41-1.41m12.73 0l1.41-1.41"/>
    </svg>
  `,
  "moon": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M9.37 5.51a7 7 0 1 0 9.12 9.12A9 9 0 1 1 9.37 5.51z"/>
    </svg>
  `,

  // ────────────── PNG FALLBACK ICONS ──────────────
  "cloud-png": `
    <img src="assets/icons/cloud.png" alt="cloud icon" class="icon-png">
  `,
  "sun-png": `
    <img src="assets/icons/sun.png" alt="sun icon" class="icon-png">
  `,
  "moon-png": `
    <img src="assets/icons/moon.png" alt="moon icon" class="icon-png">
  `
};

export default customEntities;
