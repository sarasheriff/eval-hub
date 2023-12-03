import React from "react";
import { Card, Col, Tag } from "antd";
import { Line, Bar } from "react-chartjs-2";
import passive from "../../images/passive.png";
import promoted from "../../images/promoted.png";
import fair from "../../images/fair.png";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip
);
const Dashboard = () => {
  const data = {
    labels: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        labels: "Label",
        data: [100, 90, 150, 200, 300, 250, 300],
        background: "#8186E4",
        borderColor: "#8186E4",
        pointBorderColor: "#8186E4",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 700,
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: true,
    },
  };
  const barData = {
    labels: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Label",
        data: [100, 90, 150, 200, 90, 120, 224],
        backgroundColor: "#9C69C6",
      },
    ],
  };
  return (
    <>
      <Col span={12} style={{ paddingRight: "8px", marginBottom: "20px" }}>
        <Card
          // style={{ backgroundColor: "#4E4E52", color: "white" }}
          bordered={false}
        >
          <div style={{ padding: "20px" }}>
            <p
              style={{
                color: "#4E4E52",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Real-time Feedback Events Over Time
            </p>
            <Line data={data} options={options}></Line>
          </div>
        </Card>
      </Col>
      <Col span={12} style={{ paddingRight: "8px", marginBottom: "20px" }}>
        <Card
          // style={{ backgroundColor: "#4E4E52", color: "white" }}
          bordered={false}
        >
          <p
            style={{
              color: "#4E4E52",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            {" "}
            performance appraisal cycle Completion
          </p>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: "200px",
                background: " #E2C004",
                margin:"0 20px",
                background:
                  "linear-gradient(to bottom, #E2C004 15%, #F09F33 100%)",
                color: "white",
              }}
              bordered={false}
            >
              <span
                style={{
                  border: "1px solid #ddddddbd",
                  fontWeight: "bold",
                  padding: "3px 16px",
                  borderRadius: "33px",
                  background: "#dddddd66",
                }}
              >
                Done
              </span>
              <div style={{ padding: "20px" }}>
                <h1>80%</h1>
              </div>
            </Card>
            <Card
              style={{
                width: "200px",
                background: "#8D1EC3",
                margin:"0 20px",
                background:
                  "linear-gradient(to bottom, #8D1EC3 15%, #1904e5 100%)",
                color: "white",
              }}
              bordered={false}
            >
              <span
                style={{
                  border: "1px solid #ddddddbd",
                  fontWeight: "bold",
                  padding: "3px 16px",
                  borderRadius: "33px",
                  background: "#dddddd66",
                }}
              >
                Ongoing
              </span>
              <div style={{ padding: "20px" }}>
                {/* <Tag color="#ddd">Ongoing</Tag>{" "} */}
                <h1>20%</h1>
              </div>
            </Card>
          </div>
        </Card>
      </Col>
      <Col span={12} style={{ paddingRight: "8px", marginBottom: "20px" }}>
        <Card
          // style={{ backgroundColor: "#4E4E52", color: "white" }}
          bordered={false}
        >
          <div style={{ padding: "20px" }}>
            <p
              style={{
                color: "#4E4E52",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Evaluation Scores Results
            </p>
            <Bar data={barData} options={barOptions} />
          </div>
        </Card>
      </Col>
      <Col span={12} style={{ paddingRight: "8px", marginBottom: "20px" }}>
        <Card
          // style={{ backgroundColor: "#4E4E52", color: "white" }}
          bordered={false}
        >
          <p
            style={{
              color: "#4E4E52",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            360 Degree Feedback Survay
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                minWidth: "130px",
                background: "#F5F5F5",
                color: "#4E4E52",
                marginRight: "15px"
              }}
              bordered={false}
            >
              <span>Adequate</span>
              <div>
                <img width={90} src={fair} />
              </div>
              <div>
                <h3 style={{ fontSize: "25px", fontWeight: "bold", textAlign:"center" }}>2</h3>
              </div>
            </Card>
            <Card
              style={{
                minWidth: "150px",
                background: "#F5F5F5",
                color: "#4E4E52",
                marginRight: "15px", 
                transform:"scale(1.1)",
                boxShadow:"rgb(100 100 111 / 10%) 1px 3px 29px 0px"
              }}
              bordered={false}
            >
              <span>Promoted</span>
              <div>
                <img width={90} src={promoted} />
              </div>
              <div>
                <h3 style={{ fontSize: "25px", fontWeight: "bold", textAlign:"center" }}>6</h3>
              </div>
            </Card>
            <Card
              style={{
                minWidth: "130px",
                background: "#F5F5F5",
                color: "#4E4E52",
                // margin: "15px"
              }}
              bordered={false}
            >
              <span>Passive</span>
              <div>
                <img width={90} src={passive} />
              </div>
              <div>
                <h3 style={{ fontSize: "25px", fontWeight: "bold", textAlign:"center" }}>2</h3>
              </div>
            </Card>
          </div>
        </Card>
      </Col>
      {/* <Col span={6} style={{ paddingRight: "8px", marginBottom: "20px" }}>
      </Col> */}
    </>
  );
};

export default Dashboard;
