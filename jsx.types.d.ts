declare namespace JSX {
    interface IntrinsicElements {
        "flex-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                jc?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | null;
                ai?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | null;
                ac?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | null;
                start?: boolean | null;
                end?: boolean | null;
                spread?: boolean | null;
                middle?: boolean | null;
                center?: boolean | null;
                inline?: boolean | null;
                wrap?: boolean | null;
                nowrap?: boolean | null;
                reverse?: boolean | null;
                minh?: boolean | null;
                fullh?: boolean | null;
                fullw?: boolean | null;
                fullscreen?: boolean | null;
                stretch?: boolean | null;
                snug?: boolean | null;
                fill?: boolean | null;
                fit?: boolean | null;
                row?: boolean | null;
                column?: boolean | null;
                gap?: string | null;
            },
            HTMLElement
        >;
        "flex-media": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                breakpoints?: string | null;
                target?: string | null;
                sizes?: string | null;
            },
            HTMLElement
        >;
        "flex-canvas": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                crop?: boolean | null;
                flex?: boolean | null;
                width?: string | null;
                mg?: string | null;
                pd?: string | null;
            },
            HTMLElement
        >;
        "flex-grid": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                crop?: boolean | null;
                flex?: boolean | null;
                compact?: boolean | null;
                gap?: string | null;
            },
            HTMLElement
        >;
        "flex-cell": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                scrollable?: boolean | null;
                flex?: boolean | null;
                iflex?: boolean | null;
                iblock?: boolean | null;
                fill?: boolean | null;
                fit?: boolean | null;
                snug?: boolean | null;
                auto?: boolean | null;
                stretch?: boolean | null;
                as?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "auto" | "normal" | "unset" | null;
                order?: number | null;
                grow?: number | null;
                shrink?: number | null;
                width?: string | null;
                basis?: string | null;
            },
            HTMLElement
        >;
        "stacked-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                crop?: boolean | null;
            },
            HTMLElement
        >;
        "stacked-cell": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                rel?: boolean | null;
                overlay?: boolean | null;
                stretch?: boolean | null;
                xa?: string | null; // Свойство для inset-inline-start
                xb?: string | null; // Свойство для inset-inline-end
                ya?: string | null; // Свойство для inset-block-start
                yb?: string | null; // Свойство для inset-block-end
                z?: string | null;  // Свойство для z-index
                overcolor?: string | null; // Свойство для background overlay color
            },
            HTMLElement
        >;
        "fit-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                stretch?: boolean | null;
                flex?: boolean | null;
                crop?: boolean | null;
                scrollable?: boolean | null;
                center?: boolean | null;
                fill?: boolean | null;
                round?: boolean | null;
                cover?: boolean | null;
                contain?: boolean | null;
                width?: string | null;
                height?: string | null;
            },
            HTMLElement
        >;
        "a-ratio": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                fit?: boolean | null;
                crop?: boolean | null;
                center?: boolean | null;
                ratio?: string | null;
            },
            HTMLElement
        >;
        "flex-divider": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                dark?: boolean | null;
                v?: boolean | null;
                h?: boolean | null;
                stretch?: boolean | null;
                mg?: string | null;
                width?: string | null;
                color?: string | null;
                size?: string | null;
            },
            HTMLElement
        >;
        "space-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                width?: string | null;
                height?: string | null;
                size?: string | null;
            },
            HTMLElement
        >;
        "s-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                inline?: boolean | null;
                block?: boolean | null;
                crop?: boolean | null;
                scrollable?: boolean | null;
                inherit?: boolean | null;
                nowrap?: boolean | null;
                wrap?: boolean | null;
                color?: string | null;
                bgc?: string | null;
                bgi?: string | null;
                bgr?: string | null;
                bgp?: string | null;
                bgs?: string | null;
                bga?: string | null;
                transform?: string | null;
                fz?: string | null;
                fw?: string | null;
                lh?: string | null;
                w?: string | null;
                h?: string | null;
                mw?: string | null;
                mxw?: string | null;
                mh?: string | null;
                tt?: string | null;
                mxh?: string | null;
                pis?: string | null;
                pie?: string | null;
                pbs?: string | null;
                pbe?: string | null;
                mbs?: string | null;
                mbe?: string | null;
                mis?: string | null;
                mie?: string | null;
                mg?: string | null;
                pd?: string | null;
                ta?: string | null;
                op?: string | null;
                td?: string | null;
                br?: string | null;
                px?: string | null;
                py?: string | null;
                mx?: string | null;
                my?: string | null;
            },
            HTMLElement
        >;
        "sr-only": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                focusable?: boolean;
            },
            HTMLElement
        >;
        "ltr-only": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        >;
    }
}
