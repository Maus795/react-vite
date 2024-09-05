import { createContext, useState } from "react"
interface IAuthContext {
    transition: boolean
    exit: boolean
    ok: () => void
    ex: () => void
    btnCancel: () => void
    btnEntEx: () => void
}

export const ContextAuth = createContext<IAuthContext>({
    transition: false,
    ok: () => { },
    ex: () => { },
    exit: false,
    btnCancel: () => { },
    btnEntEx: () => { }
})
export const AuthState = ({ children }: { children: React.ReactNode }) => {
    const [transition, setTransition] = useState(false)
    const [exit, setExit] = useState(false)

    const ok = () => setTransition(true)
    const ex = () => setTransition(false)
    const btnCancel = () => setExit(false)
    const btnEntEx = () => setExit(true)

    return (<ContextAuth.Provider value={{ transition, ok, ex, btnCancel, exit, btnEntEx }}>
        {children}
    </ContextAuth.Provider>)
}
