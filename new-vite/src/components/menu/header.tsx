import { VscAccount, VscSearch } from "react-icons/vsc";
import { CiHome } from "react-icons/ci";

export function Header() {
    return (<header>
        <nav className="styleHeader" >
            <li className="styleLiHeader"><CiHome /> Главаная</li>
            <li className="styleLiHeader"><VscSearch /></li>
            <li className="styleLiHeader">Войти<VscAccount /></li>
        </nav>
    </header>

    )
}