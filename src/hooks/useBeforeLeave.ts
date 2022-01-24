import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== 'function') return;

    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) onBefore();
    };

    document.addEventListener('mouseleave', handle);

    return () => {
      document.removeEventListener('mouseleave', handle);
    };
  }, []);
};

export default useBeforeLeave;
