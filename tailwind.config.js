module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bleu: {
          50: "#FFFFFF",
          100: "#EEF0FE",
          200: "#C8CFFB",
          300: "#A2AEF9",
          400: "#7B8CF6",
          500: "#556BF4",
          600: "#203DF1",
          700: "#0D28CC",
          800: "#0A1D97",
          900: "#061362",
        },
        jaune: {
          50: "#FCF4EA",
          100: "#F9EBD8",
          200: "#F3D8B5",
          300: "#EDC692",
          400: "#E8B36F",
          500: "#E2A14C",
          600: "#D48722",
          700: "#A3681A",
          800: "#734913",
          900: "#432B0B",
        },
        gris: "#eff0f0",
        reseaux: {
          discord: {
            bg: "#5865F2",
            border: "#414ED1",
          },
          instagram: {
            bg: "#EB2351",
            border: "#AC183A",
          },
          tiktok: {
            bg: "#000000",
            border: "#414141",
          },
          youtube: {
            bg: "#FF0103",
            border: "#C30000",
          },
        },
      },
    },
    fontFamily: {
      sans: ["Rubik"],
      bowlby: ["Bowlby One SC"],
    },
  },
  plugins: [],
};
