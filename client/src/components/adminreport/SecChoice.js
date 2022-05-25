import React from "react";
import "./overall.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import MainNavigation from "../nav_footer/MainNavigation";
import { Line, defaults, Bar, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import LoadingSpinner from "../assists/LoadingSpinner";

import axios from "axios";
let temp = 1;
var flag = 0;
const SecChoice = () => {
  const [branch, branchvalue] = useState([]);
  useEffect(async () => {
    const data = await axios.get("http://localhost:4000/college/getchoicetwo");
    console.log(data.data.data);
    branchvalue(data.data.data);
    console.log("complete");
  }, []);
  if (branch.length == 0) {
    return (
      <>
        <MainNavigation />
        <div className="loadingspinnerdiv">
          <LoadingSpinner />
          <div className="loadingtext">Loading the Chart...</div>
        </div>
        {/* <div className="overcontainer">
          <Container>
            <h1>Please wait</h1>
          </Container>
        </div> */}
        {/* </MainNavigation> */}
      </>
    );
  }
  return (
    <>
      <MainNavigation />
      <div className="overcontainer">
        <div className="formheading">B.TECH (2nd Choice)</div>
        <Container>
          <div>
            <Pie
              data={{
                labels: [
                  "ETC",
                  "CS & IT",
                  "CSE",
                  "CSE AIML",
                  "CST",
                  "EEE",
                  "ME",
                  "CIVIL",
                  "BIOTECH",
                ],
                datasets: [
                  {
                    label: `REPORT ACCORDING TO BRANCH`,
                    data: branch,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(32, 190, 204, 0.2)",
                      "rgba(26, 95, 200, 0.2)",
                      "rgba(210, 206, 86, 0.2)",
                      "rgba(17, 102, 20, 0.2)",
                      "rgba(75, 92, 45, 0.2)",
                      "rgba(2, 20, 210, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(32, 190, 204, 0.2)",
                      "rgba(26, 95, 200, 0.2)",
                      "rgba(210, 206, 86, 0.2)",
                      "rgba(75, 148, 192, 0.2)",
                      "rgba(75, 92, 45, 0.2)",
                      "rgba(2, 20, 210, 0.2)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default SecChoice;
