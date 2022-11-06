const colors = {
  gray100:"#7a7a7a",
  gray200:"#5f5f5f",
  gray300:"#494949",
  gray400:"#3b3b3b",
  gray500:"#313131",
  gray600:"#2b2b2b",
  gray700:"#232323",

  background: "#343434",

  textColor: "#9f9f9f",

  danger: "#d65923"
}

const theme = {
  colors: {
    ...colors
  }
}

export default theme

export type Theme = typeof theme;
export type ThemeProps = {theme?: Theme};

export type Colors = keyof Theme["colors"];