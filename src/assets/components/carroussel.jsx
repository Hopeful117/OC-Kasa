import { useState } from "react"
import previousIcon from '../images/previous.png';
import nextIcon from '../images/next.png';


export default function Carroussel({images}){
    const [index,updateIndex]= useState(0)
    return(
        <div className="carrousel">
        <img className="pictures" src={images[index]}/>
        <button className="modale-btn" id="previous" onClick={()=>updateIndex(index===0 ? images.length-1 : index-1)}><img alt="previous" src={previousIcon}/></button>
        <button className="modale-btn" id="next" onClick={()=>updateIndex(index===images.length-1 ? 0 : index+1)}><img alt="next" src={nextIcon}/></button>
        
        </div>
    )
}