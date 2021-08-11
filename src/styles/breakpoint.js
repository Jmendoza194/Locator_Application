const size = {
  xxs: "320px",
  xs: "425px",
  sm: "768px",
  med: "900px",
  lg: "1200px",
};
const device = {
  xxs: `max-width: ${size.xxs}`,
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  med: `max-width: ${size.med}`,
  lg: `max-width: ${size.lg}`,
};

export const breakpoint = { size, device };
