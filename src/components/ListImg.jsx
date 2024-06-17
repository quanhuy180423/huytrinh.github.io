import menu1 from "../assets/Img/images/menu-01.jpg"
import menu2 from "../assets/Img/images/menu-02.jpg"
import menu3 from "../assets/Img/images/menu-03.jpg"
import menu4 from "../assets/Img/images/menu-04.jpg"
import menu5 from "../assets/Img/images/menu-05.jpg"
import menu6 from "../assets/Img/images/menu-06.jpg"
import menu7 from "../assets/Img/images/menu-07.jpg"
import menu8 from "../assets/Img/images/menu-08.jpg"

import '../scss/ListImg.scss'

const ListImg = () => {
    return (
        <div>
            <ul className="ulListImg">
                <li>
                    <img src={menu1} />
                </li>
                <li>
                    <img src={menu2} />
                </li>
                <li>
                    <img src={menu3} />
                </li>
                <li>
                    <img src={menu4} />
                </li>
                <li>
                    <img src={menu5} />
                </li>
                <li>
                    <img src={menu6} />
                </li>
                <li>
                    <img src={menu7} />
                </li>
                <li>
                    <img src={menu8} />
                </li>
            </ul>
        </div>
    )
}

export default ListImg