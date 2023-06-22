export type Base = {
  className?: string;
};
export type StackedCellProps = Base & {
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
export type StyleBoxProps = Base & {
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
  color?: string;
  inherit?: boolean;
  scale?: string;
};

export type FitBoxProps = Base & {
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

export type StackedBoxProps = Base & {
  crop?: boolean;
};

export type FlexDividerProps = Base & {
  v?: boolean;
  h?: boolean;
  stretch?: boolean;
  dark?: boolean;
  mg?: string;
  width?: string;
  color?: string;
  size?: string;
};
export type SpaceBoxProps = Base & {
  width?: string;
  height?: string;
  size?: string;
};

export type AspectRatioProps = Base & {
  fit?: boolean;
  center?: boolean;
  ratio?: string;
};

export type FlexMediaProps = Base & {
  breakpoints?: string;
  target?: string;
  readonly sizes?: string;
};
export type FlexGridProps = Base & {
  gap?: string;
  compact?: boolean;
  flex?: boolean;
};
export type FlexCellProps = Base & {
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
export type FlexCanvasProps = Base & {
  width?: string;
  mg?: string;
  pd?: string;
  flex?: boolean;
};
export type FlexBoxProps = Base & {
  row?: boolean;
  column?: boolean;
  gap?: string;
  nowrap?: boolean;
  wrap?: boolean;
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
