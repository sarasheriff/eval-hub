import React from "react";
import { Breadcrumb, Col, Row, Layout, Divider, Avatar, Menu } from "antd";
import logo from "../../images/logo-3.PNG.jpg";
import userImg from "../../images/4952209_39546.jpg";
import {DashboardOutlined, VideoCameraOutlined,UploadOutlined } from "@ant-design/icons";
import "../../App.css"
const { Header, Content, Sider } = Layout;

/* [
                {
                  href: "",
                  title: <HomeOutlined />,
                },
                {
                  href: "",
                  title: (
                    <>
                      <UserOutlined />
                      <span>My Profile</span>
                    </>
                  ),
                },
                {
                  title: "Feedback",
                },
              ]*/
function PageLayout({ children }) {
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    // color: "#fff",
    backgroundColor: "#fff",
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
        <img src={logo} width="155px" />
      </Header>
      <Layout hasSider className="proj-layout">
        <Sider style={siderStyle}>
          <div>
            <Avatar
              className="avatar-image bg-light-gray"
              size={100}
              src={userImg}
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
                  color: " #a4a2a2",
                  fontSize: "13px",
                }}
              >
                HR Manager
              </span>
            </div>
            <Divider style={{borderBlockStart:"3px solid rgba(5, 5, 5, 0.06)"}} />
          </div>
          <div>
          <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
          </div>
        </Sider>
        <Content
          style={{
            padding: "0 50px",
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
