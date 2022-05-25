import { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Recaptcha from "react-recaptcha";
import API from './Api'
import { useDispatch } from "react-redux";
import { authActions } from '../store/AllStatus';
const Login = (props) => {
   const dispatch = useDispatch();
  const [emailotp, setotpemail] = useState(false);
  const [phoneotp, setotpphone] = useState(false);
  const [loginbox, setloginbox] = useState(false);
  const [otpshow, setotpshow] = useState(false);
  const [registerotp, registerotphandle] = useState(0);
  const [login,setLogin]=useState(false);
  const [butt, buttonhandle] = useState(false);
  const phonenum = useRef();
  const history = useHistory();
  var i=120;
  var v;
  const API = axios.create({ baseURL: 'http://localhost:4000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      console.log("regbox"+localStorage.getItem('profile'));
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`;
    }
    return req;
  });
  const otpbuttonshow = () => {
    if (phonenum.current.value.length == 10) {
      setotpshow(true);
      console.log("10..");
    } else {
      setotpshow(false);
    }
    console.log("hii");
    console.log(phonenum.current.value.length);
  };
  const emailotphandler = () => {
    setotpemail(true);
  };
  const phoneotphandler = async () => {
    const mobile = document.getElementById("mobile").value;
    const data = { mobile: mobile };
    console.log(data);
    const response = await API.post(
      "http://localhost:4000/college/numcheck",
      data
    );
    console.log(response.data.token);
    localStorage.setItem('mobile',mobile);
    localStorage.setItem('profile', JSON.stringify(response.data.token));
    if (response.data.data != 1) {
      setTimeout(setTimer, 1000);
      registerotphandle(response.data.data);
    } else {
      setotpphone(false);
      return;
    }
    setotpshow(false);
    setotpphone(true);
  };
  function setTimer() {
    i--;
    console.log(i);
    if(i==-1||i==-2)
    {
      console.log("hello");
      return;
    }
   if(i==0)
   {
    setotpshow(true); 
    setotpphone(false);
    registerotphandle(0);
    i=120;
    return;
   }
   v=setTimeout(setTimer, 1000);
  }
  const regboxhandler = () => {
    setloginbox(false);
    props.onlogbox(loginbox);
  };
  const otpcheck = async () => {
    const phone = document.getElementById("phoneotp").value;
    console.log(
      phone +
        "  " +
        registerotp +
        "  type of phone " +
        typeof phone +
        "  typeof registration" +
        typeof registerotp
    );
    const x = registerotp.toString();
    console.log(x);
    if (x === phone) {
     
      
      setTimer();
      i=-1;
      buttonhandle(true);
      return;
    } else {
    
    }
  };
  // -------------
  const recaptchaloader = () => {
    console.log("recaptchaloader");
  };
  const verifyCallback = (response) => {
    if (response) {
      setIsVerify(true);
    }
  };
  const [isVerify, setIsVerify] = useState(false);
  async function buttonhand() {
    const mobile = document.getElementById("mobile").value;
    const data = { mobile: mobile };
    const response = await API.post(
      "http://localhost:4000/college/loginupdate",
      data
    );
    props.onlogin(true);
    
    try
    {
      console.log(data);  
    const newvalue=await API.post("http://localhost:4000/college/log",data);
    console.log(newvalue);
    if(newvalue!==undefined)
    {
    console.log(newvalue);
    console.log(newvalue.data.data[0].role+"    "+newvalue.data.data[0].status);
    if(newvalue.data.data[0].role==="0"&&newvalue.data.data[0].status==="2")
    {
      dispatch(authActions.isLogin(2));
      dispatch(authActions.setmobile(newvalue.data.data[0].mobile));
      localStorage.setItem("mymobile",newvalue.data.data[0].mobile);
      localStorage.setItem("statusvalue","2");
      history.push("/profile");     
    }
    if(newvalue.data.data[0].role==="0"&&newvalue.data.data[0].status==="3")
    {
      dispatch(authActions.isLogin(3));
      localStorage.setItem("statusvalue","3");
      history.push("/paymenthome");     
    }
    if(newvalue.data.data[0].role==="1")
    {
      console.log("hello from admin");
      dispatch(authActions.isLogin(4));
      localStorage.setItem("statusvalue","4");
      history.push("/admin");     
    }
    }
   }
   catch(err)
   {
     console.log(err);
   }
    if (isVerify) {
   
    } else {
   
    }
  }
  console.log("Otp show button is "+otpshow);
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <h2 className="title">Login Yourself</h2>
        </div>
        <div className="card-bodydiv">
          {/* <form> */}

          <div className="form-row">
            <div className="name">Phone</div>
            <div className="value">
              <div className="input-group-desc">
                <input
                  className="inputstyle"
                  type="email"
                  name="email"
                  placeholder="Phone"
                  id="mobile"
                  ref={phonenum}
                  onChange={otpbuttonshow}
                />
                {otpshow && (
                  <button className="otpbutton" onClick={phoneotphandler}>
                    OTP
                  </button>
                )}
              </div>
              <div className="input-group-desc">
                {phoneotp && (
                  <input
                    className="inputstyle"
                    type="email"
                    name="otpemail"
                    placeholder="Otp"
                    id="phoneotp"
                    onBlur={otpcheck}
                    style={{ marginTop: ".5rem" }}
                  />
                )}
                {/* <button className="otpbutton">OTP</button> */}
              </div>
            </div>
          </div>
          <Recaptcha
            sitekey="6LfFqvsbAAAAAFAZygb6K5q7TLxjd7n9QE1VNHdh"
            render="explicit"
            onloadCallback={recaptchaloader}
            verifyCallback={verifyCallback}
          />
 {butt && isVerify&&(
            <button className="registerbutton" onClick={buttonhand}>
              Login
            </button>
          )}
          {(!butt || !isVerify) &&(
            <button className="registerbutton dis" disabled>
              Login
            </button>
          )}
          {/* {butt && (
            <button className="registerbutton" onClick={buttonhand}>
              Login
            </button>
          )}
          {!butt && (
            <button className="registerbutton dis" disabled>
              Login
            </button>
          )} */}
          {/* </form> */}
          <div onClick={regboxhandler} className="regtext">
            NEW REGISTRATION
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
