"use client";

import React, { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import "@/Styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link href="/" className="navbarLogo">
        <img src="/images/nitaiLogo.png" alt="" />
        <div>
          <p id="logoText1">Under</p>
          <p id="logoText2">Nitai Innovation</p>
          <p id="logoText3">Private Limited</p>
        </div>
      </Link>

      <div className="navbarItems">
        <Link href="/" className="navItem">
          Home
        </Link>
        <Menu>
          <MenuButton className="navItem">Courses</MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/cources/cyber-security">Cyber Security</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cources/software-development">
                Software Development
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cources/software-testing">Software Testing</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link href="/about-us" className="navItem">
          About Us
        </Link>
        <Link href="/contact-us" className="navItem">
          Contact Us
        </Link>
      </div>

      <div className="menuIcon" onClick={toggleMenu} colorScheme="orange">
        {menuOpen ? "X" : "☰"}
      </div>
      <div className={`menuNavbarItems ${menuOpen ? "showMenu" : ""}`}>
        <Link href="/" className="navItem">
          Home
        </Link>
        <Menu>
          <MenuButton className="navItem">Courses</MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/cources/cyber-security">Cyber Security</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cources/software-development">
                Software Development
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cources/software-testing">Software Testing</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link href="/about-us" className="navItem">
          About Us
        </Link>
        <Link href="/contact-us" className="navItem">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
