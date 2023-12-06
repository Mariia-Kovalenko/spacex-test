import { NavLink } from "react-router-dom";

export default function NavigationItem({ text }: { text: string }) {
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
            {/* <span className="nav__item-bottom"></span> */}
        </li>
    );
}
