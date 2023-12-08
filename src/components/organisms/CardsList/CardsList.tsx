import { useContext } from "react";
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

    function addFavourites(item: RocketData) {
        setFavs((prev) => [...prev, item])
    }

    function handleAddToFavourites(id: string, image: string) {
        let item = list[slideNumber].find((item: RocketData) => item.id === id);
        addFavourites({...item, image: image});
    }

    const renderCards = (list: any[]) => {
        return list.map(({ id, name, description }, i) => {
            const image = `./slider-${i+1}.jpg`;
            return (
                <Card
                    image={image}
                    key={id}
                    title={name}
                    content={description}
                    children={[
                        <Button key={`item-${Math.random()}`} text={"Buy"} onClick={() => {}} />,
                        <IconButton
                            key={`item-${Math.random()}`}
                            icon={"./like.svg"}
                            alt="like"
                            onClick={() => {handleAddToFavourites(id, image)}}
                        />,
                    ]}
                />
            );
        });
    };

    return <div className="cards">{renderCards(list[slideNumber])}</div>;
}
