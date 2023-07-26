const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  bgMain: "#333333",
  textMain: "#FFF6E5",
  btnOrange: "#E08D41",
  bgCard: "#F3E0B8"
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  NotoSerifCBlack: "NotoSerifCondensedBlack",
  NotoSerifCBlackItalic: "NotoSerifCondensedBlackItalic",
  NotoSerifExtraLightItalic: "NotoSerifExtraLightItalic",
  NotoSerifCondensedMediumItalic: "NotoSerifCondensedMediumItalic",
  MontseratBold: "MontseratBold",
  NotoSerifExtraCondensedItalic: "NotoSerifExtraCondensedItalic",
  NotoSerifExtraCondensedBlackItalic: "NotoSerifExtraCondensedBlackItalic"

};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
