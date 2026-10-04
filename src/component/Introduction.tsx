import DivContainer from "../reusable/element/divs";
import Texts from "../reusable/element/text";

import DigitIncrement from "../reusable/effect/digitIncrement";
import READMEhighlight from "../reusable/effect/READMEhighlight";

import { ScrollTrigger, gsap } from "gsap/all";
import type { JSX } from "react";
import { useRef, useLayoutEffect } from "react";

import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'

export default function Introduction() : JSX.Element {
    const leftContainerRef = useRef<HTMLDivElement>(null);
    const rightContainerRef = useRef<HTMLDivElement>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const parentContainerRef = useRef<HTMLDivElement>(null);

    const json = {
        about: {
            name: "John",
            location: "Malaysia",
            status: "still learning"
        },

        interests: {
            coding: ["software", "data", "IoT"],
            hobbies: ["anime", "games", "Japanese"],
            food: ["sushi", "ramen"]
        },

        currently: {
            learning: ["Python", "SQL", "Japanese"],
            building: ["portfolio", "data projects"],
            exploring: ["data engineering", "IoT"]
        },

        philosophy: {
            learn: "by building",
            approach: "break things and figure out why",
            motto: "Build → Break → Debug → Learn"
        },

        statistics: {
            bugs: "expected",
            sleep: null,
            projects: "always building"
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const main = mainContainerRef.current;
            const left = leftContainerRef.current;
            const right = rightContainerRef.current;
            const parent = parentContainerRef.current;

            if (!left || !right || !main || !parent) return;

            ScrollTrigger.create({
                trigger: right,
                start: "+=450 center",

                endTrigger: parent,
                end: "bottom bottom",

                pin: right,
                pinSpacing: false,

            });

            ScrollTrigger.create({
                trigger: left,
                start: "+=450 center",

                endTrigger: parent,
                end: "bottom bottom",
                
                pin: left,
                pinSpacing: false,

            });
        })
    
        ScrollTrigger.refresh()

        return () => ctx.revert()
    }, [mainContainerRef.current])

    return (
        <DivContainer option = 'h-max w-[100%] items-center p-6' ref = {parentContainerRef}>
            <DivContainer option = 'h-max w-[95%] items-start justify-between' ref = {mainContainerRef} rows>
                <DivContainer ref = {leftContainerRef} option = 'min-h-[100vh] w-[25%] justify-center'>
                    <DivContainer option = ' bg-gradient-to-r from-[#152331] to-[#000000] relative overflow-hidden border border-[#29302c] rounded-md w-[100%] justify-center items-center p-8 gap-4'>
                        <DivContainer children option="
                            absolute
                            w-[30vh] h-[30vh]
                            top-[18%] -left-32
                            rounded-full
                            border border-dashed border-[#8BE28B]/20
                            z-0
                            circle-animation
                            bg-[radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] bg-[length:8px_2px]
                            " 
                        />
                        <DivContainer children option="
                            absolute
                            w-[500px] h-[500px]
                            top-95 left-32
                            rounded-full
                            border border-dashed border-gray-700
                            border-6
                            z-0
                            " 
                        />

                        <DivContainer option = 'justify-between z-1 items-center w-full' rows>
                            <Texts w = {2} s = {1} option = 'text-[#fffce1]'>$$ About Me</Texts>

                            <Texts c = {1}>{new Date().toLocaleDateString('en-GB')}</Texts>
                        </DivContainer>

                        <DivContainer option = 'border border-[2px] z-1 border-[#515f57] rounded-md'>
                            <img className = 'h-[30vh] w-[30vh] rounded-md' src= "/assets/personPic.png" alt="person pic"/>
                        </DivContainer> 

                        <DivContainer option = 'z-1 w-full gap-2'>
                            <DivContainer option="border-b border-b-gray-300 p-1 items-center justify-between" rows>
                                <Texts s = {4} w = {1} option = 'text-[#959eb1] font-semibold'>NAME</Texts>
                                <Texts s = {4} w = {2} option = 'bg-gradient-to-r from-[#8BE28B] to-[#B8F0B5] bg-clip-text text-transparent'>MIN QUAN</Texts>
                            </DivContainer>

                            <DivContainer option="border-b border-b-gray-300 p-1 items-center justify-between" rows>
                                <Texts s = {4} w = {1} option = 'text-[#959eb1] font-semibold'>ROLE</Texts>
                                <Texts s = {4} c = {1} w = {2} option = 'bg-gradient-to-r from-[#9b8be2] to-[#f0efb5] bg-clip-text text-transparent'>UMEMPLOYED</Texts>
                            </DivContainer>

                            <DivContainer option="border-b border-b-gray-300 p-1 items-center justify-between" rows>
                                <Texts s = {4} w = {1} option = 'text-[#959eb1] font-semibold'>LOCATION</Texts>
                                <Texts s = {4} c = {0} w = {2}>MALAYSIA, JOHOR</Texts>
                            </DivContainer>
                            
                            <DivContainer option="border-b border-b-gray-300 p-1 items-center justify-between" rows>
                                <Texts s = {4} w = {1} option = 'text-[#959eb1] font-semibold'>STATUS</Texts>

                                <DivContainer option = 'bg-[#1b2f23] border border-green-800 px-1'>
                                    <Texts s = {4} w = {2} option = 'text-green-500'>AVAILABLE</Texts>
                                </DivContainer>
                            </DivContainer>
                        </DivContainer>
                    </DivContainer>
                </DivContainer>

                <DivContainer option = 'w-[45%] h-full mt-27 gap-10 select-text'>

                        <DivContainer option="w-full gap-4">
                            <Texts w = {1} c = {0} s = {1} option="text-blue-400 font-mono"># Introduction</Texts>

                            <DivContainer>
                                <Texts w = {1} c = {0} s = {3} option="font-mono text-[#7c838a]">// Project #02</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono text-[#7c838a]">// Design skills: loading...</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono text-[#7c838a]">// Development skills: also loading...</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono text-[#7c838a]">// Status: somehow still working.</Texts>
                            </DivContainer>

                            <DivContainer option = "mt-2 leading-7">
                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono">&gt; Hey, I'm <READMEhighlight>John</READMEhighlight> 👋</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono">&gt; I like building things and figuring out</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono">&gt; why they work.</Texts>
                            </DivContainer>
                        </DivContainer>


                        <DivContainer option="w-full gap-5">
                            <Texts w = {1} c = {0} s = {1} option="text-blue-400 font-mono"># Description</Texts>

                            <DivContainer option="leading-7 gap-5">
                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono whitespace-nowrap">
                                    I like <READMEhighlight>building things</READMEhighlight> with code, which is
                                    unfortunate because code has a habit of <br/><READMEhighlight>building things back</READMEhighlight>.
                                </Texts>

                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono">
                                    Most of my projects start <READMEhighlight>innocently enough</READMEhighlight>.
                                    I get an idea, convince myself that it
                                    shouldn't take too long, and start writing
                                    code.
                                </Texts>

                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono">
                                    Then one feature turns into three, three
                                    turns into a completely different idea, and
                                    suddenly I'm <READMEhighlight>debugging</READMEhighlight> something that wasn't
                                    even part of the <READMEhighlight>original plan</READMEhighlight>.
                                </Texts>

                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono">
                                    But that's also what I enjoy about programming.
                                    I like <READMEhighlight>understanding how things work</READMEhighlight> rather
                                    than just making them work.
                                </Texts>

                                <Texts w = {1} c = {0} s = {3} as = 'span' option="font-mono">
                                    If I don't understand something, I'll probably
                                    end up <READMEhighlight>building a smaller version of it</READMEhighlight> just
                                    to see what happens.
                                </Texts>
                            </DivContainer>

                            <DivContainer option="mt-2 border-l-2 pl-4 font-mono leading-7">
                                <Texts w = {1} c = {0} s = {3} option="font-mono">Build → Break → Debug</Texts>
                                <Texts w = {1} c = {0} s = {3} option="font-mono">Learn → Improve → Repeat</Texts>
                            </DivContainer>
                        </DivContainer>


                        <DivContainer option="w-full gap-5">
                            <Texts w = {1} c = {0} s = {1} option="text-blue-400 font-mono"># TL;DR</Texts>

                            <JsonView src = {json} theme="atom" collapsed = {2} style={{ fontFamily: "monospace", color: "white" }} enableClipboard = {false}/>
                        </DivContainer>

                </DivContainer>

                <DivContainer ref = {rightContainerRef} option = 'min-h-[100vh] justify-center w-[20%]'>
                    <DivContainer option = 'items-center justify-center gap-20 w-full h-full'>
                        
                        <DivContainer option = 'relative overflow-hidden justify-center bg-[#22396F] z-0 rounded-md py-4 px-4 w-full border border-[#0D1C42] border-[3px]'>
                            <DivContainer option = 'absolute z-1 -top-40 -left-40'>
                                <svg width = '400' height = '400' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <polygon
                                        points="50,5 61,38 95,38 67,58 78,92 50,72 22,92 33,58 5,38 39,38"
                                        fill="transparent"
                                        stroke="#0D1C42"
                                        strokeWidth="5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'z-2' rows>
                                <Texts option = {'text-[#FCF1D0] font-bold text-[5vh]'}>+</Texts>
                                <DigitIncrement to = {3} time = {500} option = {'text-[#FCF1D0] font-bold text-[5vh]'} />
                            </DivContainer>

                            <Texts s = {1} w= {2} option = 'z-2 text-[#FCF1D0]'>Websites, Apps & Projects Completed</Texts>

                            <DivContainer option="border border-white rounded-md self-end p-1 cursor-pointer hover:bg-[#0D1C42]">
                                <img className="h-4 w-4 hover:transparent z-2 invert filter" src = '/assets/right-arrow.png'/>
                            </DivContainer>
                        </DivContainer>


                        <DivContainer option = 'relative overflow-hidden justify-center bg-[#18230F] z-0 rounded-md py-4 px-4 w-full border border-[#27391C] border-[3px]'>
                            <DivContainer option = 'absolute z-1 top-24 -left-44 rotate-[-30deg]'>
                                <svg width="500" height="100" viewBox="0 0 200 100">
                                    <polyline
                                        points="10,50 40,20 70,50 100,20 130,50 160,20 190,50 220,20 250,50 280,20 310,50 340,20"
                                        fill="none"
                                        stroke="#27391C"
                                        strokeWidth="5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'absolute z-1 top-10 -left-44 rotate-[-30deg]'>
                                <svg width="500" height="100" viewBox="0 0 200 100">
                                    <polyline
                                        points="10,50 40,20 70,50 100,20 130,50 160,20 190,50 220,20 250,50 280,20 310,50 340,20"
                                        fill="none"
                                        stroke="#27391C"
                                        strokeWidth="5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'z-2' rows>
                                <Texts option = {'text-[#fffce1] font-bold text-[5vh]'}>+</Texts>
                                <DigitIncrement to = {12} time = {200} option = {'text-[#fffce1] font-bold text-[5vh]'} />
                            </DivContainer>

                            <DivContainer option = 'gap-3'>
                                <Texts s = {1} w= {2} option = 'z-2 text-[#fffce1]'>Technologies & Tools Used On Existing Project</Texts>

                                <DivContainer option="border border-white rounded-md self-end p-1 cursor-pointer hover:bg-[#1F7D53]">
                                    <img className="h-4 w-4 hover:transparent filter invert z-2" src = '/assets/right-arrow.png'/>
                                </DivContainer>
                            </DivContainer>
                        </DivContainer>

                        <DivContainer option = 'relative overflow-hidden justify-center bg-[#610C9F] z-0 rounded-md py-4 px-4 w-full border border-[#940B92] border-[3px]'>
                            <DivContainer option = 'absolute z-1 top-10 right-7 rotate-[-30deg]'>
                                <svg width="600" height="200" viewBox="0 0 600 200">
                                    <path
                                        d="
                                        M 20 100
                                        C 80 20, 140 180, 200 100
                                        C 260 20, 320 180, 380 100
                                        C 440 20, 500 180, 580 100
                                        "
                                        fill="none"
                                        stroke="#940B92"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'absolute z-1 top-24 -left-44 rotate-[-30deg]'>
                                <svg width="600" height="200" viewBox="0 0 600 200">
                                    <path
                                        d="
                                        M 20 100
                                        C 80 20, 140 180, 200 100
                                        C 260 20, 320 180, 380 100
                                        C 440 20, 500 180, 580 100
                                        "
                                        fill="none"
                                        stroke="#940B92"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'absolute z-1 top-10 -left-44 rotate-[-30deg]'>
                                <svg width="600" height="200" viewBox="0 0 600 200">
                                    <path
                                        d="
                                        M 20 100
                                        C 80 20, 140 180, 200 100
                                        C 260 20, 320 180, 380 100
                                        C 440 20, 500 180, 580 100
                                        "
                                        fill="none"
                                        stroke="#940B92"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </DivContainer>

                            <DivContainer option = 'z-2' rows>
                                <Texts option = {'text-[#fffce1] font-bold text-[5vh]'}>+</Texts>
                                <DigitIncrement to = {1} time = {2000} option = {'text-[#fffce1] font-bold text-[5vh]'} />
                            </DivContainer>

                            <DivContainer option = 'gap-3'>
                                <Texts s = {1} w= {2} option = 'z-2 text-[#fffce1]'>Project still in progress</Texts>

                                <DivContainer option="border border-white rounded-md self-end p-1 cursor-pointer hover:bg-[#DA0C81]">
                                    <img className="h-4 w-4 hover:transparent filter invert z-2" src = '/assets/right-arrow.png'/>
                                </DivContainer>
                            </DivContainer>
                        </DivContainer>
                        
                    </DivContainer>
                </DivContainer>
            </DivContainer>
        </DivContainer>
    )
} 

