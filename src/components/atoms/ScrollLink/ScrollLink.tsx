import "./ScrollLink.scss";

interface IScrollLinkProps {
    scrollTo: string;
    icon: string;
}

export default function ScrollLink({scrollTo, icon}: IScrollLinkProps) {
    return (
        <a
            className="scroll-link"
            href={`#${scrollTo}`}
            onClick={(e) => {
                let i = document.getElementById(scrollTo);
                e.preventDefault(); 
                i &&
                    i.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
            }}
        >
            Explore Tours
            <img src={icon} alt="scroll" />
        </a>
    );
}
