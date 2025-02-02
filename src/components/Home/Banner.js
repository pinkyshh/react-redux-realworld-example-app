import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Life is short. Smile while you still have teeth :p</p>
      </div>
    </div>
  );
};

export default Banner;
