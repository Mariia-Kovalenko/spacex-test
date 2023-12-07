import { useState, useEffect } from "react";
import { sliderImages } from "../../../utils/constants";
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
                    sliderContent={sliderImages}
                    autoplay={true}
                    children={[
                        <SlidesList key="ghj" />,
                        <SliderDotsGroup
                            key="ghio"
                            color="light"
                            position="center"
                        />,
                    ]}
                />
                <ScrollLink scrollTo={"tours"} icon={"./arrow-down.svg"} />
            </div>
            <div className="container">
                <ToursList />
            </div>
        </div>
    );
}
