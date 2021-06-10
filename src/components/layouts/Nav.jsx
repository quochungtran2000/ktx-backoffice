import React from "react";
import { Link } from 'react-router-dom';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useUser } from '../../context/userContext'
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, logout } = useUser();

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link to={'/'} className="navbar-brand" href="index.html">
        Ktx Backoffice
      </Link> 
      {/* <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
      >
        <i className="fas fa-bars"></i>
      </button> */}
      {/* <!-- Navbar Search--> */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
       
      </form>
      {/* <!-- Navbar--> */}
      <ul className="navbar-nav ml-auto ml-md-0">
        <div className="d-flex align-items-center" onClick={handleClick} >
          <Avatar alt="Cindy Baker" src={user?.img_url} />
          <div style={{marginLeft: '1rem'}} className="text-white">{user?.name}</div>
        </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      </ul>
    </nav>
  );
}

export default Nav;
