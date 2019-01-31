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
    ],
    lineHeight: 1.5
  },
  color: {
    primary: {
      main: "#A5E7E8",
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
    xs: "0.25rem", // >>> 4
    s: "0.5rem", // >>> 8
    m: "1rem", // >>> 16
    l: "2rem", // >>> 32
    xl: "4rem", // >>> 64
    base: "1.5rem" // >>> 24px/3em for desktop, 16px/1em for mobile,
  },
  sizeMobile: {
    xs: "0.17rem", //
    s: "0.33rem", //
    m: "0.67rem", //
    l: "1.33rem", //
    xl: "2.67rem", //
    base: "1rem" //
  },
  increment: increment => `calc(${increment} * var(--size-base))`,
  incrementFixed: increment => `calc(${increment} * var(--size-base-fixed))`,
  shadow: [
    "0 0.0625em 0.1875em rgba(0,0,0,0.12), 0 0.0625em 0.125em rgba(0,0,0,0.24)",
    "0 0.1875em 0.375em rgba(0,0,0,0.16), 0 0.1875em 0.375em rgba(0,0,0,0.23)",
    "0 0.625em 1.25em rgba(0,0,0,0.19), 0 0.375em 0.375em rgba(0,0,0,0.23)",
    "0 0.875em 1.75em rgba(0,0,0,0.25), 0 0.625em 0.625em rgba(0,0,0,0.22)",
    "0 1.1875em 2.375em rgba(0,0,0,0.30), 0 0.9375em 0.75em rgba(0,0,0,0.22)"
  ]
};