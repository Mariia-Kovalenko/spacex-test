import { useContext } from "react";
import Slide from "../../atoms/Slide/Slide";
import { SliderContext } from "../../organisms/Slider/Slider";

export default function SlidesList() {
    const { slideNumber, slides } = useContext(SliderContext);
    return (
        <div className="list">
            <Slide key={`slide-${slideNumber}`} imageScr={slides[slideNumber]} />
        </div>
    );
}
