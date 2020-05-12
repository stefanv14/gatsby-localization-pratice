const website = require('./website');

module.exports = {
  en: {
    default: true,
    path: 'en',
    languageName: `EN`,
    locale: 'en',
    htmlLang: 'en',
    ogLang: 'en_US',
    dateFormat: 'DD/MM/YYYY',
    siteTitle: website.siteTitle, // Manifest 'name'
    siteShortName: website.siteShortName, // Manifest 'short_name'. MUST be shorter than 12 char
    siteDescription: website.siteDescription, // Manifest 'description'
    startUrl: '/', // Manifest 'start_url'
    slugs: {
      // page2: `page2`,
      about_us:`about_us`,
      bootcamp:`bootcamp`,
      partners: `partners`,
      blog: `blog`
    },
  },
  sr: {
    path: 'sr',
    languageName: `SR`,
    locale: 'sr',
    htmlLang: 'sr',
    ogLang: 'sr',
    dateFormat: 'DD.MM.YYYY',
    siteTitle: `Gatsby SR`, // Manifest 'name'
    siteShortName: `Gatsby SR`, // Manifest 'short_name'
    siteDescription: `Gatsby lokalizacija`, // Manifest 'description'
    startUrl: '/sr/', // Manifest 'start_url'
    slugs: {
      // page2: `sajt2`,
      about_us:`o_nama`,
      bootcamp:`bootcampsr`,
      partners: `partneri`,
      blog: `blogovi`
    },
  },
};
