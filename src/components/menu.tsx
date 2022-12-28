import React, { useEffect } from "react";
import Link from "next/link";

import { navLinks } from "../configs/data";
import { NavLinksProps } from "@/configs/types";
import ToggleTheme from "./ToggleTheme";
import { StyledMenu, StyledSidebar } from "../styles/componentStyles";

interface IMenuProps {
  isHome: boolean;
  variants?: any;
}

const Menu: React.FC<IMenuProps> = ({ variants, isHome }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const openMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

  return (
    <StyledMenu variants={variants} menuOpen={menuOpen}>
      <ul
        onClick={openMenuHandler}
        className={`hamburger-button ${menuOpen ? "active" : ""}`}
      >
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <StyledSidebar
        menuOpen={menuOpen}
        onClick={() => {
          setMenuOpen(false);
        }}
      />
      <div className="menu-nav">
        <ul>
          <ToggleTheme className="toggle-icon" />
          {/* @ts-ignore */}
          {navLinks.home.map(({ name, url }: NavLinksProps) => {
            return (
              <li
                key={name}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledMenu>
  );
};

export default Menu;
