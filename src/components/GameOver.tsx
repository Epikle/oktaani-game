import Overlay from './util/Overlay';

import styles from './GameOver.module.scss';

type Props = {
  onReset: () => void;
};

const GameOver: React.FC<Props> = ({ onReset }) => {
  return (
    <Overlay>
      <span className={styles['game-over']}>GAME OVER</span>
      <button className={styles['new-game']} onClick={onReset}>
        Start new game
      </button>
    </Overlay>
  );
};

export default GameOver;
