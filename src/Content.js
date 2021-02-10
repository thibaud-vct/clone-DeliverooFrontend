import Meals from "./Meals";
import Cart from "./Cart";

const Content = ({ data, cart, handleClick }) => {
    return (
        <div style={{ display: "flex" }}>
            <div className="menu">
                {data.map((category, i) => {
                    return (
                        category.meals.length > 0 && (
                            <div key={i}>
                                <h2>{category.name}</h2>
                                <Meals
                                    key={i}
                                    data={category.meals}
                                    handleClick={handleClick}
                                />
                            </div>
                        )
                    );
                })}
            </div>
            <Cart cart={cart} handleClick={handleClick} />
        </div>
    );
};
export default Content;
