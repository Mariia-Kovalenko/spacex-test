import { useContext } from "react";
import { SliderContext } from "../../organisms/Slider/Slider";
import IconButton from "../../atoms/IconButton/IconButton";

import "./SliderArrows.scss";
import { ARROW_LEFT, ARROW_RIGHT } from "../../../utils/constants";

export default function SliderArrows() {
    const { changeSlide } = useContext(SliderContext);
    return (
        <div className="arrows">
            <IconButton
                icon={ARROW_LEFT}
                onClick={() => changeSlide(-1)}
                alt={"prev"}
            />
            <IconButton
                icon={ARROW_RIGHT}
                onClick={() => changeSlide(1)}
                alt={"next"}
            />
        </div>
    );
}
