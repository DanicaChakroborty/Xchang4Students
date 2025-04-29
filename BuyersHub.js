/* Name: Danica, Sydney, Tamara, Nicole
** I pledge my honor that I have abided by the Stevens Honor System
** Exchange for Students Application
** Software Design VI
** Buyers Hub, React code - I used a lot of comments because switching this from 
** HTML to CSS took a few learning curves for me so it helped me to explain the 
** code to myself too
*/

/* 
* Installed React Router with npm install react-router-dom 
* Set up routing in App.js so the code is all imported from the 
* different pages of code I have - it was easier than one big file
* this is one of the 'page' compoenents
*/

import './BuyersHub.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function BuyersHub({ items }) {
    // Declaring the state for the search bar
    const [searchTerm, setSearchTerm] = useState('');

    /*
    * Here the code filters so that it only shows items where the name includes the searchTerm
    */
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    /* 
    * Everything inside return() will show up on the scren
    */
    return (
        <div>
            <div className="header">
                Buyer's Hub
                <Link to="/" className="auth-btn">
                    <button>Home</button>
                </Link>
            </div>

            <div className="page">
                <div className="sidebar">
                    <ul>
                        <li>Dorm
                            <ul>
                                <li>Decor</li>
                                <li>Kitchen Essentials</li>
                                <li>Furniture</li>
                            </ul>
                        </li>
                        <li>Athletics
                            <ul>
                                <li>Gear</li>
                                <li>Merchandise</li>
                            </ul>
                        </li>
                        <li>Academics
                            <ul>
                                <li>Textbooks</li>
                                <li>Calculators</li>
                                <li>Computers</li>
                                <li>iPads & Tablets</li>
                                <li>Desktops</li>
                                <li>Electronic Accessories</li>
                            </ul>
                        </li>
                        <li>Clothes</li>
                        <li>Miscellaneous</li>
                    </ul>
                </div>

                <div className="content">
                    <input
                        type="text"
                        id="buyerSearch"
                        placeholder="Enter your search queries here..."
                        /*
                        * The following two lines of code handle the value of the box which comes from searchTerm
                        * then in the next line it handles it so that when you type, it updates searchTerm
                        */
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="grid" id="buyerItems">
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
export default BuyersHub;
