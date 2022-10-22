import styles from './End.module.scss';

type Props = {
  onEnd: () => void;
};

const End: React.FC<Props> = ({ onEnd }) => {
  return (
    <div className={styles.end} onMouseOver={onEnd}>
      END
    </div>
  );
};

export default End;
