import './ProductList.css';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'iPhone 15', price: '20.000.000đ', image: '/images/iphone.jpg' },
    { id: 2, name: 'Macbook M3', price: '30.000.000đ', image: '/images/macbook.jpg' },
    { id: 3, name: 'iPad Pro', price: '15.000.000đ', image: '/images/ipad.jpg' },
    { id: 4, name: 'Apple Watch', price: '10.000.000đ', image: '/images/watch.jpg' },
];

const ProductList = () => {
    return (
        <div className="product-grid">
            {products.map(p => (
                <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
        </div>
    );
};

export default ProductList;