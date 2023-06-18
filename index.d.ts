export type StackedCellProps = {
  rel?: boolean;
  overlay?: boolean;
  stretch?: boolean;
  xa?: string;
  xb?: string;
  ya?: string;
  yb?: string;
  z?: string;
  oc?: string;
};
export type StyleBoxProps = {
  fz?: string;
  fw?: string;
  lh?: string;
  w?: string;
  h?: string;
  mw?: string;
  mxw?: string;
  mh?: string;
  mxh?: string;
  tt?: string;
  pis?: string;
  pie?: string;
  pbs?: string;
  pbe?: string;
  mbs?: string;
  mbe?: string;
  mis?: string;
  mie?: string;
  mg?: string;
  pd?: string;
  ta?: string;
  op?: string;
  td?: string;
  br?: string;
  px?: string;
  py?: string;
  mx?: string;
  my?: string;
  inline?: boolean;
  block?: boolean;
};

export type FitBoxProps = {
  flex?: boolean;
  stretch?: boolean;
  crop?: boolean;
  scrollable?: boolean;
  center?: boolean;
  fill?: boolean;
  round?: boolean;
  cover?: boolean;
  contain?: boolean;
  force?: boolean;
  width?: string;
  height?: string;
};

export type StackedBoxProps = {
  crop?: boolean;
};

export type FlexDividerProps = {
  v?: boolean;
  h?: boolean;
  stretch?: boolean;
  dark?: boolean;
  mg?: string;
  width?: string;
  color?: string;
  size?: string;
};
export type SpaceBoxProps = {
  width?: string;
  height?: string;
  size?: string;
};

export type AspectRatioProps = {
  fit?: boolean;
  center?: boolean;
  ratio?: string;
};

export type FlexMediaProps = {
  breakpoints?: string;
  target?: string;
  readonly sizes?: string;
};
export type FlexGridProps = {
  gap?: string;
  compact?: boolean;
  flex?: boolean;
};
export type FlexCellProps = {
  order?: number;
  grow?: number;
  shrink?: number;
  width?: string;
  fill?: boolean;
  fit?: boolean;
  snug?: boolean;
  auto?: boolean;
  stretch?: boolean;
  scrollable?: boolean;
  flex?: boolean;
  iflex?: boolean;
  iblock?: boolean;
};
export type FlexCanvasProps = {
  width?: string;
  mg?: string;
  pd?: string;
  flex?: boolean;
};
export type FlexBoxProps = {
  row?: boolean;
  column?: boolean;
  gap?: string;
  nowrap?: boolean;
  fill?: boolean;
  fit?: boolean;
  snug?: boolean;
  reverse?: boolean;
  inline?: boolean;
  center?: boolean;
  start?: boolean;
  end?: boolean;
  stretch?: boolean;
  spread?: boolean;
  middle?: boolean;
  ai?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  ac?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  jc?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "flex-box": FlexBoxProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-canvas": FlexCanvasProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-cell": FlexCellProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-grid": FlexGridProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-media": FlexMediaProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "stacked-box": StackedBoxProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "stacked-cell": StackedCellProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "fit-box": FitBoxProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "a-ratio": AspectRatioProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-divider": FlexDividerProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "space-box": SpaceBoxProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "s-box": StyleBoxProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
