import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from 'src/i18n/translations/en.json';
import hebrew from 'src/i18n/translations/he.json';

export default i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: english,
      he: hebrew,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // turn off xss protection because react is already safes from xss
    },
  });
