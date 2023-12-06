import { NavLink, useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import IconButton from "../../atoms/IconButton/IconButton";
import Logo from "../../atoms/Logo/Logo";
import NavigationLinks from "../../molecules/NavigationLinks/NavigationLinks";
import "./Header.scss";

export default function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <div className="header__inner">
                <Logo image={"./logo.png"} />
                <NavigationLinks />
                <div className="header__buttons">
                    <NavLink
                        to="/favourites"
                        className={({ isActive }) =>
                            isActive ? "header__btn active" : "header__btn"
                        }
                    >
                        <IconButton
                            icon={location.pathname === '/favourites' ? './like-white.svg' : "./like.svg"}
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
