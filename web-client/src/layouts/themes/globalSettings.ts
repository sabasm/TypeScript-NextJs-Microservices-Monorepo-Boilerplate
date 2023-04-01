export const sharedStyles = {
  padding: '10px',
  margin: '5px',
  backgroundColor: 'green',
}

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
};

//OPTIONAL
// export const breakpoints = {
//   xs: '480px',
//   sm: '768px',
//   md: '992px',
//   lg: '1200px',
//   xl: '1600px',
// };

const responsiveStyles = {
  xs: {
    fontSize: '12px',
    padding: '5px 10px',
    margin: '2px',
  },
  sm: {
    fontSize: '14px',
    padding: '6px 12px',
    margin: '3px',
  },
  md: {
    fontSize: '16px',
    padding: '8px 14px',
    margin: '4px',
  },
  lg: {
    fontSize: '18px',
    padding: '10px 16px',
    margin: '5px',
  },
  xl: {
    fontSize: '20px',
    padding: '12px 18px',
    margin: '6px',
  },
};

const globalSettings = {
  responsiveStyles,
  breakpoints,
  sharedStyles
};

export default globalSettings;
