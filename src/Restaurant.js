const Restaurant = ({ data, logo }) => {
    const { name, description, picture } = data;
    return (
        <div>
            <div>
                <img
                    src={logo}
                    alt="logo deliveroo"
                    style={{ height: 40 }}
                ></img>
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <img src={picture} alt={name} style={{ height: 300 }} />
            </div>
        </div>
    );
};
export default Restaurant;
