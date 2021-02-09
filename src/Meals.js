const Meals = ({ title, description, price, picture, popular }) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <span>{price}</span>
            <span>{popular}</span>
            <img src={picture} alt={description} />
        </div>
    );
};
export default Meals;
