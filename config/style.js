export default {
  // >>> desktop first breakpoints
  breakpoint: {
    mobile: "599px", // >>> 599px
    tabletSmall: "719px", // >>> 719px
    tabletSmallEnd: "720px", // >>> 719px
    tabletLarge: "839px" // >>> 839px
  },
  font: {
    family: {
      primary: "Montserrat, sans-serif"
    },
    scale: [
      "1em", // >>> 16px
      "1.1875em", // >>> 19px
      "1.3125em", // >>> 21px
      "1.5em", // >>> 24px
      "1.75em", // >>> 28px
      "2em", // >>> 32px
      "3em", // >>> 48px
      "3.875em" // >>> 62px
    ]
  },
  color: {
    primary: {
      main: "",
      light: "",
      dark: ""
    },
    seconday: {
      main: "",
      light: "",
      dark: ""
    },
    tertiary: {
      main: "",
      light: "",
      dark: ""
    },
    light: "#FAFAFA",
    dark: "#212121",
    white: "#FFFFFF",
    black: "#000000",
    grey: {
      light: "#F5F5F5",
      medium: "#9E9E9E",
      dark: "#424242"
    }
  },
  size: {
    xs: "0.25em", // >>> 4
    s: "0.5em", // >>> 8
    m: "1em", // >>> 16
    l: "2em", // >>> 32
    xl: "4em", // >>> 64
    base: "1.5em", // >>> 24px/3em for desktop, 16px/1em for mobile
    px: px => `${px / 16}em`
  },
  sizeMobile: {
    xs: "0.17em", //
    s: "0.33em", //
    m: "0.67em", //
    l: "1.33em", //
    xl: "2.67em", //
    base: "1em" //
  },
  increment: increment => `calc(${increment} * var(--size-base))`,
  shadow: [
    "0 0.0625em 0.1875em rgba(0,0,0,0.12), 0 0.0625em 0.125em rgba(0,0,0,0.24)",
    "0 0.1875em 0.375em rgba(0,0,0,0.16), 0 0.1875em 0.375em rgba(0,0,0,0.23)",
    "0 0.625em 1.25em rgba(0,0,0,0.19), 0 0.375em 0.375em rgba(0,0,0,0.23)",
    "0 0.875em 1.75em rgba(0,0,0,0.25), 0 0.625em 0.625em rgba(0,0,0,0.22)",
    "0 1.1875em 2.375em rgba(0,0,0,0.30), 0 0.9375em 0.75em rgba(0,0,0,0.22)"
  ]
};

// const breakpoints = [
//   // >>> desktop first breakpoints
//   "37.4375rem", // >>> 599px
//   "44.9375rem", // >>> 719px
//   "52.4375rem" // >>> 839px
// ];

// const font = {
//   primary: "Montserrat, sans-serif"
// };

// const color = {
//   primary: {
//     main: "",
//     light: "",
//     dark: ""
//   },
//   seconday: {
//     main: "",
//     light: "",
//     dark: ""
//   },
//   light: "",
//   dark: "",
//   white: "#FFFFFF",
//   black: "#000000",
//   grey: {
//     light: "",
//     medium: "",
//     dark: ""
//   }
// };

// const typography = {
//   h1: {
//     size: ""
//   },
//   h2: {
//     size: ""
//   },
//   h3: {
//     size: ""
//   },
//   body: {
//     size: ""
//   },
//   subtitle: {},
//   caption: {}
// };

// const size = {
//   m: "24em"
// };

// module.exports = {
//   color,
//   typography,
//   font
// };
