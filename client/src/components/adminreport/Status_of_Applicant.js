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
const Status_of_Applicant = () => {
  const [branch, branchvalue] = useState([]);
  useEffect(async () => {
    const data = await axios.get("http://localhost:4000/college/getstatus");
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
        <div className="formheading">
          REPORT ACCORDING TO STATUS OF APPLICANT
        </div>
        <Container>
          <div>
            <Pie
              data={{
                labels: ["Register/Login", "Enqury", "Payment"],
                datasets: [
                  {
                    label: `REPORT ACCORDING TO STATUS OF APPLICANT`,
                    data: branch,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
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
export default Status_of_Applicant;
