/* Name: Danica, Sydney, Tamara, Nicole
** I pledge my honor that I have abided by the Stevens Honor System
** Exchange for Students Application
** Software Design VI
** Sellers Hub, React code - I used a lot of comments because switching this from 
** HTML to CSS took a few learning curves for me so it helped me to explain the 
** code to myself too
*/

/* 
* Installed React Router with npm install react-router-dom 
* Set up routing in App.js so the code is all imported from the 
* different pages of code I have - it was easier than one big file
* this is one of the 'page' compoenents
*/

import './SellersHub.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SellersHub({ items }) {
    const [searchTerm, setSearchTerm] = useState('');

    /*
    * Here the code filters so that it only shows items where the name includes the searchTerm
    */
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    /* 
    * Everything inside return() will show up on the screen
    */
    return (
        <div>
            <div className="header">
                Seller's Hub
                <Link to="/" className="auth-btn">
                    <button>Home</button>
                </Link>
            </div>

            <div className="page">
                <div className="sidebar">
                    <ul>
                        <li>Profile</li>
                        <li>Past Sales</li>
                        <li>New Sales</li>
                        <li>
                            <Link to="/post" className="auth-btn">
                                Post New Item
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <input
                        type="text"
                        id="sellerSearch"
                        placeholder="Enter your search queries here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="grid" id="sellerItems">
                        {/* If there are matching items, show them */}
                        {filteredItems.length > 0 ? (
                            filteredItems.map(item => (
                                <div key={item.id} className="item">
                                    {item.name} - ${item.price.toFixed(2)}
                                </div>
                            ))
                        ) : (
                            // If no matching items, show "No items found"
                            <p>No items found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exporting so App.js can import this page
export default SellersHub;
