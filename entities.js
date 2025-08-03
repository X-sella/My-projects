const customEntities = {
  // === CURRENCIES & SYMBOLS ===
  "cedis": "₵",
  "naira": "₦",
  "euro": "€",
  "dollar": "$",
  "yen": "¥",
  "pound": "£",
  "btc": "₿",
  "percent": "%",
  "plus": "+",
  "minus": "-",

  // === FLAGS ===
  "ghflag": "🇬🇭",
  "ngflag": "🇳🇬",
  "usflag": "🇺🇸",
  "ukflag": "🇬🇧",
  "frflag": "🇫🇷",
  "kenyaflag": "🇰🇪",
  "saflag": "🇿🇦",
  "world": "🌍",

  // === UI/ICONIC SYMBOLS ===
  "tick": "✔️",
  "cross": "❌",
  "arrowup": "⬆️",
  "arrowdown": "⬇️",
  "arrowleft": "⬅️",
  "arrowright": "➡️",
  "checkmark": "✅",
  "warning": "⚠️",
  "info": "ℹ️",
  "clock": "🕒",
  "star": "⭐",
  "lock": "🔒",
  "unlock": "🔓",

  // === MOODS & EMOJIS ===
  "smile": "😊",
  "laugh": "😂",
  "sad": "😢",
  "heart": "💙",
  "fire": "🔥",
  "clap": "👏",
  "wave": "👋",
  "cool": "😎",
  "think": "🤔",
  "sleep": "😴",
  "pray": "🙏",
  "eyes": "👀",

  // === DEV & MARKUP SHORTCODES ===
  "br": "<br>",
  "nbsp": "&nbsp;",
  "code": "<code>",
  "pre": "<pre>",
  "hr": "<hr>",
  "leftquote": "“",
  "rightquote": "”",
  "openbrace": "{",
  "closebrace": "}",

  // === TEXT PHRASES ===
  "greet": "Akwaaba!",
  "thanks": "Medaase 🙏",
  "welcome": "You're welcome!",
  "promo": "🔥 &cedis;50 OFF!",
  "subscribe": "🔔 Subscribe Now",
  "verified": "✔️ Verified Member",
  "exclusive": "⭐ Exclusive Access",
  "beta": "🧪 Beta Feature",

  // === SVG ICONS (inline) ===
  "cloud": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M6 19h13a4 4 0 0 0 0-8 5 5 0 0 0-9-3
      5 5 0 0 0-4 4 4 4 0 0 0 0 8z"/>
    </svg>
  `,
  "sun": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16v2m0
      16v2m8-10h2m-18 0H2m15.54 6.46l1.41 1.41m-12.73
      0l-1.41 1.41m0-12.73l1.41-1.41m12.73 0l1.41-1.41"/>
    </svg>
  `,
  "checkcircle": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 
      10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 
      1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
    </svg>
  `,
  "staricon": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 
      9.24l-7.19-.61L12 2 9.19 8.63 2 
      9.24l5.46 4.73L5.82 21z"/>
    </svg>
  `,
  "menu": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18"/>
    </svg>
  `,

  // === FUN / SYMBOLIC ===
  "rocket": "🚀",
  "bug": "🐞",
  "coffee": "☕",
  "idea": "💡",
  "loading": "⏳",
  "build": "🔧",
  "rain": "🌧️",
  "wind": "💨",
  "starburst": "🌟",

  // === TIME / DATE ===
  "today": new Date().toLocaleDateString(),
  "time": new Date().toLocaleTimeString(),

  // === HIDDEN DEBUG SYMBOLS (for dev logs, etc.) ===
  "_devmode": "[[DEVMODE]]",
  "_internal": "[INTERNAL USE ONLY]",
  "_secret": "[🔒 HIDDEN FIELD]"
};

export default customEntities;
