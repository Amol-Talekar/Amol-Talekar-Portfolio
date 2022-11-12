import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { SidebarWrapper } from "./style.js";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavHashLink className="hashlinkclass" smooth to="/#home">
        Home
      </NavHashLink>
      <NavHashLink className="hashlinkclass" smooth to="/#skills">
        Skills
      </NavHashLink>
      <NavHashLink className="hashlinkclass" smooth to="/#projects">
        Projects
      </NavHashLink>
      <NavHashLink className="hashlinkclass" smooth to="/#contact">
        Contact
      </NavHashLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
