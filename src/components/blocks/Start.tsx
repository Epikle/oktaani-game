import styles from './Start.module.scss';

type Props = {
  onStart: () => void;
  isStarted: boolean;
};

const Start: React.FC<Props> = ({ onStart, isStarted }) => {
  return (
    <div
      className={
        isStarted
          ? [styles.start, styles['is-started']].join(' ')
          : styles.start
      }
      onMouseLeave={onStart}
    >
      START
    </div>
  );
};

export default Start;
