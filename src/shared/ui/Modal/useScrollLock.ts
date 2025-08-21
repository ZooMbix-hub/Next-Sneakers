import { useEffect, useRef } from 'react';

export const useScrollLock = (lock: boolean) => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (lock) {
      scrollYRef.current = window.scrollY;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';

      document.body.style.touchAction = 'none';

    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';

      requestAnimationFrame(() => {
        window.scrollTo(0, scrollYRef.current);
      });
    }

    return () => {
      if (lock) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.touchAction = '';

        requestAnimationFrame(() => {
          window.scrollTo(0, scrollYRef.current);
        });
      }
    };
  }, [lock]);
};
