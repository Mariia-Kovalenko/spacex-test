export default function Logo({image}: {image: string}) {
    return(
        <div className="logo">
            <img src={image} alt="logo" />
        </div>
    )
}