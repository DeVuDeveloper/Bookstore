import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import '../style/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      navigation: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      navigation: 'Categories',
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="tittle">
          <h1>Bookstore CMS</h1>
        </div>
        <ul className="navbar-links">

          {links.map((link) => (
            <li key={link.id} className="navbar-link">

              <NavLink
                to={link.path}
                activeclassname="active"
                exact="true"
              >
                {link.navigation}
              </NavLink>

            </li>
          ))}
        </ul>

        <div className="oval">

          <BsPerson className="user" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
