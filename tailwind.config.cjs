const defaultTheme = require("tailwindcss/defaultTheme");

function toRem(px) {
  return px / 16 + "rem";
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["CerebriSans", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: toRem(12),
        sm: toRem(12),
        xl: toRem(24),
      },
    },
    extend: {
      maxWidth: {
        "8xl": toRem(1536),
      },
      colors: {
        blue: {
          primary: "#1C2C43",
          secondary: "#15253E",
        },
        gray: {
          primary: "#BFC2D5",
          secondary: "#616F7A",
          tertiary: "#F4F5FA",
          quaternary: "#E9EBF7",
          quinary: "#E9ECF5",
          senary: "#626E7C",
        },
        green: {
          primary: "#0FAC6E",
        },
      },
    },
  },
  plugins: [],
};
