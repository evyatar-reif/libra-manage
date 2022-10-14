import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/stock">Stock</Link>
        </li>
        <li>
          <Link to="/book">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
