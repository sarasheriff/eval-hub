import React from "react";
import { Card, Col, Tag, Button, Progress } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import evalIcon from "../../images/evalIcon.svg";

export default function EmployeeCard({ title, data }) {
  const navigate = useNavigate();
  const levels = {
    "Level-1": "#C41D7F",
    "Level-2": "#CF1322",
    "Level-3": "#D48806",
    "Level-4": "#f50",
    "Level-5": "#0958D9",
    "Level-6": "#7244BA",
    "Level-7": "#87d068",
  };
  return (
    <>
    {data[title.toLowerCase()]?.length ? <Col span={24} style={{ marginBottom: "20px" }}>
      <Card style={{fontFamily:"Poppins"}}>
        <h4>{title}</h4>

        {data[title.toLowerCase()].map((user, i) => (
          <section
            onClick={() => navigate("/eval-hub/feedback-employees")}
            className="mentees-section emp-data"
          >
            <div>
              <UserOutlined className="emp-profile-icons" />
              <span style={{ paddingRight: "15px" }}>{user.name}</span>
              <Tag bordered={false} color={levels[user?.level]}>
                {user?.level}
              </Tag>
              <br />
              <i
                style={{
                  fontSize: "12px",
                  color: "#a4a2a2",
                  paddingLeft: "42px",
                }}
              >
                {user.job_title} / {user.department} department
              </i>
            </div>
            <div>
              {!data[title.toLowerCase()][i].eval_done ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#dddddd2b",
                    border: "1px solid #ddd",
                    color: "#4E4E52",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "none",
                    borderRadius: "20px",
                  }}
                >
                  <img width={30} src={evalIcon} />
                  Start
                </Button>
              ) : (
                <Progress
                  type="circle"
                  percent={data[title.toLowerCase()][i].eval_done}
                  size={80}
                />
              )}
            </div>
          </section>
        ))}
      </Card>
    </Col> : null}
    </>
  );
}
