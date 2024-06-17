// import Banner from "./Banner"
import Banner from "./Banner"
import ListImg from "./ListImg"
import "../scss/HomePage.scss"

const HomePage = () => {
    return (

        <div>
            <Banner />
            <ListImg />
            <h2 className="thisIsHomePage">This is Home page</h2>
        </div>


    )
}

export default HomePage