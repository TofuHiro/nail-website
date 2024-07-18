export const drawNails = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 8 },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

export const drawStem = {
  hidden: { rotate: 45, pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i;
    return {
      rotate: 0,
      pathLength: 1,
      opacity: 1,
      transition: {
        rotate: {duration: 1},
        pathLength: { delay, type: "spring", duration: 4 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const drawLeaves = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    var delay = 1.5;
    if (i != null) {
      delay += i;
    }
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: 6 },
        opacity: { delay, duration: 0.1 },
      },
    };
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => {
    const delay = i;
    return {
      opacity: 1,
      transition: {
        opacity: { delay, duration: .5 },
      },
    };
  },
};

export const fadeInRight = {
  hidden: { opacity: 0 , x: -100 },
  visible: (i: number) => {
    const delay = i;
    return {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { delay, duration: 1 },
        x: { delay, duration: 1 },
      },
    };
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0 , x: 100 },
  visible: (i: number) => {
    const delay = i;
    return {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { delay, duration: 1 },
        x: { delay, duration: 1 },
      },
    };
  },
};

export const fadeInUp = {
  hidden: { opacity: 0 , y: 50 },
  visible: (i: number) => {
    const delay = i;
    return {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { delay, duration: 1 },
        y: { delay, duration: 1 },
      },
    };
  },
};

export const NavMoveDown = {
  hidden: { y: -150 },
  visible: (i: number) => {
    const delay = i;
    return {
      y: 0,
      transition: {
        y: { delay, duration: 1 },
      },
    };
  },
};
