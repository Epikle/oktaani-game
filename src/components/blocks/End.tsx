import { useEffect, useRef, useState } from 'react';

import useMousePos from '../../util/useMousePos';

import styles from './End.module.scss';

type Props = {
  isStarted: boolean;
  onEnd: () => void;
};

function calculateDistance(elem: DOMRect, x: number, y: number) {
  return Math.floor(
    Math.sqrt(
      Math.pow(x - (elem.x + elem.width / 2), 2) +
        Math.pow(y - (elem.y + elem.height / 2), 2)
    )
  );
}

const End: React.FC<Props> = ({ isStarted, onEnd }) => {
  const mousePosition = useMousePos();
  const divRef = useRef<HTMLDivElement>(null);
  const [showEnd, setShowEnd] = useState(false);
  const divPos = divRef.current?.getBoundingClientRect();

  useEffect(() => {
    setShowEnd(false);
  }, [isStarted]);

  useEffect(() => {
    if (
      isStarted &&
      divPos &&
      calculateDistance(divPos, mousePosition.x, mousePosition.y) < 30
    ) {
      setShowEnd(true);
    }
  }, [mousePosition, isStarted]);

  return (
    <div
      className={isStarted && showEnd ? styles.end : styles.hidden}
      onMouseOver={onEnd}
      ref={divRef}
    >
      END
    </div>
  );
};

export default End;
