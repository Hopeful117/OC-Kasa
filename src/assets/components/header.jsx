import logo from "../images/LOGO.svg"
import { NavLink } from "react-router"

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <NavLink to ={`/`} className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} >Accueil</NavLink>
                <a className="nav-link" href="#">A propos</a>
                </nav>
        </header>
    )
}