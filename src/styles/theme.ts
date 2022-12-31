export const lightTheme: any = {
  body: "#fafafa",
  titleCard: "#fafafa",
  textMain: "#343E3D",
  textSecond: "#6B7D7D",
  accentMain: "#689c64", // animation, buttons, other accent colors
};

export const darkTheme: any = {
  body: "#0d1a25",
  titleCard: "#0d1a25",
  textMain: "#E8EEF1",
  textSecond: "#9e9e9e",
  accentMain: "#00A896", // #animation, buttons, other accent colors
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
