import { useContext } from "react";
import { SliderContext } from "../../organisms/Slider/Slider";
import SliderDot from "../../atoms/SliderDot/SliderDot";
import "./SliderDotsGroup.scss";

interface ISliderDotsGroupProps {
    color: "light" | "dark";
    position: "center" | "bottom";
}

export default function SliderDotsGroup({
    color,
    position,
}: ISliderDotsGroupProps) {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(
                <SliderDot key={`slider-dot-${i}`} color={color} number={i} />
            );
        }

        return dots;
    };
    return <div className={`slider-dots ${position}`}>{renderDots()}</div>;
}
