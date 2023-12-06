import './IconButton.scss';

interface IIconButtonProps {
    icon: string;
    onClick: () => void;
    alt: string;
    size?: 'small' | 'large';
}

export default function IconButton({size, icon, alt, onClick}: IIconButtonProps) {
    let btnClassName = `icon-btn ${size || 'large'}`;

    return (
        <button className={btnClassName} onClick={onClick}>
            <img src={icon} alt={alt} />
        </button>
    )
}