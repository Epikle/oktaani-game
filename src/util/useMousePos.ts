import { useState, useEffect } from 'react';

const useMousePos = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (event: MouseEvent) => {
    setPosition({ x: event.x, y: event.y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return position;
};

export default useMousePos;
