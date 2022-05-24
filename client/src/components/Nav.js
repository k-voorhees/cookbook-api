import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "appetizers", path: "/appetizers" },
      { name: "maincourse", path: "/maincourse" },
      { name: "pasta", path: "/pasta" },
      { name: "salad", path: "/salad" },
      { name: "drinks", path: "/drinks" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div className="header">
      <div className="nav-bar">
        <ul className="nav-list">
          <Link to="/">
            <li className="nav-button">Home</li>
          </Link>
          <div className="dropdown">
            <div className="nav-button dropbtn">
              <Link to="/recipes">Recipes</Link>
              <div className="dropdown-content">
                {navLinks.map((link, i) => (
                  <Link to={link.path} state={{ category: link.name }} key={i}>
                    <div>{link.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/about">
            <li className="nav-button">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
