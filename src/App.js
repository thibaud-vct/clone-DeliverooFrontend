import "./App.css";
import logo from "./assets/img/logo-deliveroo.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./Content";
import Restaurant from "./Restaurant";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([
        { picking: [], total: { subTotal: 0, delivery: "2,50", sum: 2.5 } },
    ]);

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

    const handleClick = (meal) => {
        console.log(Number(meal.price));
        const newCart = [...cart];
        const meals = newCart[0].picking.find((elem) => elem.id === meal.id);
        const total = newCart[0].total;
        if (!meals) {
            newCart[0].picking.push(meal);
            total.subTotal += Number(meal.price);
            total.sum += Number(meal.price);
        } else {
            meals.quantity += meal.quantity;
            total.subTotal += Number(meal.price);
            total.sum += Number(meal.price);
        }
        setCart(newCart);
    };

    return isLoading ? (
        <span>En cours de chargement...</span>
    ) : (
        <div className="App">
            <Restaurant data={data.restaurant} logo={logo} />
            <Content
                data={data.categories}
                cart={cart}
                handleClick={handleClick}
            />
        </div>
    );
}

export default App;
