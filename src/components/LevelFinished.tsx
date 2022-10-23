import Overlay from './util/Overlay';

import styles from './LevelFinished.module.scss';

type Props = {
  time: number;
  onNextMap: () => void;
};

const LevelFinished: React.FC<Props> = ({ time, onNextMap }) => {
  const endTime = ((Date.now() - time) / 1000).toFixed(2);

  return (
    <Overlay>
      <span className={styles.finished} data-time={endTime}>
        FINISHED
      </span>
      <button className={styles['new-game']} onClick={onNextMap}>
        Continue
      </button>
    </Overlay>
  );
};

export default LevelFinished;
