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
                    <Link to="/profile" className="styleLiMenu"><VscAccount />Профиль</Link>
                    <Link to="/purchases" className="styleLiMenu"><MdProductionQuantityLimits />Продукты</Link>
                    <Link to="/basket" className="styleLiMenu"><SlBasketLoaded />Корзина</Link>
                    <Link to="/call" className="styleLiMenu"><IoCallOutline />Контакты</Link>

                </ul>
            </nav>}
        </>
    )
}