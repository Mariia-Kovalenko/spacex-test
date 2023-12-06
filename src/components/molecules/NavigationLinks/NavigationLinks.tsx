import { navigationItems } from "../../../utils/constants";
import NavigationItem from "../../atoms/NavigationItem/NavigationItem";
import './NavigationLinks.scss';

export default function NavigationLinks() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navigationItems.map(({id, text}) => {
                    return <NavigationItem text={text} key={id} />;
                })}
            </ul>
        </nav>
    );
}
