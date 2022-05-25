import "./overall.css";
import { Container, Row, Col, Table } from "react-bootstrap";

import { useState } from "react";
import MainNavigation from "../nav_footer/MainNavigation";
import LoadingSpinner from "../assists/LoadingSpinner";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect } from "react";
// import "./Iconnav.css";
import React from "react";
// import { makeStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/styles";
import api from "../api/api";
import MarksheetPdf from "./MarksheetPdf";
import SearchIcon from "@material-ui/icons/Search";
import ReactPaginate from "react-paginate";

const StudentReport = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: "grey",
      padding: "2px",
      zIndex: "100",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalId, setModalId] = React.useState();
  const [pdfData, setPdfData] = useState();
  const [load, setLoad] = useState(false);

  const handleOpen = (id) => {
    setModalId(id);

    setOpen(true);
  };

  const handleClose = () => {
    setPdfData();
    setLoad(false);
    setOpen(false);
  };

  let arr = new Array(["mobile"]);
  const [arrharding, setarrharding] = useState([
    "Name",
    "Course",
    "Email",
    "Permision ",
    "MarkSheet",
  ]);
  const StudentDetailsbtn = (
    <button className="paybutton">Student Details</button>
  );
  const MarksheetDetailsbtn = (props) => (
    <button
      className="paybutton"
      id={props.id}
      onClick={() => handleOpen(props.id)}
    >
      Student Marksheet
    </button>
  );

  const handleMarksheet = async (num) => {
    setLoad(true);
    if (num == 1) {
      const res = await api.getTen(modalId);
      if (res.data.data.ten_marksheet.data)
        setPdfData(res.data.data.ten_marksheet.data);
      else console.log("empty");
    } else if (num == 2) {
      const res = await api.getTwelve(modalId);
      console.log(res.data.data.twelve_marksheet.data);
      if (res.data.data.twelve_marksheet.data)
        setPdfData(res.data.data.twelve_marksheet.data);
      else console.log("empty");
    } else if (num == 3) {
      const res = await api.getOther(modalId);
      if (res.data.data.other_marksheet.data)
        setPdfData(res.data.data.other_marksheet.data);
      else console.log("empty");
    }

    setLoad(false);
  };

  const Marksheet10 = (
    <button className="paybutton" onClick={() => handleMarksheet(1)}>
      10th Marksheet
    </button>
  );
  const Marksheet12 = (
    <button className="paybutton" onClick={() => handleMarksheet(2)}>
      12th Marksheet
    </button>
  );
  const Marksheetother = (
    <button className="paybutton" onClick={() => handleMarksheet(3)}>
      Other Marksheet
    </button>
  );
  const tableobj = {
    heading: ["Name", "Course", "Email", "Permision ", "MarkSheet"],
    row1: [
      "pratik",
      "CSE",
      "Pratik@gmail.com",
      StudentDetailsbtn,
      MarksheetDetailsbtn,
    ],
    row2: [
      "Pooja",
      "CSE",
      "Pooja@gmail.com",
      StudentDetailsbtn,
      MarksheetDetailsbtn,
    ],
    row3: [
      "Akash",
      "CSE",
      "Akash@gmail.com",
      StudentDetailsbtn,
      MarksheetDetailsbtn,
    ],
  };
  // const tableheading
  const [custom, setcustom] = useState(false);
  const [branch, branchvalue] = useState([]);
  const [newbranch, newbranchvalue] = useState([]);
  // const [heading, changeheading] = useState([]);
  const [users, setUsers] = useState(branch.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);

  const customfilterhandler = async () => {
    setcustom(true);
  };
  const defaultfilterhandler = async () => {
    const data = await axios.get("http://localhost:4000/college/normalfilter");
    newbranchvalue(data.data.data);

    data.data.data.forEach(function (v) {
      delete v._id;
    });
    branchvalue(data.data.data);
    setUsers(data.data.data);
    console.log(data.data.data);

    setcustom(false);
  };
  let temparry = new Array([]);
  async function filterbutton() {
    let name = document.getElementById("name");
    if (name.checked == true) {
      arr.push("name");
    }

    let email = document.getElementById("email");
    if (email.checked == true) {
      arr.push("email");
    }
    let fname = document.getElementById("fname");
    if (fname.checked == true) {
      arr.push("parents_details.father_name");
    }

    let adhar = document.getElementById("anum");
    if (adhar.checked == true) {
      arr.push("applicant_details.aadhar_no");
    }
    let course = document.getElementById("course");
    if (course.checked == true) {
      arr.push("course");
    }
    // let phone = document.getElementById("phone");
    // if (phone.checked == true) {
    //   arr.push("mobile");
    // }
    let jee = document.getElementById("jee");
    if (jee.checked == true) {
      arr.push("academic_details.type_of_exam");
    }
    let ojee = document.getElementById("ojee");
    if (ojee.checked == true) {
      arr.push("academic_details.type_of_exam");
    }
    let status = document.getElementById("status");
    if (status.checked == true) {
      arr.push("status");
    }
    temparry = arr;
    setarrharding(temparry);
    console.log("heading" + arr);

    const data = await axios.post(
      "http://localhost:4000/college/complexfilter",
      arr
    );
    console.log(data);
    console.log("sa", data.data.heading);
    arr.length = 0;
    // let brancharr = [];
    let temp1 = [...data.data.data];
    data.data.data.map((el) => {
      data.data.heading.map((e) => {
        if (e) {
          if (e.includes(".")) {
            const temp = e.split(".");
            if (el[temp[0]]) {
              temp1.forEach((e) => (e[temp[1]] = el[temp[0]][temp[1]]));
              temp1.forEach(function (v) {
                delete v[temp[0]];
              });
            }
          } else {
            console.log(el[e]);
          }
        }
      });
    });
    branchvalue(data.data.data);
    setarrharding(data.data.heading);
  }

  //console.log(branch);
  if (branch.length == 0) {
    return (
      <>
        <MainNavigation />
        <div className="overcontainer">
          <div className="formheading">
            Student Report
            <div className="searchbox">
              <input
                className="inputstyleform"
                type="text"
                placeholder="Seach..."
              />
              <span>
                <SearchIcon />
              </span>
            </div>
          </div>
          <Container className="tablecont">
            <Row>
              <Col className="text-center">
                <button onClick={defaultfilterhandler} className="filterbutton">
                  Default Filter
                </button>
              </Col>
              <Col className="text-center">
                <button onClick={customfilterhandler} className="filterbutton">
                  Custom Filter
                </button>
              </Col>
            </Row>
          </Container>
          {custom && (
            <Container className="tablecont">
              <Row>
                <Col className="stureportcol">
                  <div className="studreportfield">Name</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="name"
                    />
                  </div>
                </Col>

                <Col className="stureportcol">
                  <div className="studreportfield">Email</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="email"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Father's Name</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="fname"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Aadhar Number</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="anum"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="stureportcol">
                  <div className="studreportfield">Course</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="course"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Phone Number</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="phone"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Jee Mains</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="jee"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">OJee</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="ojee"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Status </div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="status"
                    />
                  </div>
                </Col>
              </Row>
              <button onClick={filterbutton} className="buttonsavenext">
                Submit
              </button>
            </Container>
          )}

          <div className="tablecont">
            {/* <>
              <div className="loadingspinnerdiv">
                <LoadingSpinner />
                <div className="loadingtext">Loading the Table...</div>
              </div>
            </> */}
          </div>
        </div>
      </>
    );
  } else {
    var arr2 = new Array();
    for (let i = 1; i < arrharding.length; i++) {
      arr2.push(arrharding[i]);
    }
    console.log("data", branch);
    let count = 1;
    var newArray = branch.filter(function (el) {
      console.log("S", branch);
      return (el._id = `${count++}`);
    });

    const usersPerPage = 3;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUsers = newArray
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((item) => (
        <tr key={item.id}>
          {Object.keys(branch[0]).map((key) => {
            return <td>{item[key]}</td>;
          })}
          <td>{<MarksheetDetailsbtn id={item["mobile"]} />}</td>
        </tr>
      ));

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    // const tableheading = (
    //   <tr>
    //     <th>#</th>
    //     {arr2.map((head) => (
    //       <th>{head}</th>
    //     ))}
    //   </tr>
    // );
    // let i = 1;
    // const permissionbtn = <button className="paybutton">Allow</button>;
    // const tablebody = (branch, index) => {
    //   return (
    //     <tr key={branch.id}>
    //       <td>{i++}</td>
    //       <td>{branch.name}</td>
    //       <td>{branch.course}</td>
    //       <td>{branch.email}</td>
    //       <td>{permissionbtn}</td>
    //       <td>{permissionbtn}</td>
    //     </tr>
    //   );
    // };
    const checktheheade = (head) => {
      if (head == "_id") {
        return "S.No.";
      } else {
        return head.charAt(0).toUpperCase() + head.slice(1);
      }
    };
    const checkthebody = () => {
      console.log(branch);
    };

    // {newArray.

    return (
      <>
        <MainNavigation />
        <div className="overcontainer">
          <div className="formheading">Student Report</div>
          <div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">MarkSheet</h2>
                  <p id="transition-modal-description">
                    {Marksheet10}
                    {Marksheet12}
                    {Marksheetother}
                  </p>
                  <div>
                    <MarksheetPdf data={pdfData} load={load} />
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
          <Container className="tablecont">
            <Row>
              <Col className="text-center">
                <button onClick={defaultfilterhandler} className="filterbutton">
                  Default Filter
                </button>
              </Col>
              <Col className="text-center">
                <button onClick={customfilterhandler} className="filterbutton">
                  Custom Filter
                </button>
              </Col>
            </Row>
          </Container>
          {custom && (
            <Container className="tablecont">
              <Row>
                <Col className="stureportcol">
                  <div className="studreportfield">Name</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="name"
                    />
                  </div>
                </Col>

                <Col className="stureportcol">
                  <div className="studreportfield">Email</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="email"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Father's Name</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="fname"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Aadhar Number</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="anum"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="stureportcol">
                  <div className="studreportfield">Course</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="course"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Phone Number</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="phone"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Jee Mains</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="jee"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">OJee</div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="ojee"
                    />
                  </div>
                </Col>
                <Col className="stureportcol">
                  <div className="studreportfield">Status </div>
                  <div className="studreportfield">
                    <input
                      className="inputstyleform"
                      type="checkbox"
                      id="status"
                    />
                  </div>
                </Col>
              </Row>
              <button onClick={filterbutton} className="buttonsavenext">
                Submit
              </button>
            </Container>
          )}

          <div className="tablecont">
            <Table
              striped
              bordered
              hover
              size="sm"
              responsive="xl"
              className="text-center overflowuser"
            >
              <>
                <thead className="thead-dark" key={"header"}>
                  {Object.keys(branch[0]).map((key) => (
                    <th>{checktheheade(key)}</th>
                  ))}
                  <th>Marksheet</th>
                </thead>
              </>
              <tbody>
                {console.log(newArray)}
                {displayUsers}
                {/* {newArray.map((item) => (
                  <tr key={item.id}>
                    {Object.keys(branch[0]).map((key) => {
                      return <td>{item[key]}</td>;
                    })}
                    <td>{<MarksheetDetailsbtn id={item["mobile"]} />}</td>
                  </tr>
                ))} */}
              </tbody>
            </Table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </>
    );
  }
};
export default StudentReport;
