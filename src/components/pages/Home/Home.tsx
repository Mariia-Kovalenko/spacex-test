import { ARROW_DOWN, SLIDER_IMAGES, TOURS_SECTION_ID } from "../../../utils/constants";
import ScrollLink from "../../atoms/ScrollLink/ScrollLink";
import SliderDotsGroup from "../../molecules/SliderDotsGroup/SliderDotsGroup";
import SlidesList from "../../molecules/SlidesList/SlidesList";
import Slider from "../../organisms/Slider/Slider";
import ToursList from "../../organisms/ToursList/ToursList";
import "./Home.scss";

export default function Home() {

    return (
        <div className="home">
            <div className="home__banner">
                <h1 className="title">
                    The space is waiting for <br /> <span>you</span>
                </h1>
                <Slider
                    sliderContent={SLIDER_IMAGES}
                    autoplay={true}
                    children={[
                        <SlidesList key={`slider-${Math.random()}`} />,
                        <SliderDotsGroup
                            key={`slider-${Math.random()}`}
                            color="light"
                            position="center"
                        />,
                    ]}
                />
                <ScrollLink scrollTo={TOURS_SECTION_ID} icon={ARROW_DOWN} />
            </div>
            <div className="container">
                <ToursList />
            </div>
        </div>
    );
}

