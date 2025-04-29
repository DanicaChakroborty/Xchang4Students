import { Link } from 'react-router-dom';
import './App.css'; // or a separate Home.css if you want

function Home() {
  return (
    <div className="App">
      <h1>Welcome to Exchange for Students!</h1>
      <div>
        <Link to="/buyershub">
          <button>Go to Buyer's Hub</button>
        </Link>
        <Link to="/sellershub" style={{ marginLeft: '10px' }}>
          <button>Go to Seller's Hub</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
