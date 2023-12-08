import { NavLink } from "react-router-dom";

interface INavItemProps {
    text: string;
}

export default function NavigationItem({ text }: INavItemProps) {
    return (
        <li className="nav__item">
            <NavLink
                to={`/${text}`}
                className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                }
            >
                {text}
            </NavLink>
        </li>
    );
}
