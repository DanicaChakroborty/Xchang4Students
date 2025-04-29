/*
* This is where the local storage part is - there's comments above the sections that address it
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BuyersHub from './BuyersHub';
import SellersHub from './SellersHub';
import Post from './post';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  // Loads items from localStorage when app starts
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Saves items to localStorage every time they change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyershub" element={<BuyersHub items={items} />} />
          <Route path="/sellershub" element={<SellersHub items={items} />} />
          <Route path="/post" element={<Post addItem={addItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
