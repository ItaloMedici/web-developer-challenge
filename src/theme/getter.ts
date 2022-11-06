import theme, { Colors, ThemeProps } from "./theme";

const getTheme = (props: ThemeProps) => {
  return props.theme && props.theme.colors ? props.theme : theme;
}

export const getColor = (color: Colors, props: ThemeProps) => {
  return getTheme(props).colors[color];
}