import { Link } from "react-router-dom"
import "../scss/Header.scss"
const Header = () => {
    return (
        <>
            <div>
                <ul className="ulHeader">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/news"}>News</Link>
                    </li>

                    <li>
                        <Link to={"/quizz"}>Quizz</Link>
                    </li>
                    <li>
                        <Link to={"/contract"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Header