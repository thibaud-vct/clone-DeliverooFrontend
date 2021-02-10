import Picking from "./Picking";
const Cart = ({ cart, handleClick }) => {
    const numberInStr = (num) => {
        if (typeof num !== "number") {
            const ifStr = Number(num);
            const newNum = ifStr.toFixed(2);
            let str = "" + newNum;
            return str.replace(".", ",");
        } else {
            const newNum = num.toFixed(2);
            let str = "" + newNum;
            return str.replace(".", ",");
        }
    };
    const { picking, total } = cart[0];
    return (
        <div>
            <button>Valider le panier</button>
            {cart[0].total.subTotal > 0 && (
                <>
                    {picking.map((selection) => {
                        return (
                            <Picking
                                key={selection.id}
                                data={selection}
                                handleClick={handleClick}
                                numberInStr={numberInStr}
                            />
                        );
                    })}
                    <hr />
                    <div>
                        <div>
                            <span>Sous-total</span>
                            <span>{numberInStr(total.subTotal)}</span>
                        </div>
                        <div>
                            <span>Frais de livraison</span>
                            <span>{total.delivery}</span>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4>Total</h4>
                        <h4>{numberInStr(total.sum)}</h4>
                    </div>
                </>
            )}
        </div>
    );
};
export default Cart;
