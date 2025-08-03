const customEntities = {
  "cedis": "₵",

  "sun": "☀️",
  "heart": "❤️",

  "cloud": {
    svg: `
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M19 18H6a4 4 0 0 1 0-8
          6 6 0 0 1 11.8 1.5A3.5 3.5 0 0 1 19 18z"/>
      </svg>`,
    png: `<img src="assets/icons/cloud.png" alt="cloud" class="icon-png">`,
    fallbackText: "☁️"
  },

  "moon": {
    svg: `
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M20.742 13.045a8.088 8.088 0 01-10.331-10.33
          10 10 0 1010.33 10.33z"/>
      </svg>`,
    fallbackText: "🌙"
  }
};

export default customEntities;
