module.exports = {
    // ...other ESLint settings...
  
    settings: {
      // Add tel to the list of valid href schemes
      linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
      validHref: ['http:', 'https:', 'mailto:', 'tel:'], // Add 'tel:' here
    },
  };
  