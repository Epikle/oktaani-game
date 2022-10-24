import styles from './Wall.module.scss';

type Props = {
  onOver?: () => void;
  fake?: boolean;
  moving?: {
    direction: string;
    distance: number;
    time: string;
    delay: string;
  };
};

const Wall: React.FC<Props> = ({ fake = false, moving, onOver }) => {
  if (moving) {
    const styleDirection =
      moving.direction === 'y' ? styles['moving-y'] : styles['moving-x'];
    return (
      <div
        className={[styles.wall, styleDirection].join(' ')}
        onMouseOver={onOver}
        style={
          {
            '--distance': moving.distance,
            '--time': moving.time,
            '--delay': moving.delay,
          } as React.CSSProperties
        }
      />
    );
  }
  if (fake) return <div className={styles.wall} />;
  return <div className={styles.wall} onMouseOver={onOver} />;
};

export default Wall;
