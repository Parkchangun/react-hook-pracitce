import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1) => {
  const element = useRef();

  useEffect(() => {
    if(typeof duration !== 'number') return;
    if (element.current) {
      const { current } = element;
      // @ts-ignore
      current.style.transition = `opacity ${duration}s`;
      // @ts-ignore
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };

};

export default useFadeIn;
