
// // // type ResponsiveStyles = {
// // //   [key in keyof typeof Breakpoints]?: Record<string, string>;
// // };

// import { ResponsiveStyles } from "./types";

// const convertResponsiveStyles = (responsiveStyles: ResponsiveStyles): string => {
//   let cssString = '';
//   for (const breakpoint in responsiveStyles) {
//     if (responsiveStyles.hasOwnProperty(breakpoint)) {
//       const styles = responsiveStyles[breakpoint];
//       cssString += `@media screen and (min-width: ${Breakpoints[breakpoint]}) {`;
//       cssString += Object.entries(styles)
//         .reduce(
//           (acc, [key, value]) =>
//             typeof value === 'string' ? `${acc}${key}: ${value};` : acc,
//           ''
//         );
//       cssString += '}';
//     }
//   }
//   return cssString;
// };

// export default convertResponsiveStyles;
