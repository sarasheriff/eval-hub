import React from "react";
import { Row, Layout, Avatar, Menu, Tooltip } from "antd";
import logo from "../../images/logo-3.PNG.jpg";
import userImg from "../../images/4952209_39546.jpg";
import {
  DashboardOutlined,
  ApartmentOutlined,
  UploadOutlined,
  BellFilled,
} from "@ant-design/icons";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function PageLayout({ children }) {
  const navigate = useNavigate();
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    backgroundColor: "rgb(255 255 255 / 47%)",
  };

  return (
    <Layout>
      <Header
        style={{
          background: "white",
          boxShadow: "0 -6px 10px 5px rgba(0,0,0,0.5)",
          position: "sticky",
          zIndex: 999,
          top: "-10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} width="155px" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <BellFilled
              style={{
                color: "#38507F",
                fontSize: "24px",
                margin: "0px 13px",
                padding: "12px",
                border: "1px solid #E8EDEE",
                borderRadius: "50%",
                background: "#dddddd2e",
              }}
            />
          <Tooltip placement="rightBottom" title={'My Profile'}>
            <Avatar
              className="avatar-image bg-light-gray"
              size={50}
              src={userImg}
              style={{cursor:"pointer"}}
              onClick={() => navigate("/eval-hub/my-profile")}
            />
            </Tooltip>
          </div>
        </div>
      </Header>
      <Layout hasSider className="proj-layout">
        <Sider style={siderStyle}>
          {/* <div>
            <Avatar
              className="avatar-image bg-light-gray"
              size={100}
              src={logo}
            />
            <div style={{ lineHeight: 1.5 }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#4E4E52",
                  fontSize: "20px",
                }}
              >
                Sara Sherif
              </span>
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  color: "#a4a2a2",
                  fontSize: "13px",
                }}
              >
                HR Manager
              </span>
            </div>
            <Divider style={{borderBlockStart:"3px solid rgba(5, 5, 5, 0.06)"}} />
          </div> */}
          <div>
            <Menu
              theme="light"
              style={{ background: "transparent", paddingTop: "30px" }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <DashboardOutlined />,
                  label: (
                    <span>
                      Dashboard
                      <Link to={"/eval-hub/dashboard"} />
                    </span>
                  ),
                },
                {
                  key: "2",
                  icon: <ApartmentOutlined />,
                  label: (
                    <span>
                      Organization
                      <Link to={"/eval-hub/organization"} />
                    </span>
                  ),
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </div>
        </Sider>
        <Content
          style={{
            padding: "30px 50px",
          }}
        >
          <Row>{children}</Row>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default PageLayout;
