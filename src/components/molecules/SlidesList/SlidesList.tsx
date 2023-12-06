import { useContext } from "react";
import Slide from "../../atoms/Slide/Slide";
import { SliderContext } from "../../organisms/Slider/Slider";

export default function SlidesList() {
    const { slideNumber, slides } = useContext(SliderContext);
    return (
        <div className="list">
            {/* {
                slides.map((slide, i) => {
                    return <Slide key={`slide-${slideNumber}`} imageScr={slides[i]} active={slideNumber === i} />
                })
            } */}
            <Slide key={`slide-${slideNumber}`} imageScr={slides[slideNumber]} />
        </div>
    );
}
