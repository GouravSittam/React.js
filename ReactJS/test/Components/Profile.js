import React from 'react';
import Bio from './Bio';  // Adjust path if Bio.js is in the same directory as Profile.js

const Profile = (props) => {
  // Destructure props to extract name, bio, and age
  const { name, age, bio } = props;

  return (
    <div>
      <h1>Profile</h1>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <Bio bio={bio} />
    </div>
  );
};

export default Profile;
