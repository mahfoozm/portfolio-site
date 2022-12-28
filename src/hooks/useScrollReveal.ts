import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollReveal = (rootMargin: number): any => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    root: null,
    rootMargin: `${rootMargin}px 0px`,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return [ref, controls];
};

export default useScrollReveal;
