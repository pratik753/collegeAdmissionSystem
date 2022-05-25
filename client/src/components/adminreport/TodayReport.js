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
const TodayReport = () => {
  const [branch, branchvalue] = useState([]);
  useEffect(async () => {
    const data = await axios.get("http://localhost:4000/college/todbranch");
    console.log(data.data.data);
    branchvalue(data.data.data);
  }, []);
  if (branch.length == 0) {
    return (
      <>
        <MainNavigation />
        <div className="loadingspinnerdiv">
          <LoadingSpinner />
          <div className="loadingtext">Loading the Chart...</div>
        </div>
      </>
    );
  }
  return (
    <>
      <MainNavigation />
      <div className="overcontainer">
        <div className="formheading">Today's Report</div>
        <Container>
          <div>
            <Pie
              data={{
                labels: [
                  "B.TECH",
                  "B.CA",
                  "M.CA",
                  "BBA",
                  "MBA",
                  "M.Sc.",
                  "B.Sc.",
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
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(32, 190, 204, 0.2)",
                      "rgba(26, 95, 200, 0.2)",
                      "rgba(210, 206, 86, 0.2)",
                      "rgba(75, 148, 192, 0.2)",
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
export default TodayReport;
