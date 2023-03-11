import EnglishPosts from 'src/assets/blogs/languages/en.json';
import HebrewPosts from 'src/assets/blogs/languages/he.json';

import { Language, Post } from './types';

const LANGUAGE_TO_POSTS_MAP: Record<Language, Record<string, Post>> = {
  en: EnglishPosts,
  he: HebrewPosts,
};

export const getPostsCollection = (language: Language) =>
  LANGUAGE_TO_POSTS_MAP[language];
