import { Appearance } from "react-native";

const lightTheme = {
  //Main use
  aesthetic: "#FF8674",
  sandPaper: "#EFE7BC",

  primary: "#ED1C24",
  primaryLight: "#6ec6ff",
  primaryDark: "#0069c0",
  error: "#f44336",
  success: "#4caf50",

  // Home
  homeBackground: "#F5F1F1",

  //    Text
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
  textDisabled: "rgba(0, 0, 0, 0.38)",
  textShop: "#EDC700",

  //   Button
  buttonActive: "rgba(0, 0, 0, 0.54)",
  buttonActionDisabled: "rgba(0, 0, 0, 0.26)",
  buttonDisabled: "rgba(0, 0, 0, 0.12)",

  buttonTextPrimary: "rgba(255, 255, 255, 0.87)",

  //   Background
  backgroundDefault: "#efefef",
  backgroundPaper: "#fff",
  modalBackground: `rgba(0, 0, 0, 0.6)`,

  //   Divider
  lightDivider: "#F6F6F6",
  divider: "#E5E5E5",

  // Status
  pending: "#F5980B",
  negative: "#4caf50",
  positive: "#f44336",
  red: "#ED1C24",
  yellow: "#EDC700",

  green: "#31B15C",

  veryLightGray: "#666666",
  ligherGray: "#707070",
  lightGray: "#f6f6f6",

  disabled: "#f5f5f5",
  blue: "#0069BC",
  betterblue: "#0C3D60",
  commentBackground: "#E5E5E5",
  placeholder: "#a3a3a3",
};

const darkTheme = {
  //Main use
  aesthetic: "#FF8674",
  aquamarine: "#74BDCB",

  primary: "#ED1C24",
  primaryLight: "#6ec6ff",
  primaryDark: "#0069c0",
  error: "#f44336",
  success: "#4caf50",

  // Home
  homeBackground: "#F5F1F1",

  //    Text
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
  textDisabled: "rgba(0, 0, 0, 0.38)",
  textShop: "#EDC700",

  //   Button
  buttonActive: "rgba(0, 0, 0, 0.54)",
  buttonActionDisabled: "rgba(0, 0, 0, 0.26)",
  buttonDisabled: "rgba(0, 0, 0, 0.12)",

  buttonTextPrimary: "rgba(255, 255, 255, 0.87)",

  //   Background
  backgroundDefault: "#efefef",
  backgroundPaper: "#fff",
  modalBackground: `rgba(0, 0, 0, 0.6)`,

  //   Divider
  lightDivider: "#F6F6F6",
  divider: "#F6F6F6",

  // Status
  pending: "#F5980B",
  negative: "#4caf50",
  positive: "#f44336",

  green: "#31B15C",
  red: "#ED1C24",
  yellow: "#EDC700",

  veryLightGray: "#666666",
  ligherGray: "#707070",
  lightGray: "#F6F6F6",
  disabled: "#f5f5f5",
  blue: "#0069BC",
  commentBackground: "#E5E5E5",
  placeholder: "#a3a3a3",
};

const colorScheme =
  Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme;

export default colorScheme;
