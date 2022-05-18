export const widthBreakpoints = {
  sm: 36,
  md: 48,
  lg: 62,
  xl: 75
};

export const heightBreakpoints = {
  sm: 20,
  md: 30,
  lg: 60,
  xl: 80
};

export const mediaWidthQueries = (key: keyof typeof widthBreakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${widthBreakpoints[key]}em) { ${style} }`;
};

export const mediaHeightQueries = (key: keyof typeof heightBreakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-height: ${heightBreakpoints[key]}em) { ${style} }`;
};