import "./Button.scss";

interface IButtonProps {
    text: string;
    onClick: () => void;
    size?: "small" | "large";
}

export default function Button({ size, text, onClick }: IButtonProps) {
    let btnClassName = `btn ${size || "large"}`;

    return (
        <button className={btnClassName} onClick={onClick}>
            {text}
        </button>
    );
}
