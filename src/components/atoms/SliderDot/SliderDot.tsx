import { SliderContext } from "../../organisms/Slider/Slider";
import "./SliderDot.scss";

import { useContext } from "react";

interface ISliderDotProps {
    color: "light" | "dark";
    number: number;
}

export default function SliderDot({ color, number }: ISliderDotProps) {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        <button className={`dot ${color}`} onClick={() => goToSlide(number)}>
            {slideNumber === number && (
                <div className={`dot__inner ${color}`}></div>
            )}
        </button>
    );
}
