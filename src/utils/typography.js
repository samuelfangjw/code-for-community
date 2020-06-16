import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Roboto Slab", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
