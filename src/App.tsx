import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import 'src/i18n';

import { Language } from './types';

import RootRouter from './components/RootRouter';
import Header from './components/Header';

const LANGUAGE_TO_CONTENT_DIERCTION_MAP: Record<Language, 'rtl' | 'ltr'> = {
  en: 'ltr',
  he: 'rtl',
};

function App() {
  const { i18n } = useTranslation();
  const languageSelected = i18n.resolvedLanguage as Language;

  document.body.setAttribute(
    'dir',
    LANGUAGE_TO_CONTENT_DIERCTION_MAP[languageSelected]
  );

  return (
    <>
      <Header />
      <main>
        <RootRouter />
      </main>
    </>
  );
}

export default App;
