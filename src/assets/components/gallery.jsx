import { UseLogements } from "../context/LogementContext";
import Card from "./card"
export default function Gallery(){
    const {logements ,loading, error} = UseLogements();
    if(loading) return <p>Chargement</p>
    if(error) return <p>Erreur: {error}</p>
    return (
        
        <div className="gallery">
          
            
            {logements.map((logement)=>(
                <Card key={logement.id} title={logement.title} cover={logement.cover}/>
            ))}
        </div>
     )

}