export const widthBreakpoints = {
  sm: 37.5,  // 600px
  md: 48,    // 768px
  lg: 57.5,  // 920px
  xl: 75     // 1200px 
};

export const heightBreakpoints = {
  xs: 20,    // 320px
  sm: 30,    // 480px
  md: 45,    // 720px
  lg: 50,    // 800px
};

export const mediaWidthQueries = (key: keyof typeof widthBreakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${widthBreakpoints[key]}em) { ${style} }`;
};

export const mediaHeightQueries = (key: keyof typeof heightBreakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-height: ${heightBreakpoints[key]}em) { ${style} }`;
};
