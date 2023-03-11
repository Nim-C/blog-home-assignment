import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import EnglishPosts from 'src/assets/blogs/languages/en.json';
import HebrewPosts from 'src/assets/blogs/languages/he.json';

import { Language, Post } from 'src/types';
import PostContent from 'src/components/PostContent';

const LANGUAGE_TO_POSTS_MAP: Record<Language, Record<string, Post>> = {
  en: EnglishPosts,
  he: HebrewPosts,
};

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const languageSelected = i18n.resolvedLanguage as Language;
  const posts: Record<string, Post> = LANGUAGE_TO_POSTS_MAP[languageSelected];
  const selectedPost = posts[postId as string];

  if (!selectedPost) {
    navigate('/blog/');
    return null;
  }

  return <PostContent post={selectedPost} />;
};

export default PostPage;
