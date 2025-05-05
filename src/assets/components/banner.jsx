
export default function Banner({src,overlay,text}){
    return(
        <div className="banner">
            <img src={src} alt="landscape"/>
            {
                overlay && <div className="overlay"></div>

            }
           
            <p>{text}</p>
        </div>
    )

}