import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/svg/logo.svg"
import user from "../assets/svg/user.svg"
import faq from "../assets/svg/faq.svg"
import bibl from "../assets/svg/bibl.svg"

const Navbar = () => {
  return (
    <>
      <nav className=" bg-bgnav flex justify-between align-center items-center h-40 py-8 mx-52">
        <a href="/principal">
          <img className="w-80 " src={logo} alt="EduScience Quest" />
        </a>
        <ul className="flex space-x-4">
          <NavItem to="/user" icon={user} />
          <NavItem to="/ayuda" icon={faq} />
          <NavItem to="/bibliografia" icon={bibl} />
        </ul>
      </nav>
    </>
  );
};

const NavItem = ({ to, icon }) => {
  return (
    <li className="nav-item">
      <NavLink
        exact
        to={to}
        activeClassName="bg-blue-900"
      >
        <img src={icon} alt="icon" className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-main' />
      </NavLink>
    </li>
  );
};

export default Navbar;
