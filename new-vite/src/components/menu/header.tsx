import { VscAccount, VscSearch } from "react-icons/vsc";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../../Context";
import { ModalExit } from "../ModalExit/ModalExit";

export function Header() {
  // const [exit, setExit] = useState(false)
  const { transition, btnEntEx, exit } = useContext(ContextAuth);
  // console.log(transition)

  return (

    <>
      {transition ? !exit : ('')}
      <header><nav className="styleHeader">
        <Link to="/" className="styleLiHeader">
          <CiHome /> Главаная
        </Link>
        <li className="styleLiHeader">
          <VscSearch />
        </li>
        {!transition ? <Link to="/authorization" className="styleLiHeader">
          Войти
          <VscAccount />
        </Link> : <Link to="/profile" className="styleLiHeader">
          Аккаунт
          <VscAccount />
        </Link>}

      </nav>
        {transition && <button className="EX"
          onClick={btnEntEx}
        >Выход</button>}

      </header> {transition && exit && <ModalExit />}

    </>

  );
}
