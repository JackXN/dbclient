import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Menu,
  MenuLink,
} from "./NavbarElements";
import Link from 'next/link'





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
      <MenuLink href='home'><Link to='home' >Dashboard</Link></MenuLink>
        <MenuLink href='about'><Link to='about' >Projects</Link></MenuLink>
        <MenuLink><Link to='skills' >Network</Link></MenuLink>
        <MenuLink><Link to='projects'>Music</Link></MenuLink>
        <MenuLink><Link to='projects'>Other</Link></MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;