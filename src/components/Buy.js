import React from 'react';
import ProductList from './ProductList';
import { products } from '../data';

function Buy() {
    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}

export default Buy;
