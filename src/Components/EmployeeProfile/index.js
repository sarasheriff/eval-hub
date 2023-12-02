import React, {useState, useEffect} from "react";
import { Card, Col, Avatar } from "antd";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import userImg from "../../images/4952209_39546.jpg";
import "./EmployeeProfile.css";
import EmployeeCard from "./EmployeeCard";
import { getEmployeesToEvaluate } from '../../api';

const EmployeeProfile = () => { 
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    getEmployeesToEvaluateFromApi();
  }, []);

  const getEmployeesToEvaluateFromApi = async () => {
    try {
      const responseData = await getEmployeesToEvaluate();
      const modifiedData = modifyEmployeeData(responseData);
      setEmployeeData(modifiedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const modifyEmployeeData = (data) => {
    // Modify the eval_done property of the first colleague in the colleagues array
    if (data && data.colleagues) {
      if (data.colleagues.length > 0) {
        data.colleagues[0].eval_done = "100";
      }
      if (data.colleagues.length > 1) {
        data.colleagues[1].eval_done = "50";
      }
    }

    return data;
  };

  return (
  <>
    <Col span={24} style={{ marginBottom: "20px" }}>
      <Card>
        <div style={{ display: "flex" }}>
          <Avatar
            className="avatar-image bg-light-gray"
            size={70}
            src={userImg}
          />
          <div style={{ margin: "0 20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <h3 style={{ marginBottom: "0", marginTop: "0" }}>
                {employeeData.employeeName}
              </h3>
              <i style={{ fontSize: "12px", color: "#a4a2a2" }}>
                UI/UX Designer
              </i>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <PhoneFilled className="emp-profile-icons" />
              <span>+2099999</span>
            </div>
            <div>
              <MailFilled className="emp-profile-icons" />
              <span>emp@gmail.com</span>
            </div>
          </div>
        </div>
      </Card>
    </Col>
    <Col span={6} style={{ paddingRight: "8px", marginBottom: "20px" }}>
      <Card
        style={{ backgroundColor: "#4E4E52", color: "white" }}
        bordered={false}
      >
        <spa>Due Task</spa>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>2</div>
      </Card>
    </Col>
    <Col
      span={6}
      style={{ paddingLeft: "8px", paddingRight: "8px", marginBottom: "20px" }}
    >
      <Card
        style={{ backgroundColor: "#5493E4", color: "white" }}
        bordered={false}
      >
        <spa>Progress Task</spa>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>4</div>
      </Card>
    </Col>
    <Col
      span={6}
      style={{ paddingLeft: "8px", paddingRight: "8px", marginBottom: "20px" }}
    >
      <Card
        style={{ backgroundColor: "#9ACE62 ", color: "white" }}
        bordered={false}
      >
        <spa>Completed Task</spa>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>2</div>
      </Card>
    </Col>
    <Col
      span={6}
      style={{ paddingLeft: "8px", paddingRight: "8px", marginBottom: "20px" }}
    >
      <Card
        style={{ backgroundColor: "#aacad8 ", color: "white" }}
        bordered={false}
      >
        <spa>Report</spa>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}> ?! </div>
      </Card>
    </Col>

    <Col span={24} style={{ marginBottom: "20px" }}>
      <h4 style={{ color: "#4E4E52", fontSize: "20px" }}>
        Start evaluate your team 
      </h4>
    </Col>

    <EmployeeCard title={'Mentees'} data={employeeData} />
    <EmployeeCard title={'Colleagues'} data={employeeData} />
    <EmployeeCard title={'Mentors'} data={employeeData} />
  </>
)};
export default EmployeeProfile;
