/*
import "./App.css";
import Home from "./components/pages/Home";
import AdminReport from "./components/pages/AdminReport";
import { Route, Switch, Redirect } from "react-router-dom";
import Enquiry from "./components/pages/EnquiryForm";
import {useState} from 'react'
import {useHistory} from 'react-router'
function App() {
  const [value,setvalue]=useState(false);
  const history=useHistory();
  function setlogin(a)
  {
    console.log(a);
    setvalue(true);
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home  onlogin={setlogin}  />
           
        </Route>
        <Route path="/admin" exact>
          <AdminReport  />
        </Route>
        {
          <Route path="/enquiry" exact >
        
        {value&&<Enquiry />}
          {!value&& <Redirect to='/'  />}
        </Route> }
       
      </Switch>
    </div>
  );
}

export default App;
*/

import "./App.css";
import Home from "./components/pages/Home";
import AdminReport from "./components/pages/AdminReport";
import { Route, Switch, Redirect } from "react-router-dom";
import Enquiry from "./components/pages/EnquiryForm";
import { useState } from "react";
import { useHistory } from "react-router";
import OverAll from "./components/adminreport/OverAll";
import PaymentHome from "./components/payment/PaymentHome";
import Adminslider from "./components/adminreport/Adminslider";
import Adminpage from "./components/pages/Adminpage";
import TestSlider from "./components/adminreport/TestSlider";
import Report from "./components/adminreport/Report";
import Chartpage from "./components/adminreport/Chartpage";
import Paymentperm from "./components/adminreport/Paymentperm";
import SecChoice from "./components/adminreport/SecChoice";
import ThiChoice from "./components/adminreport/ThiChoice";
import FirstChoice from "./components/adminreport/FirstChoice";
import Status_of_Applicant from "./components/adminreport/Status_of_Applicant";
import ReportBranch from "./components/adminreport/BranchReport";
import TodayReport from "./components/adminreport/TodayReport";
import BranchReport from "./components/adminreport/BranchReport";
import ReportStud from "./components/adminreport/StudentReport";
import StudentReport from "./components/adminreport/StudentReport";
import UserProfile from "./components/profile/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./components/store/AllStatus";
import PaymentAfter from "./components/payment/PaymentAfter";
import Otpgen from "./components/adminreport/Otpgen";
function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("statusvalue") === "0") {
    console.log(localStorage.getItem("profile"));
    dispatch(authActions.isLogin(0));
  } else {
    console.log("hello from localstorage");
    dispatch(authActions.isnotRegister());
  }
  if (localStorage.getItem("statusvalue") === "2") {
    dispatch(authActions.isLogin(2));
  }
  if (localStorage.getItem("statusvalue") === "3") {
    dispatch(authActions.isLogin(3));
  }
  if (localStorage.getItem("statusvalue") === "4") {
    dispatch(authActions.isLogin(4));
  }
  const isAuth = useSelector((state) => state.auth.isRegister);
  const loginval = useSelector((state) => state.auth.isLogin);
  const loginvalue = useSelector((state) => state.auth.loginvalue);
  console.log("For Regsiter " + isAuth);
  console.log("For login " + typeof loginval);
  console.log("For loginvalue " + typeof loginvalue);
  const [value, setvalue] = useState(false);
  const history = useHistory();
  function setlogin(a) {
    console.log(a);
    setvalue(true);
  }
  if (
    isAuth === undefined ||
    loginval === undefined ||
    loginvalue === undefined
  ) {
    return <h1>Please wait</h1>;
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home onlogin={setlogin} />
        </Route>
        <Route path="/enquiry" exact>
          <Enquiry />
        </Route>
        loginval==true&&
        <Route path="/admin" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <OverAll />
        </Route>
        {/* } */}
        {loginvalue !== 4 && (
          <Route path="/admin" exact>
            <div className="sliderdiv">
              <Redirect to="/" />
            </div>
            <OverAll />
          </Route>
        )}
        loginval==true&&
        <Route path="/admin2" exact>
          <TestSlider />
        </Route>
        {/* } */}
        {loginvalue !== 4 && (
          <Route path="/admin2" exact>
            <TestSlider />
          </Route>
        )}
        {(loginvalue == 3 || loginvalue == 2) && loginval == true && (
          <Route path="/paymenthome" exact>
            <PaymentHome />
          </Route>
        )}
        {(loginvalue == 3 || loginvalue == 2) && loginval == true && (
          <Route path="/paymenthome/successful" exact>
            {/* <PaymentHome /> */}
            <PaymentAfter />
          </Route>
        )}
        {loginvalue !== 3 && (
          <Route path="/paymenthome" exact>
            <Redirect to="/" />
          </Route>
        )}
        {loginvalue == 2 && loginval == true && (
          <Route path="/profile" exact>
            <UserProfile />
          </Route>
        )}
        {loginvalue !== 2 && (
          <Route path="/profile" exact>
            <Redirect to="/" />
          </Route>
        )}
        {/* ------------------------------- */}
        <Route path="/admin/overall" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <OverAll />
        </Route>
        <Route path="/admin/choice1" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <FirstChoice />
        </Route>
        <Route path="/admin/choice2" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <SecChoice />
        </Route>
        <Route path="/admin/choice3" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <ThiChoice />
        </Route>
        <Route path="/admin/report" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <Report />
        </Route>
        <Route path="/admin/chart" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <Chartpage />
        </Route>
        <Route path="/admin/TodayReport" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <TodayReport />
        </Route>
        <Route path="/admin/Status_of_Applicant" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <Status_of_Applicant />
        </Route>
        <Route path="/admin/BranchReport" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <BranchReport />
        </Route>
        <Route path="/admin/StudentReport" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <StudentReport />
        </Route>
        <Route path="/admin/paymentpermision" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <Paymentperm />
        </Route>
        <Route path="/admin/otpgen" exact>
          <div className="sliderdiv">
            <Adminslider />
          </div>
          <Otpgen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
