import Banner from "../components/banner"
import background from "../images/IMG-2.svg"
import DropdownButton from "../components/dropdown"
import "../../about.css"
export default function About (){
    return(
        <main>
        <Banner overlay={true} text="" src={background} />
        <div className="drop-buttons-about">
        <DropdownButton label="Fiabilité" items={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
        <DropdownButton label="Respect" items={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."]} />
        <DropdownButton label="Service" items={["La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance."]} />
        <DropdownButton label="Sécurité" items={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />

        </div>
        </main>
)

}