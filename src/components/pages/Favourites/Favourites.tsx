import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Card from "../../molecules/Card/Card";
import "./Favourites.scss";

export default function Favourites() {
    const favourites = [{ title: "item1" }, { title: "item2" }];

    return (
        <div className="favourites">
            <div className="favourites__banner">
                <h1 className="title">Favourites</h1>
                <img src="./slider-3.jpg" alt="banner" />
            </div>
            <div className="favourites__list container">
                <button className="clear">Clear All</button>
                <div className="cards">
                    {favourites.map(({ title }) => {
                        return (
                            <Card
                                image={`./slider-1.jpg`}
                                key={`card-${Math.random()}`}
                                title={title}
                                content={"description"}
                                children={[
                                    <Button
                                        key="jk"
                                        text={"Buy"}
                                        onClick={() => {}}
                                    />,
                                    <IconButton
                                        key="erfv"
                                        icon={"./Delete.svg"}
                                        alt="like"
                                        onClick={() => {}}
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
