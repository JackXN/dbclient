import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Menu,
  MenuLink,
} from "./NavbarElements";
import {Link} from 'react-scroll'





function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <Nav>
      <Link to="/">
        {/* <Logo src={GrayLogo}></Logo> */}
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <MenuLink ><Link to='home' smooth={true} spy={100} duration={600}>Home</Link></MenuLink>
        <MenuLink><Link to='about' smooth={true} spy={100} duration={600}>About Me</Link></MenuLink>
        <MenuLink><Link to='skills' smooth={true} spy={100} duration={600}>Skills</Link></MenuLink>
        <MenuLink><Link to='projects' smooth={true} spy={100} duration={600}>Projects</Link></MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;