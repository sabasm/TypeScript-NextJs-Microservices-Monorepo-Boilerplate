export type ResponsiveStyles = {
  [key: string]: {
    [key: string]: string;
  };
};

export type BreakpointStyles = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type GlobalStyles = {
  sharedStyles: BreakpointStyles;
};

export type ComponentStyles = {
  [key: string]: BreakpointStyles;
};

// export type ResponsiveStyles = {
//   [key in keyof typeof Breakpoints]?: Record<string, string>;
// };
