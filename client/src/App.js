import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CityFixer</h1>
        <p>Local Service Provider Platform</p>
        {loading ? (
          <p>Connecting to server...</p>
        ) : (
          <p>{data?.message}</p>
        )}
      </header>
    </div>
  );
}

export default App;
