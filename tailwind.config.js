/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "darkMode",
  theme: {
    extend: {
      fontFamily: {
        arialgeo: ['"Arial GEO"', "sans-serif"],
        tommaso: ['"ALK Tommaso"', "sans-serif"],
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
          backgroundCol: "#F5F5F5",

          dark: {
            backgroundCol: "#000",
          },
        },

        color: {
          primary: "#FFF",
          secondary: "#aea6b7",
          tertiary: "#908F8F",
          black: "#000",

          dark: {
            black: "#fff",
          },
        },

        logoColor: {
          circle: "#BA92ED",
          insideCircle: "#000",
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",

          dark: {
            primary: "#724AA4",
            secondary: "#fff",
          },
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",

          dark: {
            primary: "#fff",
            secondary: "#000",
          },
        },
        outlineColor: {
          primary: "#BB8DF5",
        },
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 #BB8DF5",
          },
          "50%": {
            transform: "scale(1.1)",
            boxShadow: "0 0 10px 5px #908F8F ",
          },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out",
      },
      borderRadius: {
        "disproportionate-arch": "0 0 50% 50%",
      },
    },
  },
  plugins: [],
};
