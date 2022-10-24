import styles from './Road.module.scss';

type Props = {
  hide?: boolean;
};

const Road: React.FC<Props> = ({ hide }) => {
  return (
    <div
      className={hide ? [styles.road, styles.hide].join(' ') : styles.road}
    />
  );
};

export default Road;
