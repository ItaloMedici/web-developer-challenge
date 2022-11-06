import { getColor } from "./getter";
import { ThemeProps } from "./theme";

export type Selectors<T> = (props: ThemeProps) => T;

export type OmitThemeProps<Args extends any[]> = Args[3] extends ThemeProps
  ? [Args[0], Args[1], Args[2]]
  : Args[2] extends ThemeProps
    ? [Args[0], Args[1]]
    : [Args[0]];

function createSelector<T extends (...args: any) => any>(getter: T) {
  function select(...args: OmitThemeProps<Parameters<T>>): Selectors<ReturnType<T>>;
  function select(...args: Parameters<T>): ReturnType<T>;
  function select(...args: any) {
    if (args.length === getter.length) {
      return getter(...args);
    }

    return (props: ThemeProps) => getter(...args, props);
  }

  return select;
}

export const color = createSelector(getColor);