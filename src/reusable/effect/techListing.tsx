import type { JSX } from "react"

import DivContainer from "../element/divs"
import Texts from "../element/text"

type Parameter = {
    list: Array<string>;
}

export default function TechListing({ list }: Parameter) : JSX.Element {
    return (
        <DivContainer option = 'gap-2 h-max items-center' rows>
            {
                list.map((v, i) => {                    
                    return (
                        <DivContainer option = 'bg-[#3250d6]/80 rounded-lg px-2 py-1' key = {`${v}-${i}`}>
                            <Texts option="font-semibold font-mono text-[#F2EFE7] whitespace-nowrap" s = {4}>{v}</Texts>
                        </DivContainer>
                    )
                })
            }
        </DivContainer>
    )
}