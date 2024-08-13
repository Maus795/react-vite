interface ErrorMasegesProps {
    error: string
}
export function ErrorMaseges({ error }: ErrorMasegesProps) {


    return (<p className="ErrorMassage">{error}</p>)
}