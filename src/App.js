import "./App.css";
import logo from "./assets/img/logo-deliveroo.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";
import Restaurant from "./Restaurant";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // fonction pour appeler la requete axios
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://clonedeliveroo.herokuapp.com/"
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        // appel de la fonction
        fetchData();
    }, []);

    console.log(data.categories);

    return isLoading ? (
        <span>En cours de chargement...</span>
    ) : (
        <div className="App">
            <Restaurant restaurant={data.restaurant} logo={logo} />
            {data.categories.map((elem, i) => {
                console.log("elem =>", elem.meals.length);
                return (
                    elem.meals.length !== 0 && (
                        <Categories categories={elem} key={i} />
                    )
                );
            })}
        </div>
    );
}

export default App;
