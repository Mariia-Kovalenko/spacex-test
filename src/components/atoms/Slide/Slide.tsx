import './Slide.scss';

export default function Slide({ imageScr, active }: { imageScr: string, active?: boolean }) {
    return (
        <div className='slide'>
            <img src={imageScr} alt='slide' />
        </div>
    );
}
