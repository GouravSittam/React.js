import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    // Fetch the data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };


  

  const handlePostSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setData([data, ...data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setData(data.filter((item) => item.id !== id));
        } else {
          throw new Error("Failed to delete the post");
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleUpdate = (id) => {
    const updatedPost = { title: "Updated Title", body: "Updated Body" };
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.map((item) => (item.id === id ? data : item)));
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    
    <div>
      <marquee>
        {"10/23/2024"}
        <h1>
          <mark>Hello Vivek</mark>
        </h1>
      </marquee>
      <div>
        
        <h1>
          <mark>Data is ⬇️</mark>
        </h1>
        {error && <p>Error: {error.message}</p>}
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <button onClick={() => handleUpdate(item.id)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <h2>Add New Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              value={newPost.body}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default App;
