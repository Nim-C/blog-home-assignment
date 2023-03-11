import { FC } from 'react';

import { Language } from 'src/types';
import { ReactComponent as GbFlag } from 'src/assets/flags/gb-flag.svg';
import { ReactComponent as IlFlag } from 'src/assets/flags/Il-flag.svg';

import './styles.scss';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  languageId: Language;
}

const LANGUAGE_TO_FLAGS_MAP: Record<Language, typeof GbFlag> = {
  en: GbFlag,
  he: IlFlag,
};

const LanguageSelectorButton: FC<LanguageSelectorProps> = ({ languageId }) => {
  const { i18n } = useTranslation();
  const Flag = LANGUAGE_TO_FLAGS_MAP[languageId];

  const handleButtonClick = () => i18n.changeLanguage(languageId);

  const isLanguageSelected = i18n.resolvedLanguage === languageId;

  return (
    <button
      type="button"
      className={`flag-button ${isLanguageSelected ? 'selected' : ''}`}
      onClick={handleButtonClick}
      disabled={isLanguageSelected}
    >
      <Flag />
    </button>
  );
};

export default LanguageSelectorButton;
