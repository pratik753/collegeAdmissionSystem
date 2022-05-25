import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ReportValue from "./Reportvalue";
import { Route } from "react-router";
import AssessmentIcon from "@material-ui/icons/Assessment";
import BarChartIcon from "@material-ui/icons/BarChart";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PieChartIcon from "@material-ui/icons/PieChart";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

import "./Admin.css";

const Adminslider = (props) => {
  const histroy = useHistory();
  const ReportBranchhandler = () => {
    histroy.push("/admin/ReportBranch");
  };
  const TodayReporthandler = () => {
    histroy.push("/admin/TodayReport");
  };
  const Status_of_Applicanthandler = () => {
    histroy.push("/admin/Status_of_Applicant");
  };
  const paymenthandler = () => {
    histroy.push("/admin/paymentpermision");
  };
  const choice1 = () => {
    console.log("Hii");
    histroy.push("/admin/choice1");
  };
  const choice2 = () => {
    histroy.push("/admin/choice2");
  };
  const choice3 = () => {
    histroy.push("/admin/choice3");
  };
  const BranchReporthandler = () => {
    histroy.push("/admin/BranchReport");
  };
  const StudentReporthandler = () => {
    histroy.push("/admin/StudentReport");
  };

  const otphandler = () => {
    histroy.push("/admin/otpgen");
  };
  const comdiv = {
    transition: "all .15s",
    /* padding: 0 20px; */
    marginLeft: "16rem",
    marginTop: "2rem",
  };
  const comdivchange = {
    transition: "all .15s",
    /* padding: 0 20px; */
    marginLeft: "2rem",
    marginTop: "2rem",
  };
  // console.log(props.cssprop);
  // const togglehandler = () => {
  //   console.log("Hii");
  //   if (localStorage.getItem("check") == "2") {
  //     console.log("1");
  //     props.cssprop(comdivchange);
  //     // localStorage.setItem("margincss", comdivchange);
  //     // localStorage.setItem("check", "1");
  //   } else {
  //     props.cssprop(comdiv);
  //     // localStorage.setItem("margincss", comdiv);
  //     // localStorage.setItem("check", "2");
  //     console.log("2");
  //   }
  // };
  const styleForPaper = {
    color: "white",
  };
  const styletext = {
    color: "white",
  };
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          // Add your code  sdht herehiss
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem onClick={StudentReporthandler}>
            <NavIcon>
              <AssignmentIndIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>Student REPORT</NavText>
          </NavItem>
          <NavItem onClick={BranchReporthandler}>
            <NavIcon>
              <AssessmentIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>BRANCH REPORT</NavText>
          </NavItem>
          <NavItem onClick={TodayReporthandler}>
            <NavIcon>
              <BarChartIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>TODAY'S REPORT</NavText>
          </NavItem>
          <NavItem onClick={Status_of_Applicanthandler}>
            <NavIcon>
              <PersonIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>Status of Applicant</NavText>
          </NavItem>
          <NavItem onClick={paymenthandler}>
            <NavIcon>
              <AccountBalanceIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>Payment</NavText>
          </NavItem>

          <NavItem eventKey="charts">
            <NavIcon>
              <PieChartIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>B.Tech Choices</NavText>
            <NavItem onClick={choice1}>
              <NavText style={styletext}>Choice 1</NavText>
            </NavItem>
            <NavItem onClick={choice2}>
              <NavText style={styletext}>Choice 2</NavText>
            </NavItem>
            <NavItem onClick={choice3}>
              <NavText style={styletext}>Choice 3</NavText>
            </NavItem>
          </NavItem>

          <NavItem onClick={otphandler}>
            <NavIcon>
              <EmailIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>Otp</NavText>
          </NavItem>

          {/* <NavItem onClick={choice1}>
            <NavIcon>
              <AccountCircleIcon />
            </NavIcon>
            <NavText to="/admin/overall">CHOICE 1</NavText>
          </NavItem>
          <NavItem onClick={choice2}>
            <NavIcon>
              <AssessmentIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>CHOICE 2</NavText>
          </NavItem>
          <NavItem onClick={choice3}>
            <NavIcon>
              <AssessmentIcon style={styleForPaper} />
            </NavIcon>
            <NavText style={styletext}>CHOICE 3</NavText>
          </NavItem>
         
          */}
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <AccountCircleIcon />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem>
              <NavText>
                <Link to="/admin/overall">Line Chartsss</Link>
              </NavText>
            </NavItem>
            {/* <Nav><Na 
            <NavItem>
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem> 
          */}
        </SideNav.Nav>
      </SideNav>
    </>
  );
};
export default Adminslider;
