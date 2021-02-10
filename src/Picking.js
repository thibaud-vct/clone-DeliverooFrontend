const Picking = ({ data, handleClick, numberInStr }) => {
    const { id, title, price, quantity } = data;
    return (
        <div id={id} style={{ display: "flex" }}>
            {quantity !== 0 && (
                <>
                    <div>
                        <button
                            onClick={() => {
                                handleClick({
                                    id: `${id}`,
                                    title: `${title}`,
                                    price: `${-price}`,
                                    quantity: -1,
                                });
                            }}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => {
                                handleClick({
                                    id: `${id}`,
                                    title: `${title}`,
                                    price: `${price}`,
                                    quantity: 1,
                                });
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <span>{title}</span>
                        <span>{numberInStr(price)}</span>
                    </div>
                </>
            )}
        </div>
    );
};
export default Picking;
