export type Nullable<T> = T | null;

export type Language = 'en' | 'he';

export type Post = {
  mainTitle: string;
  summary: string;
  content: Paragraph[];
};

type Paragraph = {
  paragraphTitle?: string;
  paragraphText: string;
};

export type PostCollection = Record<string, Post>;

export type PostsCollectionContextType = {
  postCollection: PostCollection;
};
