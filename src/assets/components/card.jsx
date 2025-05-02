import { Link } from "react-router"
export default function Card({id,title,cover}){
    return(
        <div className="card" id={id}>
        <img src={cover} alt={title}/>
        <Link to={`/${id}`} >{title}</Link>
            
        </div>
    )

}