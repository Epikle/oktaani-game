import { useEffect, useState } from 'react';

import Road from './Road';

import styles from './Heart.module.scss';

type Props = {
  isStarted: boolean;
  isGameOver: boolean;
  onAddLives: () => void;
};

const Heart: React.FC<Props> = ({ isStarted, isGameOver, onAddLives }) => {
  const [isTaken, setIsTaken] = useState(false);

  useEffect(() => {
    setIsTaken(false);
  }, [isGameOver]);

  const clickHandler = () => {
    setIsTaken(true);
    onAddLives();
  };

  if (!isStarted || isTaken) return <Road />;
  return (
    <div className={styles.heart} onClick={clickHandler}>
      ❤
    </div>
  );
};

export default Heart;
