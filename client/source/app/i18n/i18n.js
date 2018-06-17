import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Dupa: 'To get started, edit <1>src/App.js</1> and save to reload.',
          'Welcome to React': 'Welcome to React and react-i18next'
        }
      },
      pl: {
        translations: {
          Dupa: 'Starte in dem du, <1>src/App.js</1> editierst und speicherst.',
          'Welcome to React': 'Willkommen bei React und react-i18next'
        }
      }
    },

    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });


export default i18n;
