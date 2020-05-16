import React, { useState } from "react";

import styled from "styled-components";
import NavbarIcons from "./NavbarIcons";
import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [isOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => setMenuOpen(!isOpen)
    return (
        <NavWrapper>
            <NavbarHeader toggleMenuOpen={toggleMenuOpen}/>
            <NavbarLinks isOpen={isOpen} setMenuOpen={setMenuOpen}/>
            <NavbarIcons />
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export default Navbar;
