import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#25DAC5',
          hover: '#1EAE9E'
        },
        secondary: '#482BE7',
        third: '#E93A7D',
        dark: '#2F1893',
        dark_90: '#EAE8F4',
        heading: '#1E0E62',
        text: '#15143966',
        grey: '#EBEAED',
        error: '#C84545',
        shade1: '#FFFFFF',
        shade2: '#222222',
        shade2_5: '#2222220D',
        shade2_30: '#2222224D',
        neutral1: '#F7F7F7',
        neutral2: '#EBEBEB',
        neutral3: '#DDDDDD',
        neutral4: '#D3D3D3',
        neutral5: '#C2C2C2',
        neutral6: '#B0B0B0',
        neutral7: '#717171',
        neutral8: '#5E5E5E',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        article: [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "article-2": [
          "20px",
          {
            lineHeight: "16px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        paragraph: [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        desc: [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        label: [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        hero: [
          "72px",
          {
            lineHeight: "86px",
            letterSpacing: "-1px",
            fontWeight: "700",
          },
        ],
        header: [
          "58px",
          {
            lineHeight: "70px",
            letterSpacing: "-1px",
            fontWeight: "700",
          },
        ],
        title: [
          "42px",
          {
            lineHeight: "52px",
            letterSpacing: "-0.4px",
            fontWeight: "700",
          },
        ],
        headline: [
          "32px",
          {
            lineHeight: "42px",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        lead: [
          "22px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "button-sm": [
          "16px",
          {
            lineHeight: "22px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "button-md": [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "button-lg": [
          "20px",
          {
            lineHeight: "26px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
