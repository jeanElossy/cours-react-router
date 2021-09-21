import React from 'react';

import History from './History';
import Navigation from "./Navigation";

const Home = () => {
 
  return (
    <div>
      <Navigation />
      <h1>Bienvenue sur mon site </h1>
      <History />

    </div>
  );
};

export default Home;