/**
 * Converts an object of styles into a string.
 * @param {Record<string, string>} styles The object containing the styles.
 * @returns {string} The string containing the CSS styles.
 */
const convertStylesToString = (styles: Record<string, string>): string =>
  Object.entries(styles)
    .reduce(
      (acc, [key, value]) =>
        typeof value === 'string' ? `${acc}${key}: ${value};` : acc,
      ''
    );

interface SharedStylesProps {
  theme: {
    sharedStyles: Record<string, string>;
  };
}

/**
 * Applies shared styles to a component.
 * @param {SharedStylesProps} props The React props object.
 * @returns {string} The string containing the CSS styles.
 */
const applySharedStyles = (props: SharedStylesProps): string =>
  convertStylesToString(props.theme.sharedStyles);

export default applySharedStyles;
