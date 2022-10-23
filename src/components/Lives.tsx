import styles from './Lives.module.scss';

type Props = {
  livesCount: number;
};

const Lives: React.FC<Props> = ({ livesCount }) => {
  if (livesCount < 0) return null;
  return (
    <ul className={styles.lives}>
      {Array.from(Array(livesCount)).map((_, index) => (
        <li key={index}>❤</li>
      ))}
    </ul>
  );
};

export default Lives;
