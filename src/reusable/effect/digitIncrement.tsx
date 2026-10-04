import type { JSX } from "react";
import { useEffect, useState } from "react";
import Texts from "../element/text";

type Parameter = {
    from?: number;
    to: number;
    incr?: number;
    time: number;
    option?: string;
};

export default function DigitIncrement({
    from = 0,
    to,
    incr = 1,
    time,
    option = ""
}: Parameter): JSX.Element {

    const [value, setValue] = useState(from);

    useEffect(() => {
        const timer = setInterval(() => {
            setValue(prev => {
                const next = prev + incr;

                if (next >= to) {
                    clearInterval(timer);
                    return to;
                }

                return next;
            });
        }, time);

        return () => clearInterval(timer);
    }, [to, incr, time]);

    return (
        <Texts option={option}>
            {value}
        </Texts>
    );
}