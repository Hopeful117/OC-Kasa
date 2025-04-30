import background from '../images/IMG.svg'
export default function Banner(){
    return(
        <div className="banner">
            <img src={background} alt="landscape"/>
            <div className="overlay"></div>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )

}