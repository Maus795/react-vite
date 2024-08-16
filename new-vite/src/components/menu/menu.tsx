import { useState } from "react"
import { IoCallOutline } from "react-icons/io5";
import { SlBasketLoaded } from "react-icons/sl";
import { MdProductionQuantityLimits } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
export function Menu() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            {<button className="clickMenu" onClick={() => setMenu(!menu)}>王</button>}
            {<nav className={`blockMenu ${menu ? "active" : ""}`}>
                <ul className="ulMenu">
                    <Link to="/profile" className="styleLiMenu"><VscAccount className="icon" /><span>Профиль</span></Link>
                    <Link to="/purchases" className="styleLiMenu"><MdProductionQuantityLimits className="icon" /><span>Продукты</span></Link>
                    <Link to="/basket" className="styleLiMenu"><SlBasketLoaded className="icon" /><span>Корзина</span></Link>
                    <Link to="/call" className="styleLiMenu"><IoCallOutline className="icon" /><span>Контакты</span></Link>

                </ul>
            </nav>}
        </>
    )
}