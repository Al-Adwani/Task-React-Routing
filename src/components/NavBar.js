import React from "react";
import { Link } from "react-router-dom";
import  Logo  from "./Logo";
function NavBar() {
  return (
    <div>
      <header>
      
        <Link to="/"><Logo/></Link>
        <Link to="/product-list">Go To Product List</Link>
        
      </header>
    </div>
  );
}

export default NavBar;
