import { useState } from "react"

export function Menu() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            {<button className="clickMenu" onClick={() => setMenu(!menu)}>王</button>}
            {<nav className={`blockMenu ${menu ? "active" : ""}`}>
                <ul className="ulMenu">
                    <li>Продукты</li>
                    <li>Контакты</li>
                    <li>Корзина</li>
                </ul>
            </nav>}
        </>
    )
}