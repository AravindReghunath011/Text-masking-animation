import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const useMousemove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 16); // Throttle to roughly 60fps

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousemove;
