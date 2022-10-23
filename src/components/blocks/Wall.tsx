import styles from './Wall.module.scss';

type Props = {
  onOver?: () => void;
  fake?: boolean;
};

const Wall: React.FC<Props> = ({ fake = false, onOver }) => {
  if (fake) return <div className={styles.wall} />;
  return <div className={styles.wall} onMouseOver={onOver} />;
};

export default Wall;
