import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CgGoogleTasks } from "react-icons/cg";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    // {
    //   href: "/",
    //   label: "Dasboard",
    // },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <nav>
      <Flex justifyContent="space-between" alignItems="center" paddingY={5}>
        <NavLink to="/">
          <CgGoogleTasks size={32} />
        </NavLink>
        <Box as="ul" display="flex" gap={5}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
