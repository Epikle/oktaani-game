import { ReactNode } from 'react';

import styles from './Overlay.module.scss';

const Overlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
