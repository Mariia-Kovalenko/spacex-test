import { useEffect, useState } from "react";
import SliderDotsGroup from "../../molecules/SliderDotsGroup/SliderDotsGroup";
import CardsList from "../CardsList/CardsList";
import Slider from "../Slider/Slider";
import "./ToursList.scss";
import SpaceMission from "../../../graphql";
import { chunck } from "../../../helpers/helpers";

export interface RocketData {
    id: string;
    name: string;
    description: string;
    image?: string;
}

export default function ToursList() {
    const [data, setData] = useState<RocketData[]>([]);

    async function fetchData() {
        const spaceRockets = await SpaceMission.getRockets();
        setData(spaceRockets);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id="tours">
            {data.length && (
                <Slider
                    title="popular tours"
                    sliderContent={chunck(data, 3)}
                    autoplay={false}
                    children={[
                        <CardsList key={`item-${Math.random()}`}list={chunck(data, 3)} />,
                        <SliderDotsGroup
                            key={`item-${Math.random()}`}
                            color="dark"
                            position="bottom"
                        />,
                    ]}
                />
            )}
        </div>
    );
}

