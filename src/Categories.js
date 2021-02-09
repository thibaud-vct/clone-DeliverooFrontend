import Meals from "./Meals";
const Categories = (categories) => {
    const { name, meals } = categories;
    console.log(categories, name, meals);
    return (
        <div>
            <h3>{name}</h3>
            {meals.map((elem) => {
                console.log(elem);
                return <Meals meal={elem} key={elem.id} />;
            })}
        </div>
    );
};
export default Categories;
