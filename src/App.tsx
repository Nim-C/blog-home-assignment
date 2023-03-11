import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'src/i18n';

import { PostsCollectionContext } from 'src/context/postsCollectionContext';
import { Language, PostCollection, PostsCollectionContextType } from './types';

import RootRouter from './components/RootRouter';
import Header from './components/Header';
import { getPostsCollection } from './utils';

const LANGUAGE_TO_CONTENT_DIERCTION_MAP: Record<Language, 'rtl' | 'ltr'> = {
  en: 'ltr',
  he: 'rtl',
};

function App() {
  const mounted = useRef<boolean>(false);

  const { i18n } = useTranslation();
  const languageSelected = i18n.resolvedLanguage as Language;
  const [postCollection, setPostCollection] = useState<PostCollection>(
    getPostsCollection(languageSelected)
  );

  const postCollectionContextValue = useMemo<PostsCollectionContextType>(
    () => ({
      postCollection,
    }),
    [postCollection]
  );

  useEffect(() => {
    if (mounted.current) {
      document.body.setAttribute(
        'dir',
        LANGUAGE_TO_CONTENT_DIERCTION_MAP[languageSelected]
      );

      setPostCollection(getPostsCollection(languageSelected));
    }
    mounted.current = true;
  }, [languageSelected]);

  return (
    <>
      <Header />
      <PostsCollectionContext.Provider value={postCollectionContextValue}>
        <main>
          <RootRouter />
        </main>
      </PostsCollectionContext.Provider>
    </>
  );
}

export default App;
