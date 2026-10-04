import { type JSX } from 'react';

import DivContainer from "../reusable/element/divs";
import Texts from '../reusable/element/text';

export default function Contact(): JSX.Element {
    return (
        <DivContainer option = 'justify-center items-center gap-3 m-10'>
            <DivContainer option = 'justify-center items-center'>
                <Texts c = {1} option = 'font-bold font-montez text-[4vh]'>Contact me!</Texts>
                <a href = 'https://mail.google.com/mail/?view=cm&to=ongminquan0827@gmail.com'>
                    <Texts c = {0} option = 'text-[4vh] font-bold font-mono hover:underline'>ongminquan0827@gmail.com</Texts>
                </a>
            </DivContainer>

            <DivContainer rows option = 'items-center gap-6 select-none'>
                <a target = '_blank' href = 'https://www.instagram.com/pleasetypeyourusername/'>
                    <img className = 'h-5 w-5 invert filter' src = '/techIcons/instagram.png' alt = 'instagram icon'/>
                </a>

                <a target = '_blank' href='https://github.com/pleasetypeyourusername'>
                    <img className = 'h-5 w-5 invert filter' src = '/techIcons/github.png' alt = 'github icon'/>
                </a>

                <a target = '_blank' href="https://www.linkedin.com/in/buck-duck-46254b213/">
                    <img className = 'h-5 w-5 invert filter' src = '/techIcons/linkedin.png' alt = 'linkedin icon'/>
                </a>
            </DivContainer>
        </DivContainer>
    )
}