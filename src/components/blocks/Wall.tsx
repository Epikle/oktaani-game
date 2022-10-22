import styles from './Wall.module.scss';

type Props = {
  onOver: () => void;
};

const Wall: React.FC<Props> = ({ onOver }) => {
  return <div className={styles.wall} onMouseOver={onOver}></div>;
};

export default Wall;
