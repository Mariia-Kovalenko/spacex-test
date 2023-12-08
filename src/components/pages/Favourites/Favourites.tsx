import { useRecoilState } from "recoil";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Card from "../../molecules/Card/Card";
import "./Favourites.scss";
import { favouritesState } from "../../../state/atoms/FavouritesState";


export default function Favourites() {
    const [favs, setFavs] = useRecoilState(favouritesState);

    function clearFavourites() {
        setFavs([]);
    }

    function deleteFavourite(id: string) {
        setFavs((prev) => {
            return prev.filter((fav) => fav.id !== id);
        })
    }

    return (
        <div className="favourites">
            <div className="favourites__banner">
                <h1 className="title">Favourites</h1>
                <img src="./slider-3.jpg" alt="banner" />
            </div>
            <div className="favourites__list container">
                <button className="clear" onClick={clearFavourites}>
                    Clear All
                </button>
                <div className="cards">
                    {favs.map(({ id, name, description, image }) => {
                        return (
                            <Card
                                image={image || './slider-1.jpg'}
                                key={id}
                                title={name}
                                content={description}
                                children={[
                                    <Button
                                        key={`item-${Math.random()}`}
                                        text={"Buy"}
                                        onClick={() => {}}
                                    />,
                                    <IconButton
                                        key={`item-${Math.random()}`}
                                        icon={"./Delete.svg"}
                                        alt="like"
                                        onClick={() => {deleteFavourite(id)}}
                                    />,
                                ]}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
