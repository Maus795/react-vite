
import { ErrorMaseges } from "../components/ErrorMasges";
import { Loader } from "../components/Loader";
import { useCategory } from "./axCategory";
import "./category.css"
import { Link } from "react-router-dom";





interface CategoryProps {
    cat: string;


}
export function CategoryPage({ cat }: CategoryProps) {

    const { loadingCat, errorCat } = useCategory()



    return (
        <div className="StartCat">
            {loadingCat && <Loader />}
            {errorCat && <ErrorMaseges error="Произошла ошибка" />}
            <div className="PosCat">
                <h3 className="title">Категория</h3>
                <Link to="/purchases/product" state={{ cat }}
                    className="HeadCat"

                >{cat}</Link>

            </div >
        </div>

    )
}
