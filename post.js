import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellersHub.css'; // keeping your style

function Post({ addItem }) {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('');
    const [shipping, setShipping] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

       
        const newItem = {
            id: Date.now(), 
            name: itemName,
            price: parseFloat(price),
            condition: condition,
            shipping: shipping,
            email: email,
        };

        addItem(newItem); 
        navigate('/buyershub'); 
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
            />

            <input
                type="text"
                name="price"
                placeholder="Item Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <select
                name="condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
            >
                <option value="">Select Condition</option>
                <option value="Used - Good Condition">Used - Good Condition</option>
                <option value="Used - Poor Condition">Used - Poor Condition</option>
                <option value="Used - Okay Condition">Used - Okay Condition</option>
                <option value="New">New</option>
            </select>

            <select
                name="shipping"
                value={shipping}
                onChange={(e) => setShipping(e.target.value)}
                required
            >
                <option value="">Select Shipping Option</option>
                <option value="Local Pickup">Local Pickup</option>
                <option value="Ship In-State">Ship In-State</option>
                <option value="Ship Nationally">Ship Nationally</option>
                <option value="Ship Internationally">Ship Internationally</option>
            </select>

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Post;
