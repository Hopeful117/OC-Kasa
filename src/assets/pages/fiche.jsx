import { UseLogements } from "../context/LogementContext";
import { useParams } from "react-router";
import Carroussel from "../components/carroussel";
import Tag from "../components/tag";
import StarRating from "../components/rating";
import DropdownButton from "../components/dropdown";
import Error404 from "./404";
import "../../fiche.css"





export default function Fiche (){
    const {id} = useParams()
    const {logements ,loading, error} = UseLogements();
    const target=logements.find((logement)=>logement.id===id)
    if(loading) return <p>Chargement</p>
    if(error) return <p>Erreur: {error}</p>
    if(!target){
        return <Error404 />
    }
    return (
        
        <main>
        
        <Carroussel images={target.pictures}/>
        <div className="container">
            <div className="logement">
                
                    <h2 className="title">{target.title}</h2>
                    <h3>{target.location}</h3>
            </div>
            
                <div className="host">
                    <h3>{target.host.name}</h3>
                    <img src={target.host.picture}/>
                </div>
          
      


        </div>
      
        <div className="container">
        <div className="tags">
            {target.tags.map((tag,index)=>(
                <Tag name={tag} key={index} />
            ))}
            </div>
            <StarRating rating={target.rating}/>

        </div>
        
        <div className="drop-buttons">
        <DropdownButton label="Description" items={[target.description]}/>

        <DropdownButton label="Equipements" items={target.equipments}/>


        </div>
        
       
       
        </main>
    )
}