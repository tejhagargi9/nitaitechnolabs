import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import "@/Styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbarLogo">
          <img src="/images/nitaiLogo.png" alt="" />
          <div>
            <p>Under</p>
            <p>Nitai Innovation</p>
            <p>Private Limited</p>
          </div>
        </Link>

        <div className="navbarItems">
          <Link href="/" className="navItem">
            Home
          </Link>
          <Menu>
            <MenuButton className="navItem">Courses v</MenuButton>
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
    </>
  );
};

export default Navbar;
