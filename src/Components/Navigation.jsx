import React from 'react'
import { NavLink} from "react-router-dom";

const Navigation = () => {
  
  return (
    <div className="navigation">
      <NavLink to="/" exact activeClassName="nav-active">Home</NavLink>
      <NavLink to="/About" exact activeClassName="nav-active">About</NavLink>
      <NavLink to="/About/3" exact activeClassName="nav-active">Post</NavLink>
      <NavLink to="/Categories" exact activeClassName="nav-active">Categories</NavLink>
      <NavLink to="/ProductsData" exact activeClassName="nav-active">ProductsData</NavLink>
    </div>
  )
}

export default Navigation;
