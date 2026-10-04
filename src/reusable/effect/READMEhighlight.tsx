import type { JSX, ReactNode } from "react"
import Texts from "../element/text"
import DivContainer from "../element/divs"

type Parameter = {
    children: ReactNode
    option1?: string,
    option2?: string,
    option3?: string
}

export default function READMEhighlight({ children, option1 = '', option2 = '', option3 = '' }: Parameter) : JSX.Element {
    return (
        <span className = {`inline-flex ${option1}`}>
            <DivContainer rows>
                <Texts w = {1} c = {0} s = {3} option={`${option2} text-red-300 font-mono`}>[</Texts>
                <Texts w = {1} c = {0} s = {3} option={`${option3} text-emerald-200 font-mono`}>{children}</Texts>
                <Texts w = {1} c = {0} s = {3} option={`${option2} text-red-300 font-mono`}>]</Texts>
            </DivContainer>
        </span>
    )   
}