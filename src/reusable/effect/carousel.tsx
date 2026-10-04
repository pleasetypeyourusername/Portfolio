import { useState, useEffect, type JSX } from 'react'
import DivContainer from '../element/divs';

type Parameter = {
    images: Array<string>,
    srcPrefix: string,
    option?: string
}

export default function Carousel({ images, srcPrefix, option = '' }: Parameter) : JSX.Element {

    const [index, setIndex] = useState(0);
    const [buttonAppear, setButtonAppear] = useState(false);

    const nextSlide = () => setIndex((index + 1) % images.length);
    const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [index]);


    const renderImages = () => (
        images.map((src, i) => (
            <img
                key = {i}
                // className = {`${styles.ImageDeco} ${styles.slide} ${i === index ? styles.active : ''} `}
                className = {`w-full opacity-0 transition-opacity duration-300 ease-in-out absolute top-0 left-0 h-full w-full ${i === index ? 'opacity-100 relative' : ''}`}
                src = {`${srcPrefix}${src}`}
                alt={`Product Image ${i}`}
            />
        ))
    )

    return (
        <DivContainer option = 'relative w-full overflow-hidden' onMouseOver= {() => {setButtonAppear(true)}} onMouseLeave = {() => {setButtonAppear(false)}}>
            <button className = {`h-full absolute left-[1vh] cursor-pointer invisible z-[999] font-thin text-white bg-[rbg(255,255,255)]/50 rounded-[50%] text-[1.5rem] h-[5vh] w-[5vh] ease-in-out transition-visibility duration-500 ${buttonAppear ? 'visible opacity-30 hover:opacity-100' : 'hidden'} ${option}`} onClick={() => prevSlide()}>〈</button>
            <button className = {`h-full absolute right-[1vh] cursor-pointer invisible z-[999] text-white bg-[rbg(255,255,255)]/50 rounded-[50%] text-[1.5rem] h-[5vh] w-[5vh] ease-in-out transition-visibility duration-500 ${buttonAppear ? 'visible opacity-30 hover:opacity-100' : 'hidden'} ${option}`} onClick={() => nextSlide()}>〉</button>
            {renderImages()}
        </DivContainer>
    );
}


/*
.ImageDeco {
  min-height: 80vh;
  max-width: 50vw;
  max-height: 80vh; 
}

*/