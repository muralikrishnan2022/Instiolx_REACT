import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';

function ProductList({ products }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
