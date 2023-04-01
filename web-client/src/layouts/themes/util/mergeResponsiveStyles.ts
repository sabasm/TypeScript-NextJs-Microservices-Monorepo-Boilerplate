import { breakpoints } from '@/layouts/themes/globalSettings';

type ResponsiveStyles = Record<string, Record<string, string>>;
/**
 * This function takes three arguments:
 * defaultStyles is an object containing the default styles for the component.
 * responsiveStyles is an object containing the responsive styles for the component,
 * where each key is a breakpoint name and the value is an object with the styles for
 * that breakpoint.
 * currentBreakpoint is a string containing the name of the current breakpoint.
 * The function loops through the breakpoints, starting from the current one and going down
 * to the smallest one. For each breakpoint, it checks if there are any responsive styles
 * defined for that breakpoint. If there are, it merges those styles with the current
 * merged styles. Finally, it returns the merged styles.
 *
 * You can use this function to merge the default styles with the responsive styles for a component at each breakpoint, and then pass the resulting styles to the component's styled-components style declaration.
 * @param defaultStyles
 * @param responsiveStyles
 * @param currentBreakpoint
 * @returns
 */
const mergeResponsiveStyles = (
  defaultStyles: Record<string, string>,
  responsiveStyles: ResponsiveStyles,
  currentBreakpoint: string
): Record<string, string> => {
  const currentBreakpointIndex = Object.keys(breakpoints).indexOf(currentBreakpoint);
  let mergedStyles = { ...defaultStyles };

  for (let i = currentBreakpointIndex; i >= 0; i--) {
    const breakpointName = Object.keys(breakpoints)[i];

    if (responsiveStyles[breakpointName]) {
      mergedStyles = { ...mergedStyles, ...responsiveStyles[breakpointName] };
    }
  }

  return mergedStyles;
};

export default mergeResponsiveStyles;
