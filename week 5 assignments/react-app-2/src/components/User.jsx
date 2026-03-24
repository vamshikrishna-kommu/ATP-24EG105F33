import React from 'react';
import './User.css';

const User = ({ name, email, image }) => {
  return (
    <div className="user-card">
      <div className="user-image-container">
        <img src={image} alt={name} className="user-image" />
      </div>
      <h3 className="user-name">{name}</h3>
      <p className="user-email">{email}</p>
      <button className="user-profile-btn">Profile</button>
    </div>
  );
};

export default User;
