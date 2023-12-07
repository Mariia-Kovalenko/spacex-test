import { useContext, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Card from "../../molecules/Card/Card";
import "./CardsList.scss";
import { SliderContext } from "../Slider/Slider";
import { useRecoilState } from "recoil";
import { favouritesState } from "../../../state/atoms/FavouritesState";
import { RocketData } from "../ToursList/ToursList";

export default function CardsList({ list }: { list: any[] }) {
    const { slideNumber } = useContext(SliderContext);
    const [favs, setFavs] = useRecoilState(favouritesState);
    console.log(list);

    function addFavourites(item: RocketData) {
        setFavs((prev) => [...prev, item])
    }

    useEffect(() => {
        console.log('favs',favs)
    },[favs])

    function handleAddToFavourites(id: string) {
        console.log(id);
        let item = list[slideNumber].find((item: RocketData) => item.id === id);
        console.log(item);
        addFavourites(item);
    }

    const renderCards = (list: any[]) => {
        return list.map(({ id, name, description }, i) => {
            // console.log(i)
            // let image = slideNumber + 1;
            // if (slideNumber > 3) {
            //     image = slideNumber % 3;
            // }
            return (
                <Card
                    image={`./slider-1.jpg`}
                    key={id}
                    title={name}
                    content={description}
                    children={[
                        <Button key="jk" text={"Buy"} onClick={() => {}} />,
                        <IconButton
                            key="erfv"
                            icon={"./like.svg"}
                            alt="like"
                            onClick={() => {handleAddToFavourites(id)}}
                        />,
                    ]}
                />
            );
        });
    };

    return <div className="cards">{renderCards(list[slideNumber])}</div>;
}
