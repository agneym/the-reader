const boxShadows = {
  md: `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)`,
  lg: `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)`,
  xl: `0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)`,
};

const indigo = {
  300: "#667eea",
};

const colors = {
  gray300: `#e2e8f0`,
  gray400: `#cbd5e0`,
  gray700: "#4a5568",
  primary: indigo[300],
};

const fonts = {
  main: `'Lato', sans-serif`,
  heading: `'Source Sans Pro', sans-serif`,
};

const theme = {
  nav: {
    height: "4em",
  },
  boxShadows,
  colors,
  fonts,
};

export default theme;
