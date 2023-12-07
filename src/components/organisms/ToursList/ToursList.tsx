import SliderDotsGroup from "../../molecules/SliderDotsGroup/SliderDotsGroup";
import CardsList from "../CardsList/CardsList";
import Slider from "../Slider/Slider";
import "./ToursList.scss";

const cards = [
    {
        id: 1,
        title: "extraordinary tour 1",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "extraordinary tour 2",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        title: "extraordinary tour 3",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 4,
        title: "extraordinary tour 4",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 5,
        title: "extraordinary tour 5",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 6,
        title: "extraordinary tour 6",
        description: "Lorem ipsum dolor sit amet",
    },
];

export default function ToursList() {
    const chunck = (arr: any[], n: number) => {
        if (arr.length <= n) {
            return arr;
        }
        const result: any[] = [];
        arr.reduce((acc, curr, i) => {
            if (acc.length < n) {
                if (i === arr.length - 1) {
                    result.push([...acc, curr]);
                }
                return [...acc, curr];
            } else {
                result.push(acc);
                if (i === arr.length - 1) {
                    result.push([curr]);
                }
                return [curr];
            }
        }, []);
        return result;
    };
    return (
        <div id="tours">
            <Slider
                title="popular tours"
                sliderContent={chunck(cards, 3)}
                autoplay={false}
                children={[
                    <CardsList key="4567" list={chunck(cards, 3)} />,
                    <SliderDotsGroup
                        key="vbn"
                        color="dark"
                        position="bottom"
                    />,
                ]}
            />
        </div>
    );
}
