import Gallery from "../components/gallery"
import Banner from "../components/banner"
import background from "../images/IMG.svg"
import "../../index.css"
export default function Home(){
    
    return (
        <main>
        <Banner src={background} text={"Chez vous, partout et ailleurs" } overlay={true} />
        
        <Gallery />
     


        </main>
       
    )
}