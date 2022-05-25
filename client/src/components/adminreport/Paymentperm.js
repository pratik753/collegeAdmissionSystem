import "./overall.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useState } from "react";
import MainNavigation from "../nav_footer/MainNavigation";
import LoadingSpinner from "../assists/LoadingSpinner";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
// import "./Iconnav.css";

const Paymentperm = () => {
  const [permissionhandler, setpermissionhandler] = useState(true);
  const [branch, branchvalue] = useState([]);
  const [showspinner, setshowspinner] = useState(false);
  const [users, setUsers] = useState(branch.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(async () => {
    console.log("hello");
    const data = await axios.get(
      "http://localhost:4000/college/paymentpermission"
    );
    console.log(data.data.data);
    branchvalue(data.data.data);
    setUsers(data.data.data);
  }, []);
  if (branch.length == 0) {
    return (
      <>
        <MainNavigation />
        <div className="loadingspinnerdiv">
          <LoadingSpinner />
          <div className="loadingtext">Loading the Table...</div>
        </div>
      </>
    );
  }
  console.log(branch);
  console.log(branch[0]);

  const permissionbtn = <button className="paybutton">Allow</button>;

  const disallowpermission = (
    <button className="btnred paybutton">DisAllow</button>
  );
  async function f1(i) {
    console.log(i);
    console.log(document.getElementById(i).innerHTML);
    let e = document.getElementById(i).innerHTML;
    let email = { email: e };
    console.log(document.getElementById(`${i}i`).innerHTML);

    const response = await axios.post(
      "http://localhost:4000/college/payment",
      email
    );
    if (!response.ok) {
      console.log("hiii...");
      setshowspinner(true);
    }
    if (document.getElementById(`${i}i`).innerHTML == "ALLOW") {
      document.getElementById(`${i}i`).innerHTML = "DISALLOW";
      document.getElementById(`${i}i`).style.background = "rgb(238, 108, 108)";
    } else {
      document.getElementById(`${i}i`).innerHTML = "ALLOW";
      document.getElementById(`${i}i`).style.background = "#84e19f";
    }
    setshowspinner(false);
  }

  const tableobj = {
    heading: ["Name", "Course", "Email", "Permision Button"],
    row1: ["pratik", "CSE-b", "Pratik@gmail.com", permissionbtn],
    row2: ["Pooja", "CSE-b", "Pooja@gmail.com", permissionbtn],
    row3: ["Akash", "CSE-b", "Akash@gmail.com", permissionbtn],
  };

  // const tabledata =
  console.log(branch);
  // let i = 1;

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = branch
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((branch, index) => {
      return (
        <tr key={index}>
          {/* <td>{i++}</td> */}
          <td>{branch.name}</td>
          <td>{branch.course}</td>
          <td id={index}>{branch.email}</td>
          {branch.payment == 0 && (
            <td onClick={() => f1(index)}>
              <button className="paybutton" id={`${index}i`}>
                ALLOW
              </button>
            </td>
          )}
          {branch.payment == 1 && (
            <td onClick={() => f1(index)}>
              <button className="btnred paybutton" id={`${index}i`}>
                DISALLOW
              </button>
            </td>
          )}
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <MainNavigation />
      <div className="overcontainer">
        <div className="formheading">Payment Permision</div>
        {showspinner && <LoadingSpinner />}
        <div className="tablecont">
          <Table
            striped
            bordered
            hover
            size="sm"
            responsive="lg"
            className="text-center"
          >
            <thead className="thead-dark">
              <tr>
                {/* <th>S.No.</th> */}
                {tableobj.heading.map((index) => (
                  <th key={index}>{index}</th>
                ))}
              </tr>
            </thead>
            {/* <tbody>{branch.map(tabledata)}</tbody> */}
            <tbody>{displayUsers}</tbody>
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
};

export default Paymentperm;

{
  /* <tr>
                <td>1</td>
                {branch.map((_id, email, name, course) => (
                  <th key={_id}>{name}</th>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {tableobj.row2.map((index) => (
                  <th key={index}>{index}</th>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {tableobj.row3.map((index) => (
                  <th key={index}>{index}</th>
                ))}
              </tr> */
}
