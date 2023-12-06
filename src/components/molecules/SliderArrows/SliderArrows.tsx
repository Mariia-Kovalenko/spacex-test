import { useContext, useEffect } from "react";
import { SliderContext } from "../../organisms/Slider/Slider";
import IconButton from "../../atoms/IconButton/IconButton";

import './SliderArrows.scss';

export default function SliderArrows() {
    const { changeSlide } = useContext(SliderContext);
    return(
        <div className="arrows">
            <IconButton icon={'./arrow-left.svg'} onClick={() => changeSlide(-1)} alt={"prev"} />
            <IconButton icon={'./arrow-right.svg'} onClick={() => changeSlide(1)} alt={"next"} />
        </div>
    )
}