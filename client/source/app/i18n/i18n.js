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
          'Main title': 'Main title',
          'Main 1st paragraph': 'First sentence in English. Second sentence in English. Third sentence in English. Another sentence in English. Another sentence in English. Another sentence in English. Another sentence in English. Another sentence in English. Almost last sentence in English. Last sentence in English.',
          'Main 2nd paragraph': 'Another paragraph. Another sentence. Another boring text. More wasted time reading this. Amazing!',
          'Forgot password': 'Forgot password?',
          'Create account': 'Create a new account',
          Login: 'Login',
          Password: 'Password',
          'First name': 'First Name',
          'Last name': 'Last Name',
          'Confirm password': 'Confirm Password',
          Registe: 'Register',
          'Have account': 'Have an account'
        }
      },
      pl: {
        translations: {
          'Main title': 'Główny tytuł',
          'Main 1st paragraph': 'Pierwsze zdanie po polsku. Drugie zdanie po polsku. Trzecie zdanie po polsku. Kolejne zdanie po polsku. Kolejne zdanie po polsku. Kolejne zdanie po polsku. Kolejne zdanie po polsku. Kolejne zdanie po polsku. Prawie ostatnie zdanie po polsku. Ostatnie zdanie po polsku.',
          'Main 2nd paragraph': 'Kolejny akapit. Kolejne zdanie. Kolejny nudny tekst. Więcej zmarnowanego czasu na czytanie. Niesamowite!',
          'Forgot password': 'Zapomniałeś hasło?',
          'Create account': 'Stwórz nowe konto',
          Login: 'Zaloguj',
          Password: 'Hasło',
          'First name': 'Pierwsze Imię',
          'Last name': 'Nazwisko',
          'Confirm password': 'Potwierdź Hasło',
          Register: 'Zarejestruj',
          'Have account': 'Posiadasz konto'
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
