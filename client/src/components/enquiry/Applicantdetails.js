import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api/api";
let temp = 1;

const Applicantdetails = (props) => {
  const [result, setresult] = useState([]);
  const [nochoice, setNochoice] = useState(true);
  const btechbr = [
    "ETC",
    "CS & IT",
    "CSE",
    "CSE AIML",
    "CST",
    "EEE",
    "ME",
    "CIVIL",
    "BIOTECH",
  ];
  const mtechbr = ["ETC", "CSE", "CST", "EEE", "CIVIL", "BIOTECH"];
  const bcabr = ["No Branch"];
  const BScbr = ["Math", "Physics", "Chemistry", "English"];
  const MScbr = ["Math", "Physics", "Chemistry", "English", "Zology"];
  const notify = (toasttext) => {
    toast.warning("Wow so easy!" + toasttext);
  };
  const notifywarning = (toasttext) => {
    toast.warning("Wow so easy!" + toasttext);
  };
  const notifyerror = (toasttext) => {
    toast.error(toasttext);
  };
  const selectcoursehandler = (e) => {
    coursehandlar(e);
    const temp = e.target.value;
    if (temp == "B.Tech") {
      setresult(btechbr);
      setNochoice(true);
    } else if (temp == "M.Tech") {
      setresult(mtechbr);
      setNochoice(true);
    } else if (temp == "BCA") {
      localStorage.setItem("choice1save", bcabr);
      localStorage.setItem("choice2save", bcabr);
      localStorage.setItem("choice3save", bcabr);
      setresult(bcabr);
      setchoice1(bcabr);
      setchoice2(bcabr);
      setNochoice(false);
    } else if (temp == "MCA") {
      localStorage.setItem("choice1save", bcabr);
      localStorage.setItem("choice2save", bcabr);
      localStorage.setItem("choice3save", bcabr);
      setresult(bcabr);
      setchoice1(bcabr);
      setchoice2(bcabr);
      setNochoice(false);
    } else if (temp == "BBA") {
      localStorage.setItem("choice1save", bcabr);
      localStorage.setItem("choice2save", bcabr);
      localStorage.setItem("choice3save", bcabr);
      setresult(bcabr);
      setchoice1(bcabr);
      setchoice2(bcabr);
      setNochoice(false);
    } else if (temp == "MBA") {
      localStorage.setItem("choice1save", bcabr);
      localStorage.setItem("choice2save", bcabr);
      localStorage.setItem("choice3save", bcabr);
      setresult(bcabr);
      setchoice1(bcabr);
      setchoice2(bcabr);
      setNochoice(false);
    } else if (temp == "B.Sc.") {
      setresult(BScbr);
      setNochoice(true);
    } else if (temp == "M.Sc.") {
      setresult(MScbr);
      setNochoice(true);
    }
  };
  const [choice1, setchoice1] = useState([]);
  const choice1handler = (e) => {
    const temp2 = e.target.value;
    choice1savehandlar(e);
    setchoice1(result.filter((word) => word != temp2));
  };

  const [choice2, setchoice2] = useState([]);
  const choice2handler = (e) => {
    const temp3 = e.target.value;
    choice2savehandlar(e);
    setchoice2(choice1.filter((word) => word != temp3));
    localStorage.setItem(
      "choice3save",
      choice1.filter((word) => word != temp3)[0]
    );
  };
  //// Form Valiaiton
  const [saved, setsaved] = useState(false);
  const [addhartest, setaddhartest] = useState(false);
  const [nametest, setnametest] = useState(false);
  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }
  function spacecontain(_string) {
    return /\s/.test(_string);
  }
  console.log("test" + stringContainsNumber("hii!$%*$%&*1"));

  const edithandler = () => {
    setsaved(true);
  };
  if (temp == 1) {
    setsaved(true);
    localStorage.setItem("gender", "Male");
    temp = 2;
  }
  const textinputhandler = (_string) => {
    if (stringContainsNumber(_string) != false) {
      notifyerror("Don't Write Number");
      setnametest(true);
      return;
    }
    if (spacecontain(_string) != false) {
      notifyerror("Don't Write Space");
      setnametest(true);
      return;
    }
    setnametest(false);
  };

  const nametesthandlar = (e) => {
    textinputhandler(e.target.value);
  };
  const addhartesthandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (!(re.test(e.target.value) && e.target.value.length == 12)) {
      setaddhartest(true);
      notifyerror("Only Number or 12 digit...");
      return;
    }
    setaddhartest(false);
  };
  //// Form Valiaiton

  // //////////////////

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes("@"));
  // };

  // //////////////////

  const [namelog, setnamelog] = useState();
  const namehandler = (e) => {
    localStorage.setItem("name", e.target.value);
    setnamelog(localStorage.getItem("name"));
  };
  let namee = localStorage.getItem("name");

  const [mnamelog, setmnamelog] = useState("");
  const mnamehandler = (e) => {
    localStorage.setItem("mname", e.target.value);
    setmnamelog(localStorage.getItem("mname"));
  };
  let mnamee = localStorage.getItem("mname");

  const [lnamelog, setlnamelog] = useState("");
  const lnamehandler = (e) => {
    localStorage.setItem("lname", e.target.value);
    setlnamelog(localStorage.getItem("lname"));
  };
  let lnamee = localStorage.getItem("lname");

  const [Aadhar, setAadhar] = useState("");
  const Aadharhandler = (e) => {
    localStorage.setItem("Aadhar", e.target.value);
    setAadhar(localStorage.getItem("Aadhar"));
  };
  let aadharr = localStorage.getItem("Aadhar");

  const datehandlar = (e) => {
    localStorage.setItem("datee", e.target.value);
    setAadhar(localStorage.getItem("datee"));
    console.log(e.target.value);
  };
  let datelog = localStorage.getItem("datee");

  const genderhandlar = (e) => {
    localStorage.setItem("gender", e.target.value);
    setAadhar(localStorage.getItem("gender"));
    console.log(e.target.value);
  };
  let genderr = localStorage.getItem("gender");

  const [course1state, setCourse1state] = useState("B.Tech");
  const [coursestate, setCoursestate] = useState("B.Tech");
  let course = localStorage.getItem("course");

  const coursehandlar = (e) => {
    localStorage.setItem("course", e.target.value);
    setAadhar(localStorage.getItem("course"));
    console.log(e.target.value);
    setCoursestate(e.target.value);
  };

  const choice1savehandlar = (e) => {
    localStorage.setItem("choice1save", e.target.value);
    setAadhar(localStorage.getItem("choice1save"));
    console.log(e.target.value);
    setCourse1state(e.target.value);
  };
  let choice1save = localStorage.getItem("choice1save");

  const choice2savehandlar = (e) => {
    localStorage.setItem("choice2save", e.target.value);
    setAadhar(localStorage.getItem("choice2save"));
    console.log(e.target.value);
  };
  let choice2save = localStorage.getItem("choice2save");

  const choice3savehandlar = (e) => {
    localStorage.setItem("choice3save", e.target.value);
    setAadhar(localStorage.getItem("choice3save"));
    console.log(e.target.value);
  };
  let choice3save = localStorage.getItem("choice3save");
  const savehandler = async () => {
    // try {
    //   if (localStorage.getItem("mname").length == 0) {
    //     setmnamelog("N/A");
    //   }
    //   if (localStorage.getItem("lname").length == 0) {
    //     setmnamelog("N/A");
    //   }
    //   if (localStorage.getItem("mname").length == 0) {
    //     setmnamelog("N/A");
    //   }
    // } catch (error) {}
    setsaved(false);

    const applicant_details = {
      mobile: localStorage.getItem("mobile"),
      course: course,
      firstname: namee,
      middlename: mnamee,
      lastname: lnamee,
      gender: genderr,
      aadhar_no: aadharr,
      date_of_birth: datelog,
      choice_first: choice1save,
      choice_second: choice2save,
      choice_third: choice3save,
    };

    const res = await api.appendApplicant(applicant_details);
    console.log(res.data);
  };

  const disabletest = () => {
    // if(n)
    if (nametest == false && addhartest == false) {
      return false;
    }
    return true;
  };
  const [testdata, settestdata] = useState("hii pratik");
  props.bundingingdata(disabletest());

  return (
    <>
      <ToastContainer limit={1} />
      <div className="formheading">Applicant's Details</div>

      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">First Name * : </div>
            {saved && (
              <input
                id="fname"
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={namee}
                onChange={namehandler}
                onBlur={nametesthandlar}
              />
            )}
            {!saved && <div className="labelfieldinput">{namee}</div>}
            {/* {<div className="labelfieldinput">{namee}</div>} */}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Middle Name : </div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={mnamee}
                onChange={mnamehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{mnamee}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Last Name : </div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={lnamee}
                onChange={lnamehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{lnamee}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Aadhar No. * :</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Aadhar No."
                value={aadharr}
                onChange={Aadharhandler}
                onBlur={addhartesthandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{aadharr}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Email Address</div>
            <input
              className="inputstyleform"
              type="email"
              name="first_name"
              placeholder="Email Address"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Phone No.</div>
            <input
              className="inputstyleform"
              type="number"
              name="first_name"
              placeholder="Phone No."
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Course</div>
            {saved && (
              <div className="input-group-desc">
                <select
                  id="examtype"
                  onClick={selectcoursehandler}
                  // value={coursestate}
                >
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>BBA</option>
                  <option>MBA</option>
                  <option>B.Sc.</option>
                  <option>M.Sc.</option>
                </select>
              </div>
            )}
            {!saved && <div className="labelfieldinput">{course}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Gender</div>
            {saved && (
              <div className="input-group-desc">
                <select id="examtype" name="gender" onClick={genderhandlar}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
            {!saved && <div className="labelfieldinput">{genderr}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield"> Date of Birth</div>
            {saved && (
              <input
                className="inputstyleform"
                type="date"
                name="first_name"
                placeholder="Name"
                onChange={datehandlar}
              />
            )}
            {!saved && <div className="labelfieldinput">{datelog}</div>}
          </Col>
        </Row>
        {nochoice && (
          <Row>
            <Col className="fieldcol">
              <div className="labelfield">Choice 1 </div>
              {saved && (
                <select
                  id="examtype"
                  name="enquiry_course"
                  onClick={choice1handler}
                  // value={choice1save}
                >
                  {result.map((el) => (
                    <option value={el}>{`${el}`}</option>
                  ))}
                </select>
              )}
              {!saved && <div className="labelfieldinput">{choice1save}</div>}
            </Col>
            <Col className="fieldcol">
              <div className="labelfield">Choice 2 </div>
              {saved && (
                <select
                  id="examtype"
                  name="enquiry_course"
                  onClick={choice2handler}
                  // value={choice2save}
                >
                  {choice1.map((el) => (
                    <option value={el}>{`${el}`}</option>
                  ))}
                </select>
              )}
              {!saved && <div className="labelfieldinput">{choice2save}</div>}
            </Col>
            <Col className="fieldcol">
              <div className="labelfield">Choice 3 </div>
              {saved && (
                <select
                  id="examtype"
                  name="enquiry_course"
                  onClick={choice3savehandlar}
                  // value={choice3save}
                >
                  {choice2.map((el) => (
                    <option value={el}>{`${el}`}</option>
                  ))}
                </select>
              )}
              {!saved && <div className="labelfieldinput">{choice3save}</div>}
            </Col>
          </Row>
        )}
      </Container>
      <Container>
        <Row>
          <Col>
            {" "}
            {saved && (
              <button
                className="buttonsavenext centbutt"
                disabled={disabletest()}
                // disabled={nametest}
                onClick={savehandler}
              >
                Save{" "}
              </button>
            )}
            {!saved && (
              <button className="buttonsavenext centbutt" onClick={edithandler}>
                Edit{" "}
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Applicantdetails;
