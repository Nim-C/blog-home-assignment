import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const Home: FC = () => {
  const { t: translate } = useTranslation();

  return (
    <div id="welcome-container">
      <h1>{translate('welcomePeople')}</h1>
    </div>
  );
};

export default Home;
