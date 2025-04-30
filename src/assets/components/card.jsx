
export default function Card({key,title,cover}){
    return(
        <div className="card" id={key}>
        <img src={cover} alt={title}/>
        <a href='#'>{title}</a>
            
        </div>
    )

}