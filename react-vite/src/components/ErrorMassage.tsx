import React from "react";
interface ErrorMassageProps {
    error: string

}
export function ErrorMassage({ error }: ErrorMassageProps) {
    return (<p className='text-center'>{error}
    </p>)
}