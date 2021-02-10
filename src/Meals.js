const Meals = ({ data, handleClick, handleSum }) => {
    const replacePoint = (str) => {
        let newStr = "" + str;
        return newStr.replace(".", ",");
    };
    return (
        <div className="meals">
            {data.map((meal) => {
                const {
                    id,
                    title,
                    description,
                    price,
                    popular,
                    picture,
                } = meal;
                return (
                    <div
                        key={id}
                        onClick={() => {
                            handleClick({
                                id: `${id}`,
                                title: `${title}`,
                                price: `${price}`,
                                quantity: 1,
                            });
                        }}
                    >
                        <div>
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <span>{replacePoint(price)}</span>
                            <span>{popular}</span>
                        </div>
                        {picture && <img src={picture} alt={description} />}
                    </div>
                );
            })}
        </div>
    );
};
export default Meals;
