import { useState } from 'react';
import './index.css';
import logo from '@/assets/logo.png';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="logo" className="logo" />
        <p className="title">
          ICE 3.0
        </p>
      </header>
      <div className="body">
        <button type="button" onClick={() => setCount((e) => e + 1)}>
          🪂 Click me : {count}
        </button>

        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICE Docs
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
