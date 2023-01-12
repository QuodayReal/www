const svgToDataUri = require('mini-svg-data-uri');
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  darkMode: "class",
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },
    },
  },
  plugins: [
		function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    require("@headlessui/tailwindcss"),
    require("tailwindcss-accent")({
      colors: ["green", "blue", "red", "yellow", "purple", "pink", "slate"],
      root: "green",
    }),
  ],
};
