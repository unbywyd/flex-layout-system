declare namespace JSX {
    interface IntrinsicElements {
        "flex-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                jc?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | null;
                ai?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | null;
                ac?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | null;
                start?: boolean;
                end?: boolean;
                centered?: boolean;
                center?: boolean;
                wrap?: "nowrap" | "wrap" | true | null;
                dn?: "row" | "column" | "row-reverse" | "column-reverse" | null;
                d?: "flex" | "inline-flex" | null;
                gap?: string | null;
                w?: string | null;
                column?: boolean;
                h?: string | null;
                mh?: string | null;
                mw?: string | null;
                wf?: boolean;
                hf?: boolean;
            },
            HTMLElement
        >;
        "flex-canvas": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                crop?: boolean;
                w?: string | null;
                d?: string | null;
                mg?: string | null;
                pd?: string | null;
            },
            HTMLElement
        >;
        "flex-cell": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                scrollable?: boolean;
                fill?: boolean;
                fit?: boolean;
                snug?: boolean;
                auto?: boolean;
                stretch?: boolean;
                center?: boolean;
                as?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "auto" | "normal" | "unset" | null;
                order?: number | null;
                g?: number | null;
                sh?: number | null;
                w?: string | null;
                h?: string | null;
                bs?: string | null;
                pd?: string | null;
            },
            HTMLElement
        >;
        "flex-grid": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                crop?: boolean;
                compact?: boolean;
                gap?: string | null;
                d?: string | null;
                centered?: boolean;
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
        "d-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                d?: string | null;
                media?: string | null;
            },
            HTMLElement
        >;
        "space-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                size?: string | null;
                stretch?: boolean;
                wf?: boolean;
                hf?: boolean;
            },
            HTMLElement
        >;
        "s-box": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                block?: boolean;
                unstyle?: boolean;
                center?: boolean;
                fit?: boolean;
                round?: boolean;
                crop?: boolean;
                stretch?: boolean;
                tt?: string | null;
                scrollable?: boolean;
                srOnly?: boolean;
                d?: string | null;
                ws?: string | null;
                color?: string | null;
                bgc?: string | null;        // background-color
                fz?: string | null;         // font-size
                fw?: string | null;         // font-weight
                lh?: string | null;         // line-height
                w?: string | null;          // width
                h?: string | null;          // height
                mw?: string | null;         // min-width
                mxw?: string | null;        // max-width
                mh?: string | null;         // min-height
                mxh?: string | null;        // max-height
                pis?: string | null;        // padding-inline-start
                pie?: string | null;        // padding-inline-end
                pbs?: string | null;        // padding-block-start
                pbe?: string | null;        // padding-block-end
                mbs?: string | null;        // margin-block-start
                mbe?: string | null;        // margin-block-end
                mis?: string | null;        // margin-inline-start
                mie?: string | null;        // margin-inline-end
                mg?: string | null;         // margin
                pd?: string | null;         // padding
                ta?: string | null;         // text-align
                op?: string | null;         // opacity
                td?: string | null;         // text-decoration
                br?: string | null;         // border-radius
                pi?: string | null;         // padding-inline
                pb?: string | null;         // padding-block
                mi?: string | null;         // margin-inline
                mb?: string | null;         // margin-block
                fg?: string | null;         // flex-grow
                ratio?: string | null;      // aspect-ratio
                fit?: string | null;        // fit (object-fit)
                zi?: string | null;         // z-index
                pos?: string | null;        // position
                inset?: string | null;      // inset
            },
            HTMLElement
        >;
    }
}
