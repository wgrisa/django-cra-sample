import './App.css'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import logo from './logo.svg'

export const App = () => {
  const [data, setData] = useState({ leads: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/lead");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {JSON.stringify(data, null, 2)}
      </header>
    </div>
  );
};
