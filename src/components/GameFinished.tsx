import Overlay from './util/Overlay';

import styles from './GameFinished.module.scss';

type Props = {
  onReset: () => void;
};

const GameFinished: React.FC<Props> = ({ onReset }) => {
  return (
    <Overlay>
      FINISHED{' '}
      <button className={styles['new-game']} onClick={onReset}>
        Start new game
      </button>
    </Overlay>
  );
};

export default GameFinished;
