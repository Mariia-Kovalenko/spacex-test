import "./Slide.scss";

interface ISlideProps {
    imageScr: string;
    active?: boolean;
}

export default function Slide({ imageScr, active }: ISlideProps) {
    return (
        <div className="slide">
            <img src={imageScr} alt="slide" />
        </div>
    );
}
