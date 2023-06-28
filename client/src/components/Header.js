import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg='light' variant='light' className='navbar'>
        <div className='container'>
          <div>
            <h2 className=' mt-2' style={{ color: "#6c63ff" }}>
              <NavLink href='/' className='nav_link'>
                ABDISHKUR GESEY
              </NavLink>
            </h2>
          </div>
          <Nav className='mt2'>
            <NavLink to='/' className='nav_link'>
              About
            </NavLink>
            <NavLink to='/projects' className='nav_link'>
              Projects
            </NavLink>
            <NavLink to='/contact' className='nav_link'>
              Contact
            </NavLink>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
