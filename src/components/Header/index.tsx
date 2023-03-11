import { Link } from 'react-router-dom';
import LanguageSelectorButton from 'src/i18n/LanguageSelectorButton';

import './styles.scss';

const Header = () => {
  return (
    <header>
      <div id="header-links-container">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div id="language-select-container">
        <LanguageSelectorButton languageId="en" />
        <LanguageSelectorButton languageId="he" />
      </div>
    </header>
  );
};
export default Header;
