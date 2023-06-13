// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
const myCustomLightTheme = {
  dark: false,
  colors: {
    archive: "#464646",
    white: "#FFFFFF",
    ongoing: "#FF7A00",
    complete: "#03A758",
    reviews: "#FCD54C",
    secondary: "#AEAEAE",
    background: "#F5F5F5",
    "primary-color": "#CC5500",
    "primary-text": "#36454F",
    "secondary-text": "#76848D",
    "red-warning": "#FF5263",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
