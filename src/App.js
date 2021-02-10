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

    // PICKING
    const handleClick = (meal) => {
        const newCart = [...cart];
        const meals = newCart[0].picking.find((elem) => elem.id === meal.id);
        const total = newCart[0].total;
        if (!meals) {
            // add meal
            newCart[0].picking.push(meal);
            total.subTotal += Number(meal.price);
            total.sum += Number(meal.price);
        } else {
            // sum/sub meal
            meals.quantity += meal.quantity;
            total.subTotal += Number(meal.price);
            total.sum += Number(meal.price);
            // delete meal
            if (meals.quantity === 0) {
                const index = newCart.indexOf(meal);
                newCart[0].picking.splice(index, 1);
            }
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
