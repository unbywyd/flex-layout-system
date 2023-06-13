import { FlexBoxProps } from "./src/components/box";
import { FlexCanvasProps } from "./src/components/canvas";
import { FlexCellProps } from "./src/components/cell";
import { FlexGridProps } from "./src/components/grid";
import { FlexMediaProps } from "./src/components/media";
import { AspectRatioProps, FitBoxProps, FlexDividerProps, SpaceBoxProps, StackedBoxProps, StackedCellProps, StyleBoxProps } from "./src/components/utils";

export * from "./src/components/box";
export * from "./src/components/canvas";
export * from "./src/components/cell";
export * from "./src/components/grid";
export * from "./src/components/media";
export * from "./src/components/utils";

 
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'flex-box': FlexBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'flex-canvas': FlexCanvasProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'flex-cell': FlexCellProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'flex-grid': FlexGridProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'flex-media': FlexMediaProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'stacked-box': StackedBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'stacked-cell': StackedCellProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'fit-box': FitBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'a-ratio': AspectRatioProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'flex-divider': FlexDividerProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'space-box': SpaceBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            's-box': StyleBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}