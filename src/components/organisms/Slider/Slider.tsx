import { useEffect, useState, createContext } from "react";
import SliderArrows from "../../molecules/SliderArrows/SliderArrows";
import SliderDotsGroup from "../../molecules/SliderDotsGroup/SliderDotsGroup";
import SlidesList from "../../molecules/SlidesList/SlidesList";
import "./Slider.scss";

export const SliderContext = createContext({
    changeSlide: (slide: number) => {},
    goToSlide: (number: number) => {},
    slidesCount: 0,
    slideNumber: 0,
    slides: [""],
});

interface ISliderProps {
    autoplay: boolean;
    sliderContent: any;
    children: string | JSX.Element | JSX.Element[];
    title?: string;
}

export default function Slider({
    autoplay,
    sliderContent,
    children,
    title,
}: ISliderProps) {
    const [slides, setSlides] = useState(sliderContent);
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     setSlides(sliderImages);
    // });

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (currentSlide + direction < 0) {
            slideNumber = slides.length - 1;
        } else {
            slideNumber = (currentSlide + direction) % slides.length;
        }

        setCurrentSlide(slideNumber);
    };

    const goToSlide = (number: number) => {
        setCurrentSlide(number % slides.length);
    };

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [slides.length, currentSlide]);

    return (
        <div className="slider">
            <SliderContext.Provider
                value={{
                    changeSlide,
                    goToSlide,
                    slidesCount: slides.length,
                    slideNumber: currentSlide,
                    slides: slides,
                }}
            >
                {!autoplay && (
                    <div className="slider-top">
                        {title && <h2 className="section-title">{title}</h2>}
                        <SliderArrows />
                    </div>
                )}
                {children}
                {/* <SlidesList />
                <div className="dots-center">
                    <SliderDotsGroup color='light' />
                </div> */}
            </SliderContext.Provider>
        </div>
    );
}
