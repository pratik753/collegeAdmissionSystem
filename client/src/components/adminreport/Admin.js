import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "react-pro-sidebar/dist/css/styles.css";
import MainNavigation from "../nav_footer/MainNavigation";
import Adminslider from "./Adminslider";

const Admin = () => {
  return (
    <>
      {/* <MainNavigation /> */}
      <Adminslider />
    </>
  );
};
export default Admin;
