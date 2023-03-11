import { createContext } from 'react';

import { PostsCollectionContextType } from 'src/types';

export const PostsCollectionContext =
  createContext<PostsCollectionContextType | null>(null);
