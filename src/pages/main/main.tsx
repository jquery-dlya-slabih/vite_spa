import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '@constants';
import reactLogo from './assets/react.svg';
import './main.module.scss';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read_the_docs">Click on the Vite and React logos to learn more</p>
      <Link to={PATH.NEWS}>
        <button>news</button>
      </Link>
    </>
  );
};

export default Main;
