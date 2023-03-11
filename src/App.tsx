import { useEffect, useRef } from 'react';

import 'src/i18n';

// import { Language } from 'src/types/index';
// import { LanguageContext } from 'src/context/languageContext';

import RootRouter from './components/RootRouter';
import Header from './components/Header';

function App() {
  // const [language, setLanguage] = useState<Language>('en');
  const mounted = useRef<boolean>(false);

  // const languageContextValue = useMemo(
  //   () => ({ currrentLanguage: language, chooseLanguage: setLanguage }),
  //   [language]
  // );

  useEffect(() => {
    if (mounted.current) {
      // console.log('');
    }
    mounted.current = true;
  }, []);

  return (
    // <LanguageContext.Provider value={languageContextValue}>
    <>
      <Header />
      <main>
        <RootRouter />
      </main>
    </>
    // </LanguageContext.Provider>
  );
}

export default App;
