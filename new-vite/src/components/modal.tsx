import React from "react"

interface ModalProps {
    children: React.ReactNode
    title: string
}
export function Modal({ children, title }: ModalProps) {

    return (
        <>

            <div className="ModalFon">
                <div className="ModalForm">
                    <h2 className="nameModal">{title}</h2>

                    {children}

                </div ></div>
        </>
    )
}