import DivContainer from "../reusable/element/divs"
import Texts from "../reusable/element/text"

import type { JSX } from "react";
import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/all";

export default function Landing(): JSX.Element {
    const title1Ref = useRef<HTMLDivElement>(null)
    const title2Ref = useRef<HTMLDivElement>(null)
    const title2ContainerRef = useRef<HTMLDivElement>(null)
    const title3ContainerRef = useRef<HTMLDivElement>(null)
    const title3UnderlineRef = useRef<HTMLDivElement>(null)
    const briefExplainRef = useRef<HTMLDivElement>(null)
    const madeInRef = useRef<HTMLDivElement>(null)
    const shapeContainerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl1 = gsap.timeline({
                id: "text-animation1",
                defaults: { ease: "none" }
            });
            const tl2 = gsap.timeline({
                id: "portfolio-text-animation2",
                repeat: -1,
                paused: true,
                defaults: { ease: "none" },
                yoyo: true,
                repeatDelay: 1.25
            })

            const split1 = new SplitText(title1Ref.current, {
                type: "chars"
            })
            const split2 = new SplitText(title2Ref.current, {
                type: "chars"
            });
            const split3 = title3ContainerRef.current!.children
            const split4 = briefExplainRef.current!.children
            const split5 = madeInRef.current!.children
            const split6 = shapeContainerRef.current!.children

            tl1.from(split1.chars, {
                stagger: 0.2,
                duration: 1.5,
                ease: "power4.out",
                scrambleText: {
                    text: "",
                    chars: "abcdefghijklmnopqrstuvwsyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWSYZ",
                    speed: 1.2,
                }
            }, '+=0.3')
            .fromTo(split2.chars, {
                opacity: 0
            }, {
                duration: 1,
                opacity: 1
            }, "+=0.2")
            .to(title2ContainerRef.current, {
                scale: 0.6,
                duration: 0.5,
                ease: "power2.inOut"
            })
            .to(title2ContainerRef.current, {
                background: "linear-gradient(90deg, #163665, #4a85de)",
                duration: 1,
                ease: "power2.inOut"
            })
            .to(split3, {
                y: 255,
                stagger: 0.2,
                duration: 0.8,
                ease: "power4.out"
            })
            .to(split3, {
                y: 255 * 2,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out"
            })
            .fromTo(title3UnderlineRef.current, {
                width: 0
            }, {
                width: "45.5vw",
                duration: 1,
                onComplete: () => tl2.play()
            })
            .fromTo(split4,
            { 
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.inOut"
            })
            .fromTo(split5, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.inOut"
            })
            .fromTo(split6, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.3
            })

            const fontList = [
                '"Gamja Flower", sans-serif',
                '"Indie Flower", cursive',
                '"Montez", cursive',
            ];

            tl2.to(document.querySelectorAll('[class*="portfolio-letter-"]'), {
                fontFamily: () => gsap.utils.random(fontList),
                color: () => gsap.utils.random(['#BFAF9B', '#E6D8B8', '#FFFCF1']),
                duration: 0.3,
                stagger: 0.4
            }, '+=0.8')
        })

        return () => ctx.revert()
    })

    useEffect(() => {
        const shapes = document.querySelectorAll('[class*="shape"]');

        shapes.forEach((shape, index) => {
            const xTo = gsap.quickTo(shape, "x", {
                duration: 0.8,
                ease: "power3.out"
            });

            const yTo = gsap.quickTo(shape, "y", {
                duration: 0.8,
                ease: "power3.out"
            });

            const strength = 0.01 + index * 0.05;

            const handleMouseMove = (e: MouseEvent) => {
                xTo(e.clientX * strength);
                yTo(e.clientY * strength);
            };

            window.addEventListener("mousemove", handleMouseMove);
        });
    }, []);

    return (
        <DivContainer option = 'items-center justify-center h-[100vh] w-[100vw]'>
            <DivContainer option = 'z-2 absolute top-[10%] left-[12%] items-start w-full'>
                <Texts ref={title1Ref} option = 'text-[25vh] font-semibold font-mono text-[#fffce1]'>Welcome to</Texts>
            </DivContainer>

            <DivContainer ref = {title2ContainerRef} option = 'z-2 absolute left-[19%] top-[45%] items-end w-max px-10' rows>
                <Texts ref={title2Ref} option = ' text-[15vh] font-semibold font-montez text-[#fffce1]'>Min Quan</Texts>
            </DivContainer>

            <DivContainer ref={title3ContainerRef} option = 'z-2 absolute left-[43%] top-[44%] items-end h-[25vh] w-max px-10 overflow-hidden' rows>
                <DivContainer>
                    <Texts option = 'portfolio-letter-1 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>P</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>W</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-2 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>o</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>o</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-3 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>r</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>r</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-4 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>t</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>k</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-5 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>f</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>p</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-6 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>o</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>l</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-7 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>l</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>a</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>

                <DivContainer>
                    <Texts option = 'portfolio-letter-8 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>i</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>c</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>
                
                <DivContainer>
                    <Texts option = 'portfolio-letter-9 text-[clamp(3rem,18vh,12rem)] font-semibold font-mono text-[#fffce1]'>o</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono text-[#fffce1]'>e</Texts>
                    <Texts option = 'text-[18vh] font-semibold font-mono opacity-0'>I</Texts>
                </DivContainer>
            </DivContainer>

            <DivContainer children option = 'z-2 absolute left-[44.5%] top-[62.5%] h-[0.5vh] w-[45.5vw] bg-[#fffce1]' ref = {title3UnderlineRef}/>

            <DivContainer ref = {briefExplainRef} option = 'z-2 absolute bottom-[10%] left-[10%] items-center' rows>
                <Texts option="text-[#fffce1] font-normal text-[8vh]">《</Texts>

                <Texts option="text-[#fffce1] font-semibold text-[1.5vh] font-mono w-[50%] text-center">A self-taught unemployed who enjoys building, problem-solving, and constantly learning new tech.</Texts>

                <Texts option="text-[#fffce1] font-normal text-[8vh]">》</Texts>
            </DivContainer>

            <DivContainer ref = {madeInRef} option = 'z-2 absolute bottom-[10%] right-[10%] items-center'>
                <Texts option="text-[#fffce1] font-semibold text-[1.5vh] font-mono">Made In 2026</Texts>
            </DivContainer>

            <DivContainer ref={shapeContainerRef} option="h-full w-full absolute bottom-[0%] justify-center items-center">
                <DivContainer option = 'h-max w-max absolute left-[80%] top-[15%]'>
                    <svg width = '250' height = '250' viewBox= "0 0 400 400">
                        <defs>
                            <linearGradient id="g5" x1="20%" y1="20%" x2="80%" y2="80%">
                            <stop offset="0%" stopColor="#FACC15"/>
                            <stop offset="100%" stopColor="#F43F5E"/>
                            </linearGradient>
                        </defs>

                        <path
                            className="shape"
                            fill="url(#g5)"
                            d="
                            M150 10
                            C165 100 200 135 290 150
                            C200 165 165 200 150 290
                            C135 200 100 165 10 150
                            C100 135 135 100 150 10Z
                            "
                        />
                    </svg>
                </DivContainer>

                <DivContainer option = 'h-max w-max absolute left-[10%] top-[5%]'>
                    <svg width = '250' height = '250' viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22C55E"/>
                            <stop offset="50%" stopColor="#14B8A6"/>
                            <stop offset="100%" stopColor="#3B82F6"/>
                            </linearGradient>
                        </defs>

                        <path
                            className="shape"
                            fill="url(#g4)"
                            fillRule="evenodd"
                            d="
                            M150 20
                            A130 130 0 1 1 150 280
                            A130 130 0 1 1 150 20

                            M150 75
                            A75 75 0 1 0 150 225
                            A75 75 0 1 0 150 75
                            "
                        />
                    </svg>
                </DivContainer>

                <DivContainer option = 'h-max w-max absolute left-[10%] bottom-[15%]'>
                    <svg width = '300' height = '300' viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6"/>
                            <stop offset="100%" stopColor="#06B6D4"/>
                            </linearGradient>
                        </defs>

                        <path
                            fill="url(#g7)"
                            fillRule="evenodd"
                            d="M80,110
                            C105,55 170,40 220,65
                            C270,90 330,70 345,125
                            C360,180 315,195 330,245
                            C345,300 285,340 235,315
                            C185,290 155,350 105,315
                            C55,280 75,235 50,195
                            C25,155 55,140 80,110Z"
                        />
                    </svg>
                </DivContainer>

                <DivContainer option = 'h-max w-max absolute right-[20%] bottom-[5%]'>
                    <svg width = '300' height = '300' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g9" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d14888"/>
                            <stop offset="100%" stopColor="#c9c74e"/>
                            </linearGradient>
                        </defs>

                        <path
                            fill="url(#g9)"
                            fillRule="evenodd"
                            d="M38,80
                            C25,45 65,25 95,40
                            C125,55 165,30 172,70
                            C180,110 155,125 165,150
                            C175,175 125,180 95,160
                            C65,140 45,170 30,135
                            C15,105 50,115 38,80Z"
                        />
                    </svg>
                </DivContainer>
            </DivContainer>

        </DivContainer>
    )
}