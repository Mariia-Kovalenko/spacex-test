import { NavLink, useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Logo from "../../atoms/Logo/Logo";
import NavigationLinks from "../../molecules/NavigationLinks/NavigationLinks";
import "./Header.scss";
import {
    FAVOURITES_ENDPOINT,
    LIKE_ICON,
    LIKE_ICON_LIGHT,
    LOGO,
} from "../../../utils/constants";

export default function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <div className="header__inner">
                <Logo image={LOGO} />
                <NavigationLinks />
                <div className="header__buttons">
                    <NavLink
                        to={FAVOURITES_ENDPOINT}
                        className={({ isActive }) =>
                            isActive ? "header__btn active" : "header__btn"
                        }
                    >
                        <IconButton
                            icon={
                                location.pathname === FAVOURITES_ENDPOINT
                                    ? LIKE_ICON_LIGHT
                                    : LIKE_ICON
                            }
                            alt="like"
                            onClick={() => {}}
                        />
                    </NavLink>
                    <Button text={"sign in"} onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}
