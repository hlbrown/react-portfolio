import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
  
  return (
    <div className="home-container home-text text-center">
    <div className="title-header text-center">
      <h1 className="mt-5">Hannah Nagle</h1>
    </div>
    <div className="title-page mt-10">
        <h1 className="web-developer">Web Developer</h1>
        <Link className="navbar-brand enter-btn" to="/about">Enter</Link>
    </div>
    </div>
  );
};


export default Home;