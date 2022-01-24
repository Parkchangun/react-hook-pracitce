import {useEffect, useRef} from "react";

const useClick = (onClick) => {
  const el = useRef();

  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }

    // @ts-ignore
    el.current?.addEventListener('click', onClick);

    return () => {
      // @ts-ignore
      el.current?.removeEventListener('click', onClick);
    }

  }, []);

  return el;
}

export default useClick;
