export const parentVar = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

export const fadeUp = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const fadeUpQuick = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const fadeLeft = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const fadeUpDelay = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};
