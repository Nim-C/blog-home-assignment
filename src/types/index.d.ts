export type Nullable<T> = T | null;

export type Language = 'en' | 'he';

export type LanguageContextType = {
  currrentLanguage: Language;
  chooseLanguage: (chosenLanguage: Language) => void;
};
