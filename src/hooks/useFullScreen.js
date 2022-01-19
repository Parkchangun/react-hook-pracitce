import { useRef } from 'react';

const useFullScreen = (callback) => {
  const element = useRef();

  const checkCallback = isFull => {
    if(callback && typeof callback === 'function') {
      callback(isFull);
    }
  }

  const triggerFull = () => {
    if(element.current) {
      if(element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if(element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if(element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if(element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      checkCallback(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    checkCallback(false);
  };

  return { element, triggerFull, exitFull };
};

export default useFullScreen;
