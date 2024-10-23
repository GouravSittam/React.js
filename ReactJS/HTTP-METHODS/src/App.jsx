import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <marquee> <h1><mark>Hello Vivek</mark></h1></marquee>
      <div>
        <h1>Data is: </h1>
        {error && <p>Error: {error.message}</p>}
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
              <h2>{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;