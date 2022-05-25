import "./overall.css";
import { Container, Row, Col } from "react-bootstrap";
import MainNavigation from "../nav_footer/MainNavigation";
import Phoneotp from "./Phoneotp";
import Emailotp from "./Emailotp";
import { useState } from "react";
const Otpgen = () => {
  const [showotp, setshowotp] = useState(1);
  const phoneotphandler = () => {
    setshowotp(1);
  };
  const emailotphandler = () => {
    setshowotp(2);
  };
  return (
    <>
      <MainNavigation />
      <div className="overcontainer">
        <div className="formheading">OTP Message</div>
        <Container className="tablecont">
          <Row>
            <Col className="text-center">
              <button className="filterbutton" onClick={phoneotphandler}>
                Phone Otp
              </button>
            </Col>
            <Col className="text-center">
              <button className="filterbutton" onClick={emailotphandler}>
                Email Otp
              </button>
            </Col>
          </Row>
          {showotp == 1 && <Phoneotp />}
          {showotp == 2 && <Emailotp />}
        </Container>
      </div>
    </>
  );
};
export default Otpgen;
