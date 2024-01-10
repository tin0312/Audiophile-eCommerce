import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   mobile: "480",
    //   tablet: "768",
    //   desktop: "1024",
    // },
    extend: {
      colors: {
        // Light Color
        "light-100": "#FFFFFF",
        "light-300": "#F1F1F1",
        //Dark Color
        "dark-900": "#000",
        "dark-850": "#191919",
        "dark-800": "#F1F1F1",
        //Primary Color
        "primary-700": "#D87D4A",
        "primary-500": "#FBAF85",
      },
      letterSpacing: {
        widest: "0.5em",
      },
    },
  },
  plugins: [],
};
export default config;
