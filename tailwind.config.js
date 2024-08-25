/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#e5f2f3",
        white: "#fff",
        black: "#000",
        azure: "#e1f3f4",
        paleturquoise: "#89eaef",
        gainsboro: "#d9d9d9",
        silver: "#c6c6c6",
        darkgray: {
          "100": "#aaa9a9",
          "200": "rgba(170, 169, 169, 0.5)",
        },
        lightgray: "#cecece",
        gray: {
          "100": "#f7fdfd",
          "200": "rgba(255, 255, 255, 0.6)",
        },
        dimgray: {
          "100": "#636363",
          "200": "#585353",
        },
        whitesmoke: {
          "100": "#f5f7f7",
          "200": "#ebeeee",
        },
        yellowgreen: "#81df56",
        ghostwhite: "#f3f5fb",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "4xs": "9px",
        "3xs": "10px",
        "6xs": "7px",
        "3xl": "22px",
        "11xl": "30px",
        "8xs": "5px",
        "2xs": "11px",
      },
    },
    fontSize: {
      "5xs": "8px",
      smi: "13px",
      "6xs": "7px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xs: "12px",
      "3xs": "10px",
      mini: "15px",
      xl: "20px",
      sm: "14px",
      "lg-5": "18.5px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      lg: "18px",
      "4xs": "9px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
