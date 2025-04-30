import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    card: "#f8f8f8",
    text: "#000000",
    primary: "turquoise",
    border: "#dcdcdc",
    notification: "tomato",
  },
};

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    card: "#121212",
    text: "#ffffff",
    primary: "turquoise",
    border: "#272727",
    notification: "tomato",
  },
};
