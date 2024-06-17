import { useEffect, useState } from "react";
import { NewCategory } from "../content/NewCategory";
import "../scss/NewPage.scss"
import { Link } from "react-router-dom";

const NewsPage = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const newList = NewCategory();
        setCategory(newList);
    }, []);

    return (
        <div>
            <h1 className="title">New Category</h1>
            <div className="Newspage">
                {category.map((item) => (
                    <div key={item.id} className="NewPage">
                        <img src={item.images} />
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <Link to={item.images}>{item.title}</Link>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewsPage