const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'vermelho': "#ff1616",
        'turqueza': "#42bba4",
        "cinza-c": "#E8E5E5",
        "cinza-e": "#8B7E7E",
        "verde-c1": "#caffce",
        "vermelho-c": "#f53f3f",
        'branco': "#ffff",
        "verde-e": "#79997b",
        "vermelho-ho": "#932525",
        'verdinho': "#dfeadc",
        "verde-ho": "#7b9d6e",
        "azul-bg": "#F8FDFD",
        "verde-banner": "#008B88",
        "vermelho-login-button": "#FF2241",
        "cinza-text": "#757575",
        "laranja-btn": "#FF6534",
        'bb1': "#E4FFEF",
        'bb2': "#FAB7B7",
        'bb3': "#535353",
        'bb4': "#EE7A7A",
        'bb5': "#25DAAE",
        'bb5': "#034C4A",
        'bb6': '#48D1CC',
        'bb7': '#eaf4f4',
      },
    },
  },
  plugins: [],
});
