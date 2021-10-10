import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <header>
     
             
          <Link to="/">Go To Home</Link>
          

        
        <Link to="/product-list">Go To Product List</Link>
      </header>
    </div>
  );
}

export default NavBar;
