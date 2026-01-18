import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="card">
            <img src={image || "https://placehold.co/200"} alt={name} className="card-img" />
            <h3>{name}</h3>
            <p>{price}</p>
            <button className="btn-add">Add to cart</button>
        </div>
    );
};

export default ProductCard;