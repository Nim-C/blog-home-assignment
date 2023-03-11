export type Nullable<T> = T | null;

export type Language = 'en' | 'he';

type Paragraph = {
  paragraphTitle?: string;
  paragraphText: string;
};

export type Post = {
  mainTitle: string;
  summary: string;
  content: Paragraph[];
};
