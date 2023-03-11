import { createContext } from 'react';

import { LanguageContextType } from 'src/types';

export const LanguageContext = createContext<LanguageContextType | null>(null);
