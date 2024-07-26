import React from "react";
interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}
export function Modal({ children, title, onClose }: ModalProps) {
    return (<>
        <div className="ModalFon" onClick={onClose}></div>
        <div className="ModalForm">
            <h2 className="ModalName">{title}</h2>
            {children}
        </div>

    </>)
}