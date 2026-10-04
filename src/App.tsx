import './App.css'

import InteractiveBackground from './component/Background'
import Landing from './component/Landing';
import Introduction from './component/Introduction';
import Projects from './component/Projects'
import Contact from './component/Contact'

import DivContainer  from './reusable/element/divs';
import Texts from './reusable/element/text'

import { useLayoutEffect, useRef } from 'react';

import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrollSmoother, ScrambleTextPlugin, MorphSVGPlugin, Draggable, InertiaPlugin } from 'gsap/all';

// import SimpleTextInDiv from "./reusable/effect/simpleTextInDiv.tsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin, MorphSVGPlugin, Draggable, InertiaPlugin);

function App() {
    const wrapper = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);
    const smootherRef = useRef<ScrollSmoother | null>(null);

    // SmoothScroll hook
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            smootherRef.current = ScrollSmoother.create({
                wrapper: wrapper.current,
                content: content.current,
                smooth: 1.5,
                effects: true,
            });

            return () => {
                smootherRef?.current?.kill();
            };
        }, wrapper);

        return () => ctx.revert();
    }, []);

    // Scroll to Introduction section hook
    const introductionParentRef = useRef<HTMLDivElement>(null);
    const introductionTitleRef = useRef<HTMLDivElement>(null);
    const introductionMainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true,
                onStart: () => {
                    smootherRef.current?.paused(true);
                }                
            });

            tl.fromTo(introductionTitleRef.current, {
                opacity: 0,
                y: 30,
            }, {
                opacity: 1,
                y: 0,
                duration: 1
            })
            .fromTo(introductionMainRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                
            }, {
                opacity: 1,
                y: 0,
                onComplete: () => {
                    smootherRef.current?.paused(false)
                }
            });

            ScrollTrigger.create({
                trigger: introductionParentRef.current,
                start: "top top",
                once: true,
                onEnter: () => {
                    window.scrollTo({
                        top: introductionParentRef?.current?.offsetTop,
                        behavior: "instant"
                    });
 
                    tl.play();
                },
            });

        }, wrapper?.current || []);

        return () => ctx.revert();
    }, []);

    // Scroll to Project section hook
    const projectParentRef = useRef<HTMLDivElement>(null);
    const projectTitleRef = useRef<HTMLDivElement>(null);
    const projectMainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true,
                onStart: () => {
                    smootherRef.current?.paused(true);
                }                
            });

            tl.fromTo(projectTitleRef.current, {
                opacity: 0,
                y: 30,
            }, {
                opacity: 1,
                y: 0,
                duration: 1
            })
            .fromTo(projectMainRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                
            }, {
                opacity: 1,
                y: 0,
                onComplete: () => {
                    smootherRef.current?.paused(false)
                }
            });

            ScrollTrigger.create({
                trigger: projectParentRef.current,
                start: "top top",
                once: true,
                onEnter: () => {
                    window.scrollTo({
                        top: projectParentRef?.current?.offsetTop,
                        behavior: "instant"
                    });
 
                    tl.play();
                },
            });

        }, wrapper?.current || []);

        return () => ctx.revert();
    }, []);

    return (
        <DivContainer option = 'no-scrollbar w-full relative bg-[#0e100f]' ref = {wrapper}>
            <InteractiveBackground/>

            <DivContainer option = 'relative w-full no-scrollbar' ref = {content}>
                <DivContainer option = 'gap-[50vh] relative w-full'>
                    <DivContainer option = 'relative h-max w-full z-2 select-none'>
                        <Landing/>                
                    </DivContainer>

                    <DivContainer option = 'relative h-max w-full z-2 select-none' ref = {introductionParentRef}>
                        <DivContainer option = 'absolute top-[3%] left-[4%] items-center justify-center gap-3' rows ref = {introductionTitleRef}>
                            <img className = 'h-6 w-6 invert filter' src = '/assets/infoIcon.png' alt = 'icon'/>
                            <Texts option = 'font-gamjaFlower text-[#fffce1] font-bold text-[4vh] text-[#fffce1]'>README.md</Texts>
                        </DivContainer>

                        <DivContainer option = 'relative h-full w-full items-center' ref = {introductionMainRef}>
                            <Introduction/>
                        </DivContainer>
                    </DivContainer>

                    <DivContainer option = 'relative h-max w-full items-center z-2' ref = {projectParentRef}>
                        <DivContainer option = 'absolute top-[3%] left-[4%] items-center justify-center gap-3' rows ref = {projectTitleRef}>
                            <img className = 'h-6 w-6 invert filter' src = '/assets/folder.png' alt = 'icon'/>
                            <Texts option = 'font-gamjaFlower text-[#fffce1] font-bold text-[4vh] text-[#fffce1]'>/Projects</Texts>
                        </DivContainer>

                        <DivContainer option = 'relative h-full w-full items-center mt-20' ref = {projectMainRef}>
                            <Projects/>
                        </DivContainer>
                    </DivContainer>
                </DivContainer>

                <DivContainer option = 'relative h-max w-full items-center z-2 mt-20'>
                    <Contact/>
                </DivContainer>

            </DivContainer> 
        </DivContainer>
    )
}

export default App
