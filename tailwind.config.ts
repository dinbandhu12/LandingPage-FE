import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%" : { transform: 'translateX(100%)' },
          "1000%" : { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
      },
      filter: {
        "grayscale": "grayscale(100%)",
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        customColor: {
          "01": "#15E3FF",
        },
        slate: {
          10: '#F8F4F0',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      borderWidth: {
        "2": "2px",
        "3": "3px",
      }
    },
  },
  plugins: [],
};

export default config;
