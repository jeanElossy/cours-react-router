import React from 'react';
import { Link, Route } from 'react-router-dom';
import History from './History';
import Navigation from "./Navigation";

const Category = ({ match }) => {
  
  console.log(match)
  return( 
    <div> 
      <Navigation />
      <History />
      <div>
        <Link to={`${match.url}/shoes`}>Shoes</Link>
      </div>
      <Route path={`${match.path}/:name`} render= {({match}) =>(<div> <h1> {match.params.name} </h1></div>)}/>
    </div>
  )
}

export default Category;