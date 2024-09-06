import React from 'react';
import Profile from '.components/Profile';  // Ensure this path matches the folder name exactly

const App = () => {
  const user = {
    name: 'Rahul',
    age: 40,
    bio: 'I am a Software Developer.',
  };

  return (
    <div>
      <h1>Main Component</h1>
      <Profile name={user.name} age={user.age} bio={user.bio} />
    </div>
  );
};

export default App;
