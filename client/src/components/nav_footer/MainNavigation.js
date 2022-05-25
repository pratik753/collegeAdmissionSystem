import classes from "./MainNavigation.module.css";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../assists/image/logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import tatlog from "../assists/image/tat_logo.png";

const MainNavigation = () => {
  const history = useHistory();
  const logouthander = () => {
    history.push("/ddd");
    localStorage.clear();
  };

  const options = ["Profile", "Payment", "Logout"];
  const styleForPaper = {
    width: "5rem",
    height: "5rem",
    color: "white",
    padding: "1rem",
    margin: "2rem",
  };
  const stylebtn = {
    boxShadow: " 0 0 0 .25rem rgba(13, 110, 253, 0)",
  };
  const stylemenu = {
    background: "#91b8c7",
  };

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img className={classes.img} src={tatlog} />
        </div>
      </Link>
      <nav className={classes.nav}>
        <div className={classes.divcont}>
          <div className={classes.navtext}>
            Helpdesk: 9097186189
            <br />
            Monday – Saturday (except public holidays) 9:00 AM to 5:00 PM
            <br />
            Email:admissions@tat.edu.in
          </div>

          <div>
            <AccountCircleIcon
              style={styleForPaper}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </AccountCircleIcon>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <LinkContainer to="/profile">
                <MenuItem>Profile</MenuItem>
              </LinkContainer>
              <LinkContainer to="/payment">
                <MenuItem>Payment</MenuItem>
              </LinkContainer>
              <LinkContainer to="/" onClick={logouthander}>
                <MenuItem>Logout</MenuItem>
              </LinkContainer>
            </Menu>
          </div>

          {/* <AccountCircleIcon style={styleForPaper} /> */}
          {/* <Dropdown className="dropmargin">
            <Dropdown.Toggle
              variant="none"
              className={classes.btnsecondary}
              style={stylebtn}
            >
              {/* Banking 
              <AccountCircleIcon style={styleForPaper} />
            </Dropdown.Toggle>

            <Dropdown.Menu style={stylemenu}>
              <LinkContainer to="/profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/payment">
                <Dropdown.Item>Payment</Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Dropdown.Item>
                  <Link to="/profile">Logout</Link>
                </Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        */}
        </div>

        {/* <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};
export default MainNavigation;
