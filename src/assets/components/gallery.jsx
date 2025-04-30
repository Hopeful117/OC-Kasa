import logements from "../logements.json"
import Card from "./card"
export default function Gallery(){
    return (
        
        <div className="gallery">
            
            {logements.map((logement)=>(
                <Card key={logement.id} title={logement.title} cover={logement.cover}/>
            ))}
        </div>
     )

}