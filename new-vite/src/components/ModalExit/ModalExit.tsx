import { useContext } from "react"
import "./ModalExit.css"
import { ContextAuth } from "../../Context"
export function ModalExit() {
    const { ex, btnCancel } = useContext(ContextAuth)
    return (
        <>
            <div className="Exit">
                <div className="WinExit">

                    Уверены что хотите выйти?

                    <span className="styleBtn">
                        <button className="btnOK"
                            type="submit"
                            onClick={ex
                            }
                        >Да</button>
                        <button className="btnNO" onClick={btnCancel}>Отмена</button></span>
                </div>
            </div>
        </>
    )
}