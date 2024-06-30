import React, { useState } from 'react';
import './Sell.css';

function Sell() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        description: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        alert('Product submitted successfully!');
    };

    return (
        <div className="sell-container">
            <h1>Sell a Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required />
                <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} required></textarea>
                <select name="category" value={product.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="fashion">Fashion</option>
                    <option value="others">Others</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Sell;
