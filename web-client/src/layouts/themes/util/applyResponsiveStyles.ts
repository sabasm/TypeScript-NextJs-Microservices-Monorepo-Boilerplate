import { css } from 'styled-components';
import { breakpoints } from '@/layouts/themes/globalSettings';

const applyResponsiveStyles = (props: any) => {
  const { theme } = props;
  console.log('props', props)
  const responsiveStyles = theme.responsiveStyles || {};
  console.log('responsiveStyles', responsiveStyles)

  const styles = Object.keys(breakpoints).reduce((acc, breakpoint) => {
    const breakpointStyles = responsiveStyles[breakpoint];
    if (!breakpointStyles) return acc;

    const mediaQuery = `(min-width: ${theme.breakpoints[breakpoint]})`;
    return `${acc} @media ${mediaQuery} { ${css(breakpointStyles)} }`;
  }, '');

  return css`${styles}`;
};


export default applyResponsiveStyles;
