import { type JSX } from "react"

import DivContainer from "../element/divs"
import Texts from "../element/text"

type Parameter = {
    text?: string,
    element?: JSX.Element,
    option1?: string,
    option2?: string
}

export default function SimpleTextInDiv({ text, element, option1, option2 }: Parameter): JSX.Element {
    return ( 
        <DivContainer option = {`h-full w-full justify-center items-center p-5 select-none ${option1}`}>
            {
                text &&
                <Texts option = {`text-gray-200 font-bold text-[4vh] text-center font-serif whitespace-pre-line ${option2}`}>{text}</Texts>
            }

            {
                element &&
                element
            }
        </DivContainer>    
    )
}