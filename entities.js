const customEntities = {
  // Currency
  "cedis": "₵",

  // Emojis
  "sun": "☀️",
  "heart": "❤️",
  "star": "⭐",

  // Inline SVG (Preferred)
  "cloud": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M19 18H6a4 4 0 0 1 0-8 
        6 6 0 0 1 11.8 1.5A3.5 3.5 0 0 1 19 18z"/>
    </svg>
  `,

  // PNG fallback for cloud (optional)
  "cloud-png": `<img src="assets/icons/cloud.png" alt="cloud" class="icon-png">`,

  // Add more symbols or SVGs
  "moon": `
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M20.742 13.045a8.088 8.088 0 01-10.331-10.33 
        10 10 0 1010.33 10.33z"/>
    </svg>
  `
};

export default customEntities;
