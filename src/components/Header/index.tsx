import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelectorButton from 'src/components/LanguageSelectorButton';

import './styles.scss';

const Header = () => {
  const { t: translate } = useTranslation();
  return (
    <header>
      <div id="header-links-container">
        <Link to="/">{translate('home')}</Link>
        <Link to="/blog">{translate('blog')}</Link>
      </div>
      <div id="language-select-container">
        <LanguageSelectorButton languageId="en" />
        <LanguageSelectorButton languageId="he" />
      </div>
    </header>
  );
};
export default Header;
