import Overlay from './util/Overlay';

import styles from './ResetLevel.module.scss';

type Props = {
  onReset: () => void;
};

const ResetLevel: React.FC<Props> = ({ onReset }) => {
  return (
    <Overlay>
      <span className={styles['reset-level']}>-1 HEART ❤</span>
      <button className={styles['new-game']} onClick={onReset}>
        Try again
      </button>
    </Overlay>
  );
};

export default ResetLevel;
