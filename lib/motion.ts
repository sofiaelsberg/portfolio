export const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.2, 0.75, 0.2, 1] },
  },
} as const;
