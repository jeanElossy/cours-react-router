import React from 'react';
import { Redirect } from 'react-router';
import History from './History';

const NotFound = () => {

  return (
    <div>
      <h1>ERREUR 404 !</h1>
      <Redirect to={{pathname: '/Categories', state: {from: this.props.location}}} />
      <History />
    </div>
  );
};

export default NotFound;