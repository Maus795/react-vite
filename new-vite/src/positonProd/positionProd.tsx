
import { ErrorMaseges } from "../components/ErrorMasges"
import { IProduct } from "../model"
import { usePosProd } from "./axPosotionProd"
import "./positionProd.css"
// import { IProduct } from '../model';

interface prop {
    newProd: IProduct
}

export function PositionProd(props: prop) {
    const { prodErr, } = usePosProd()
    // console.log(props)
    return (<><div className="Window">
        {prodErr && <ErrorMaseges error="Ошибка" />}
        <img src={props.newProd.image} />
        <p>{props.newProd.description}</p>

    </div></>

    )
}