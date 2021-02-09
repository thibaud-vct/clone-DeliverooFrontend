const Restaurant = ({ restaurant, logo }) => {
    const { name, description, picture } = restaurant;
    return (
        <div>
            <div>
                <img src={logo} alt="logo deliveroo"></img>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={picture} alt={name} />
            </div>
        </div>
    );
};
export default Restaurant;
