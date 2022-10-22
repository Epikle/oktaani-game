import styles from './Start.module.scss';

type Props = {
  onStart: () => void;
};

const Start: React.FC<Props> = ({ onStart }) => {
  return (
    <div className={styles.start} onMouseLeave={onStart}>
      START
    </div>
  );
};

export default Start;
