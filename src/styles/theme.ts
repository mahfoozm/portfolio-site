export const lightTheme: any = {
  body: "#E8EEF1",
  textMain: "#343E3D",
  textSecond: "#6B7D7D",
  accentMain: "#689c64", // animation, buttons, other accent colors
  floatBG: "#d3edfe",
  menuNav: "#cfe7e4",
  titleCard: "rgba(232, 238, 241, 0.85)",
};

export const darkTheme: any = {
  body: "#0d1a25",
  textMain: "#E8EEF1",
  textSecond: "#9e9e9e",
  accentMain: "#00A896", // #animation, buttons, other accent colors
  floatBG: "#011827",
  menuNav: "#142746",
  titleCard: "rgba(13, 26, 37, 0.85)",
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
