import { sliderImages } from "../../../utils/constants";
import Slider from "../../organisms/Slider/Slider";
import './Home.scss';


export default function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <h1 className="title">The space is waiting for <br/> <span>you</span></h1>
                <Slider sliderContent={sliderImages} autoplay={true} />
            </div>
            some info
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Fuga perspiciatis fugiat eos quia assumenda a unde 
            expedita voluptate animi voluptates, quisquam, dolor 
            illum maiores repellendus molestiae velit culpa quibusdam.
             Sed?
        </div>
    )
}