/*
                    <pre className="w-full overflow-x-auto rounded-lg p-5 bg-gray-900 text-base font-medium text-slate-300 leading-6">
                                <code>
                                    {
`
const john = 
`
                                    }
                                </code>
                            </pre>

                    <DivContainer option="gap-5">
                        <Texts w = {1} c = {0} s = {1} option="text-blue-400 font-mono"># Introduction</Texts>
                        
                        <DivContainer>
                            <Texts w = {1} c = {0} s = {3} option="font-mono">// This is the second project I made</Texts>
                            <Texts w = {1} c = {0} s = {3} option="font-mono">// Hope you enjoys it as I'm not good at art :)</Texts>
                            <Texts w = {1} c = {0} s = {3} option="font-mono">// Started this project on [<span className="text-yellow-300">September 13, 2026 at 08:07:18 UTC</span>]</Texts>
                            <Texts w = {1} c = {0} s = {3} option="font-mono">// Ended this project on [<span className="text-yellow-300">Still Doing</span>]</Texts>
                        </DivContainer>

                        <DivContainer>
                            <Texts w = {1} c = {0} s = {3} option="font-mono"><span className='text-orange-500'>-</span> Welcome to my little corner of the internet.</Texts>
                            <Texts w = {1} c = {0} s = {3} option="font-mono"><span className='text-orange-500'>-</span> Currently learning</Texts>
                            <Texts w = {1} c = {0} s = {3} option="font-mono"><span className='text-orange-500'>-</span> Occasionally debugging my own existence</Texts>
                        </DivContainer>
                    </DivContainer>

                    <DivContainer option = 'h-max gap-5'>
                        <Texts w = {1} c = {0} s = {1} option="text-blue-400 font-mono"># Description</Texts>
                        <Texts w = {1} c = {0} s = {3} option="font-mono">
                            <span className='text-orange-500'>{`> `}</span> 
                            I like building things with code, which is unfortunate because code has a habit of building things back.
                        </Texts>

                        <Texts w = {1} c = {0} s = {3} option="font-mono">
                            <span className='text-orange-500'>{`> `}</span> 
                            Most of my projects start innocently enough. I have an
                            idea, convince myself it shouldn't take too long, and
                            start writing code. A few hours later, I've somehow
                            installed six libraries, rewritten the original idea
                            twice, and discovered a bug caused by something I wrote
                            three days ago.
                        </Texts>

                        <Texts w = {1} c = {0} s = {3} option="font-mono">
                            <span className='text-orange-500'>{`> `}</span> 
                            But that's also what I enjoy about programming. There's
                            always something else to understand. Whether it's figuring
                            out why a system works, why it doesn't work, or why it
                            worked perfectly until I touched it, there's always
                            something to learn.
                        </Texts>

                        <Texts w = {1} c = {0} s = {3} option="font-mono">
                            <span className='text-orange-500'>{`> `}</span> 
                            I like exploring software, data, and the systems that
                            connect them. I build projects mostly because I want to
                            understand things better, and occasionally because I
                            have an idea that refuses to leave my head until I build
                            it.
                        </Texts>

                        <Texts w = {1} c = {0} s = {3} option="font-mono">
                            <span className='text-orange-500'>{`> `}</span> 
                            So this portfolio is basically a collection of those
                            ideas, experiments, mistakes, and hopefully a few things
                            that actually work.
                        </Texts>
                        
                    </DivContainer>

                    <DivContainer>
                        <Texts w = {1} c = {0} s = {3} option="font-mono text-gray-500">```js</Texts>
                        
                        <Texts w = {1} c = {0} s = {3} option="font-mono text-gray-500">```</Texts>
                    </DivContainer>

*/