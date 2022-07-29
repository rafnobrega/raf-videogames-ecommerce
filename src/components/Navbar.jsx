import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-search-container">
            <input className="navbar-input"></input>
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </div>
        </div>

        <div className="navbar-center">
          <h1 className="navbar-logo">RAF GAMES</h1>
        </div>

        <div className="navbar-right">
          <div className="navbar-menu-item">REGISTER</div>
          <div className="navbar-menu-item">SIGN IN</div>
          <div className="navbar-menu-item">
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
