import { useContext } from "react"
import { useCategory } from "../category/axCategory"
import { CategoryPage } from "../category/category"
import { Header } from "../components/menu/header"
import { ContextAuth } from "../Context"
import { Authorization } from "./authorization"

export function Purchases() {
  const { transition } = useContext(ContextAuth)
  const { categorys } = useCategory()

  return (
    <><Header />

      {transition ? <div className="StartCat">
        {categorys.map((item, index) => (
          <CategoryPage cat={item} key={index} />))}
      </div> : <Authorization />}
    </>

  )
}
