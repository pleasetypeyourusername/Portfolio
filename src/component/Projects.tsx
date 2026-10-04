import DivContainer from "../reusable/element/divs";
import Texts from "../reusable/element/text";

import TechListing from "../reusable/effect/techListing";
import SimpleTextInDiv from "../reusable/effect/simpleTextInDiv.tsx";
import Carousel from "../reusable/effect/carousel.tsx";

import type { JSX } from "react";
import { useRef, useLayoutEffect, useState } from "react";

import { gsap } from 'gsap/all'

export default function portfolioHovers(): JSX.Element {
    const leftContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const container = leftContainerRef.current;

            if (!container) return;

            const parent = container.parentElement;

            if (!parent) return;

            const parentRect = parent.getBoundingClientRect();

            const elementHeight = container.offsetHeight;
            const halfHeight = elementHeight / 2;

            // Mouse position relative to parent
            const mouseY = e.clientY - parentRect.top;

            // Clamp the CENTER of the element
            const minY = halfHeight;
            const maxY = parentRect.height - halfHeight;

            const centerY = Math.min(
                maxY,
                Math.max(mouseY, minY)
            );

            gsap.to(container, {
                y: centerY - halfHeight,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const [portfolioHover, setPortfolioHover] = useState<'Biomation' | 'Portfolio' | 'A Joke 1' | 'A Joke 2' | 'A Joke 3'>('Biomation')
        

    const imgRotation: Record<'Biomation' | any, string[]> = {
        Biomation: ['Biomation1.png', 'Biomation2.png', 'Biomation3.png'],
    };

    return (
        <DivContainer option = 'h-max w-[100%] items-center justify-end p-6 '>
            <DivContainer option = ' h-[100%] w-[95%] items-center justify-between gap-10' rows>
                <DivContainer option = 'w-[40%] h-full'>
                    <DivContainer option={`z-99 rounded-md`} ref = {leftContainerRef}>
                        <DivContainer option = 'justify-center items-center'>
                            {
                                !['Portfolio', 'A Joke 1', 'A Joke 2', 'A Joke 3'].includes(portfolioHover) && portfolioHover &&
                                <DivContainer option = 'hover:scale-[1.4] origin-top-left transition-transform duration-300 h-max'>
                                    <Carousel srcPrefix="/preview/" images = {imgRotation[portfolioHover]}/>
                                </DivContainer>
                            }

                            {
                                portfolioHover === 'Portfolio' &&
                                <DivContainer option = 'h-[50vh] w-full border border-gray-500'>
                                    <SimpleTextInDiv element={
                                            <DivContainer option = 'w-[50%] p-3 justify-center items-center'>
                                                <Texts option = 'font-serif text-center text-[5vh] font-bold text-gray-300'>You're currently viewing it</Texts>
                                            </DivContainer>
                                        } 
                                    />
                                </DivContainer>
                            }

                            {
                                portfolioHover === 'A Joke 1' &&
                                <DivContainer option = 'h-[50vh] w-full justify-center items-center border border-gray-500'>
                                    <DivContainer option = 'w-[80%] p-3 justify-center items-center'>
                                        <Texts option = 'font-serif text-center text-[2vh] font-bold text-gray-300'>There's a mutated flower known as the "Powiększony kwiat trupia", it's a mysterious plant found only in Poland known to produce a enlargement effect on non-living that touched it. I know this cause I made it up</Texts>
                                    </DivContainer>
                                </DivContainer>
                            }

                            {
                                portfolioHover === 'A Joke 2' &&
                                <DivContainer option = 'h-[50vh] w-full justify-center items-center border border-gray-500'>
                                    <DivContainer option = ' p-3 justify-center items-center'>
                                        <Texts option = 'font-serif text-center text-[3vh] font-bold text-gray-300'>"If your enemy can predict your next move</Texts>
                                        <Texts option = 'font-serif text-center text-[3vh] font-bold text-gray-300'>then don't move"</Texts>
                                        <Texts option = 'font-serif text-center text-[1vh] font-bold text-gray-300'>- Lao Tzu, Art of Ragebait</Texts>
                                    </DivContainer>
                                </DivContainer>
                            }

                            {
                                portfolioHover === 'A Joke 3' &&
                                <DivContainer option = 'h-[50vh] w-full justify-center items-center border border-gray-500'>
                                    <DivContainer option = ' p-3 justify-center items-center'>
                                        <Texts option = 'font-serif text-center text-[3vh] font-bold text-gray-300'>"If you don't have a strategy</Texts>
                                        <Texts option = 'font-serif text-center text-[3vh] font-bold text-gray-300'>then don't move"</Texts>
                                        <Texts option = 'font-serif text-center text-[1vh] font-bold text-gray-300'>- Lao Tzu, Art of Ragebait again</Texts>
                                    </DivContainer>
                                </DivContainer>
                            }
                        </DivContainer>
                    </DivContainer>
                </DivContainer>

                <DivContainer option = 'w-[60%] h-full justify-start gap-0 select-text'>
                    <DivContainer option = {`p-5 hover:bg-[#527edd]/10 #527edd rounded-md ${ portfolioHover === 'Biomation' ? 'bg-gray-800/30' : 'opacity-50' }`}  onMouseEnter={() => setPortfolioHover('Biomation')}>
                        <a className = "w-full gap-10 flex flex-row" href = "https://github.com/pleasetypeyourusername" target = '_blank'>
                            <DivContainer option = 'justify-between w-[20%] items-center gap-5'>
                                <DivContainer option = 'h-max w-max'>
                                    <Texts option= "font-mono text-[#ffffee]">June 2025 — Still Doing</Texts>
                                </DivContainer>

                                <DivContainer option = 'flex-1 w-[75%] justify-center items-center select-none'>
                                    <DivContainer option = 'w-full h-[7vh] justify-center items-center bg-[#476eee] rounded-md #476eee pr-1 py-1' rows>    
                                        <img src = '/assets/BiomationLogo.png' className = 'filter grayscale brightness-500 h-13 w-8' alt = 'Biomation Logo'/>
                                        <Texts option = 'text-white font-bold text-[1.7vh]'>Biomation</Texts>
                                    </DivContainer>
                                </DivContainer>
                            </DivContainer>

                            <DivContainer option = 'gap-2 w-[80%]'>
                                <DivContainer rows option = 'gap-3 items-center select-none'>
                                    <Texts c = {0} w = {2} s = {1} option = 'font-mono'>Biomation</Texts>
                                    <img src = '/assets/redirect.png' className="h-3.5 w-3.5 filter invert" alt = 'redirect'/>
                                </DivContainer>

                                <DivContainer>
                                    <Texts c = {1} s = {4} option = 'font-mono'>
                                        A smart agriculture IoT platform for collecting, processing, and visualizing real-time environmental data. The platform provides centralized device management, analytics, security controls, and monitoring through an interactive dashboard.
                                    </Texts>
                                </DivContainer>

                                <DivContainer option = 'gap-1'>
                                    <TechListing list = {['Kafka', 'React Vite', 'GSAP', 'Tailwind', "Node.js", "Javascript", "Docker", "Kubernete", "Linux"]}/>
                                    <TechListing list = {[ "Postgres", "MongoDB", "Redis", "etc"]}/>
                                </DivContainer>
                            </DivContainer>
                        </a>
                    </DivContainer>

                    <DivContainer rows option = {`w-full gap-10 p-5 hover:bg-[#527edd]/10 rounded-md ${ portfolioHover === 'Portfolio' ? 'bg-gray-800/30' : 'opacity-50' }`} onMouseEnter={() => setPortfolioHover('Portfolio')}>
                        <DivContainer option = 'justify-between items-center w-[20%] gap-5'>
                            <DivContainer option = 'h-max w-max'>
                                <Texts option= "font-mono text-[#ffffee]" s = {5} c = {1}>September 2026 — October 2026</Texts>
                            </DivContainer>

                            <DivContainer option = 'flex-1 w-full justify-center items-center select-none'>
                                <DivContainer option = 'border border-gray-600 bg-black p-1'>
                                    <img className = 'h-20 w-40 rounded-sm' src = '/assets/portfolioThumbnail.png' alt = 'portfolio thumbnail'/>                                
                                </DivContainer>
                            </DivContainer>
                        </DivContainer>
                    

                        <DivContainer option = 'gap-2 w-[80%] justify-between'>
                            <DivContainer>
                                <DivContainer rows option = 'gap-3 items-center select-none'>
                                    <Texts c = {0} w = {2} s = {1} option = 'font-mono'>Portfolio</Texts>
                                </DivContainer>

                                <DivContainer>
                                    <Texts c = {1} option = 'font-serif'>
                                        The current portfolio you're looking at right now.
                                    </Texts>
                                </DivContainer>
                            </DivContainer>

                            <DivContainer option = 'gap-1'>
                                <TechListing list = {['React Vite', 'GSAP', 'Tailwind', "Typescript"]}/>
                            </DivContainer>
                        </DivContainer>
                    </DivContainer>

                    <DivContainer option = {`p-5 hover:bg-[#527edd]/10 rounded-md ${ portfolioHover === 'A Joke 1' ? 'bg-gray-800/30' : 'opacity-50' }`} onMouseEnter={() => setPortfolioHover('A Joke 1')}>
                        <a className = "w-full gap-10 flex flex-row ">
                            <DivContainer option = 'justify-between items-center w-[20%] gap-5'>
                                <DivContainer option = 'h-max w-max'>
                                    <Texts option= "font-mono text-[#ffffee]" s = {5} c = {1}>x — y</Texts>
                                </DivContainer>

                                <DivContainer option = 'flex-1 w-full justify-center items-center select-none'>
                                    <DivContainer option = 'border border-gray-600 bg-black p-1 w-[90%] h-full justify-center items-center'>
                                        <Texts option = 'font-bold text-gray-300 text-[4vh] font-montez'>Test</Texts>                                
                                    </DivContainer>
                                </DivContainer>
                            </DivContainer>
                        

                            <DivContainer option = 'gap-2 w-[80%] justify-between'>
                                <DivContainer>
                                    <DivContainer rows option = 'gap-3 items-center select-none'>
                                        <Texts c = {0} w = {2} s = {1} option = 'font-mono'>Effect Testing Purpose</Texts>
                                    </DivContainer>

                                    <DivContainer>
                                        <Texts c = {1} option = 'font-serif'>
                                            Effect testing purpose for the portfolio. This portfolioHover is not meant to be a real portfolioHover, but rather a testing ground for new effects and features.
                                        </Texts>
                                    </DivContainer>
                                </DivContainer>

                                <DivContainer option = 'gap-1'>
                                    <TechListing list = {['Unknown', 'Unknown', 'Unknown', "Unknown"]}/>
                                </DivContainer>
                            </DivContainer>
                        </a>
                    </DivContainer>

                    <DivContainer option = {`p-5 hover:bg-[#527edd]/10 rounded-md ${ portfolioHover === 'A Joke 2' ? 'bg-gray-800/30' : 'opacity-50' }`} onMouseEnter={() => setPortfolioHover('A Joke 2')}>
                        <a className = "w-full gap-10 flex flex-row ">
                            <DivContainer option = 'justify-between items-center w-[20%] gap-5'>
                                <DivContainer option = 'h-max w-max'>
                                    <Texts option= "font-mono text-[#ffffee]" s = {5} c = {1}>x — y</Texts>
                                </DivContainer>

                                <DivContainer option = 'flex-1 w-full justify-center items-center select-none'>
                                    <DivContainer option = 'border border-gray-600 bg-black p-1 w-[90%] h-full justify-center items-center'>
                                        <Texts option = 'font-bold text-gray-300 text-[4vh] font-montez'>Test</Texts>                                
                                    </DivContainer>
                                </DivContainer>
                            </DivContainer>
                        

                            <DivContainer option = 'gap-2 w-[80%] justify-between'>
                                <DivContainer>
                                    <DivContainer rows option = 'gap-3 items-center select-none'>
                                        <Texts c = {0} w = {2} s = {1} option = 'font-mono'>Effect Testing Purpose</Texts>
                                    </DivContainer>

                                    <DivContainer>
                                        <Texts c = {1} option = 'font-serif'>
                                            Effect testing purpose for the portfolio. This portfolioHover is not meant to be a real portfolioHover, but rather a testing ground for new effects and features.
                                        </Texts>
                                    </DivContainer>
                                </DivContainer>

                                <DivContainer option = 'gap-1'>
                                    <TechListing list = {['Unknown', 'Unknown', 'Unknown', "Unknown"]}/>
                                </DivContainer>
                            </DivContainer>
                        </a>
                    </DivContainer>

                    <DivContainer option = {`p-5 hover:bg-[#527edd]/10 rounded-md ${ portfolioHover === 'A Joke 3' ? 'bg-gray-800/30' : 'opacity-50' }`} onMouseEnter={() => setPortfolioHover('A Joke 3')}>
                        <a className = "w-full gap-10 flex flex-row ">
                            <DivContainer option = 'justify-between items-center w-[20%] gap-5'>
                                <DivContainer option = 'h-max w-max'>
                                    <Texts option= "font-mono text-[#ffffee]" s = {5} c = {1}>x — y</Texts>
                                </DivContainer>

                                <DivContainer option = 'flex-1 w-full justify-center items-center select-none'>
                                    <DivContainer option = 'border border-gray-600 bg-black p-1 w-[90%] h-full justify-center items-center'>
                                        <Texts option = 'font-bold text-gray-300 text-[4vh] font-montez'>Test</Texts>                                
                                    </DivContainer>
                                </DivContainer>
                            </DivContainer>
                        

                            <DivContainer option = 'gap-2 w-[80%] justify-between'>
                                <DivContainer>
                                    <DivContainer rows option = 'gap-3 items-center select-none'>
                                        <Texts c = {0} w = {2} s = {1} option = 'font-mono'>Effect Testing Purpose</Texts>
                                    </DivContainer>

                                    <DivContainer>
                                        <Texts c = {1} option = 'font-serif'>
                                            Effect testing purpose for the portfolio. This portfolioHover is not meant to be a real portfolioHover, but rather a testing ground for new effects and features.
                                        </Texts>
                                    </DivContainer>
                                </DivContainer>

                                <DivContainer option = 'gap-1'>
                                    <TechListing list = {['Unknown', 'Unknown', 'Unknown', "Unknown"]}/>
                                </DivContainer>
                            </DivContainer>
                        </a>
                    </DivContainer>

                </DivContainer>
            </DivContainer>
        </DivContainer>
    )
}


/*
    // icon draggable
    const dict = {
        "Biomation": ['Kafka', 'React', 'GSAP', 'Tailwind', "Node-js", "Javascript", "Docker", "Kubernetes", "Linux", "Postgresql", "Mongo", "Redis"],
        "Portfolio": ['React', 'GSAP', 'Tailwind', "Typescript"],
    }


    const IconElement = (): JSX.Element => {
        const portfolioHover: string[] = portfolioHover ? dict[portfolioHover] : [];
        const exception = ['Redis', 'Kafka', 'Linux', 'Node-js'];
        const rows = [];

        for (let i = 0; i < Math.ceil(portfolioHover.length / 5); i++) {
            const row = portfolioHover.slice(i * 5, i * 5 + 5);

            rows.push(
                <DivContainer key={i} option="w-full h-full gap-10 justify-evenly items-center items-center " rows>
                    {
                        row.map((tech : string) => (
                            <DivContainer key={tech} onMouseDown={() => console.log(`/assets/techIcons/${tech.toLowerCase()}`)}>
                                {
                                    !exception.includes(tech) &&
                                    <DivContainer option = 'bg-gray-800 #373a39 p-2 rounded-md' id = {`${tech}-icon`}>
                                        <img className = 'h-[5vh] w-[5vh]' src={`/assets/techIcons/${tech.toLowerCase()}.svg`} alt={tech}/>
                                    </DivContainer>
                                }

                                {
                                    tech === 'Redis' &&
                                    <DivContainer option = 'bg-white p-2 rounded-md bg-gray-800' id = 'Redis-icon'>
                                        <img className = 'h-[5vh] w-[5vh]' src={`/assets/techIcons/redis.png`} alt={tech}/>
                                    </DivContainer>
                                }

                                {
                                    tech === 'Kafka' &&
                                    <DivContainer option = 'bg-white p-2 rounded-md' id = 'Kafka-icon'>
                                        <img className = 'h-[5vh] w-[5vh]' src={`/assets/techIcons/kafka.svg`} alt={tech}/>
                                    </DivContainer>
                                }

                                {
                                    tech === 'Linux' &&
                                    <DivContainer option = 'bg-white p-2 rounded-md' id = 'Linux-icon'>
                                        <img className = 'h-[5vh] w-[5vh]' src={`/assets/techIcons/linux.svg`} alt={tech}/>
                                    </DivContainer>
                                }

                                {
                                    tech === 'Node-js' &&
                                    <DivContainer option = 'bg-white rounded-md' id = 'Node-js-icon'>
                                        <img className = 'h-[7vh] w-[7vh]' src={`/assets/techIcons/node-js.svg`} alt={tech}/>
                                    </DivContainer>
                                }
                            </DivContainer>
                        ))
                    }
                </DivContainer>
            );
        }

        return (
            <DivContainer option = 'gap-3 h-full w-full'>
                {rows}
            </DivContainer>
        );
    };

    useEffect(() => {
        IconElement()

        const ctx = gsap.context(() => {
            const portfolioHover: string[] = portfolioHover ? dict[portfolioHover] : [];
            
            for (let i = 0; i < portfolioHover.length; i++) {
                Draggable.create(`#${portfolioHover[i]}-icon`, {
                    type: 'x,y',
                    inertia: true
                })
            }

        })

        return () => ctx.revert();
    }, [portfolioHover])




September 6–13, 2026

*/