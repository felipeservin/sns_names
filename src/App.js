import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // Using relative URL as per your request
      const response = await fetch(`/${name}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="App">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name here..."
      />
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
