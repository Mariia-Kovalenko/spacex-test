import { useContext, useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Card from "../../molecules/Card/Card";
import "./CardsList.scss";
import { SliderContext } from "../Slider/Slider";

export default function CardsList({ list }: { list: any[] }) {
    const { slideNumber } = useContext(SliderContext);

    const renderCards = (list: any[]) => {
        return list.map(({ title, description }, i) => {
            // console.log(i)
            // let image = slideNumber + 1;
            // if (slideNumber > 3) {
            //     image = slideNumber % 3;
            // }
            return (
                <Card
                    image={`./slider-1.jpg`}
                    key={`card-${Math.random()}`}
                    title={title}
                    content={description}
                    children={[
                        <Button key="jk" text={"Buy"} onClick={() => {}} />,
                        <IconButton
                            key="erfv"
                            icon={"./like.svg"}
                            alt="like"
                            onClick={() => {}}
                        />,
                    ]}
                />
            );
        });
    };

    return <div className="cards">{renderCards(list[slideNumber])}</div>;
}
