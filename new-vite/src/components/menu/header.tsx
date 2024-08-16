import { VscAccount, VscSearch } from "react-icons/vsc";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";

export function Header() {
    return (<header>
        <nav className="styleHeader" >
            <Link to="/" className="styleLiHeader"><CiHome /> Главаная</Link>
            <li className="styleLiHeader"><VscSearch /></li>
            <Link to="/authorization" className="styleLiHeader">Войти<VscAccount /></Link>
        </nav>
    </header>

    )
}