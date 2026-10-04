import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef, type ElementType, type ReactNode } from "react";

type TextsProps = {
    children: ReactNode;
    option?: string;
    c?: number;
    w?: number;
    s?: number;
    lh?: number;
    tt?: string;
    as?: ElementType;
    onClick?: () => void;
};

const Texts = forwardRef<HTMLDivElement, TextsProps>(
    function Texts({ children, as: Tag = 'p', option = "", c = 2, w = 0, s = 3, lh, tt, onClick, ...props }, ref ) {

        const weightL = [
            "font-normal",
            "font-medium",
            "font-semibold",
            "font-bold",
            "font-extrabold",
        ];

        const sizeL = [
            "text-3xl",
            "text-xl",
            "text-lg",
            "text-base",
            "text-sm",
            "text-xs",
        ];

        const lineHeight = [
            "leading-6",
            "leading-tight",
            "leading-5",
        ];

        const darkText = [
            "text-slate-300",
            "text-slate-400",
            "text-slate-500",
            "text-slate-600",
        ];

        return (
            <Tag
                ref={ref}
                onClick={onClick}
                className =
                {twMerge(clsx(
                    'h-max',
                    darkText[c],
                    weightL[w],
                    sizeL[s],
                    lh && lineHeight[lh],
                    tt && "tracking-tight",
                    option
                ))}
                {...props}
            >
                {children}
            </Tag>
        );
    }
);

export default Texts