import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef, type ReactNode, type HTMLAttributes } from "react";

interface DivContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    rows?: boolean;
    option?: string;
}

const DivContainer = forwardRef<HTMLDivElement, DivContainerProps>(
    function Div({ children, rows = false, option = "", ...props }, ref ) {
        return (
            <div
                {...props}
                ref = {ref}
                className={twMerge(clsx(
                    `
                    flex
                    `,
                    rows ? 'flex-row' : 'flex-col',
                    option
                ))}
            >
                {children}
            </div>
        );
    }
);

export default DivContainer