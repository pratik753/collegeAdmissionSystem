import "./overall.css";
import { Container, Row, Col } from "react-bootstrap";
import MainNavigation from "../nav_footer/MainNavigation";
import { TextareaAutosize } from "@material-ui/core";
import { useState,useEffect } from "react";
import api from '../api/api'
const Emailotp = () => {

  const [temp,setTemp]=useState("");
  const [newTemp,setNewTemp]=useState("");
  const updateBtn=async()=>{
  

    await api.postEmailSms({emailMessage:newTemp});

    setTemp(newTemp);
    setNewTemp('');
}
  useEffect(()=>{
 const getdata=async()=>{

 await api.getEmailSms().then(data=>{
   console.log(data);
   setTemp(data.data.data.emailMessage)
   console.log(data.data.data.emailMessage)
 })
 
  }

  getdata();
  },[])
  return (
    <>
      <div className="otpheading">Email Otp Template URL</div>
      <Container className="tablecont">
        <Row>
          <Col className="text-center">
            <TextareaAutosize
              className="deftextareacss"
              type="textarea"
              value={temp}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <TextareaAutosize
              className="textareacss"
              type="textarea"
              placeholder="Your Email Otp message"
              value={newTemp}
              onChange={(e)=>setNewTemp(e.target.value)}
            />
          </Col>
        </Row>
        <Col className="text-center">
          <button className="buttonnext" onClick={updateBtn}>Update</button>
        </Col>
      </Container>
    </>
  );
};
export default Emailotp;
