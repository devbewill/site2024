import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              "code::before": {
                content: "none", // don’t generate the pseudo-element
                //                content: '""', // this is an alternative: generate pseudo element using an empty string
              },
              "code::after": {
                content: "none",
              },
              code: {
                color: theme("colors.slate.800"),
                backgroundColor: theme("colors.violet.100"),
                borderRadius: theme("borderRadius.DEFAULT"),
                paddingLeft: theme("spacing[1.5]"),
                paddingRight: theme("spacing[1.5]"),
                paddingTop: theme("spacing.1"),
                paddingBottom: theme("spacing.1"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
