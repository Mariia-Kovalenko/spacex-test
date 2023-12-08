import { NAV_ITEMS } from "../../../utils/constants";
import NavigationItem from "../../atoms/NavigationItem/NavigationItem";
import './NavigationLinks.scss';

export default function NavigationLinks() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {NAV_ITEMS.map(({id, text}) => {
                    return <NavigationItem text={text} key={id} />;
                })}
            </ul>
        </nav>
    );
}
