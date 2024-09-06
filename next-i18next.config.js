module.exports = {
    i18n: {
      defaultLocale: 'tr', // Varsayılan dil
      locales: ['en', 'tr'], // Desteklenen diller
    },
    localePath: typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  };
  