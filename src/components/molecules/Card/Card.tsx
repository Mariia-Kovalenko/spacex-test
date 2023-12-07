import './Card.scss';

interface ICardProps {
    image: string;
    title: string;
    content: string;
    children: string | JSX.Element | JSX.Element[];
}

export default function Card({image, title, content, children}: ICardProps) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt="card" />
            </div>
            <div className="card__inner">
                <div className="card__title">{title}</div>
                <div className="card__description">{content}</div>
            </div>
            <div className="card__actions">{children}</div>
        </div>
    )
}