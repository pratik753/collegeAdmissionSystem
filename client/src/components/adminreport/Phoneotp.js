import "./overall.css";
import { Container, Row, Col } from "react-bootstrap";
import MainNavigation from "../nav_footer/MainNavigation";
import { TextareaAutosize } from "@material-ui/core";
import { useEffect,useState } from "react";
import api from '../api/api'
const Phoneotp = () => {

  const [temp,setTemp]=useState("");
  const [newTemp,setNewTemp]=useState("");
  const updateBtn=async()=>{
  

    await api.postTextSms({otpMessage:newTemp});

    setTemp(newTemp);
    setNewTemp('');
}
  useEffect(()=>{
 const getdata=async()=>{

 await api.getTextSms().then(data=>{
   console.log(data);
   setTemp(data.data.data.otpMessage)
   console.log(data.data.data.otpMessage)
 })
 
  }

  getdata();
  },[])


 
  return (
    <>
      <div className="otpheading">Phone Otp Template URL</div>
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
              placeholder="Your Phone Otp message Template"
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
export default Phoneotp;
