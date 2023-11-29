import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import {
  Breadcrumb,
  Col,
  Row,
  Card,
  Divider,
  Layout,
  Table,
  Checkbox,
  Input,
  Tabs,
  Button,
} from "antd";
import logo from "../../images/logo-3.PNG.jpg";
import quote from "../../images/left-quote-svgrepo-com.svg";
const { Header, Content } = Layout;
const { TextArea } = Input;

const onChange = (key) => {
  console.log(key);
};
const columns = [
  {
    title: "KPI",
    dataIndex: "kpi",
    key: "kpi",
    render: (text) => (
      <span style={{ color: "#38507F", fontWeight: "bold" }}>{text}</span>
    ),
  },
  {
    title: "Questions",
    dataIndex: "quetions",
    key: "quetions",
  },
  {
    title: "Covered your reviewes",
    dataIndex: "covered",
    key: "covered",
    render: (elm) => <div style={{ textAlign: "center" }}>{elm}</div>,
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
];
const data = [
  {
    key: "1",
    kpi: "Advanced Productivity",
    quetions: (
      <ul>
        <li>Leading in project planning and getting things done.</li>
        <li>
          Helping improve the way the team works to increase productivity.
        </li>
        <li>
          Solving complex problems and helping choose the right solutions.
        </li>
        <li>Finding and using better tools and techniques for the team.</li>
        <li>Always delivering high-quality work.</li>
      </ul>
    ),
    covered: <Checkbox checked={true}></Checkbox>,
    point: 10,
  },
  {
    key: "2",
    kpi: "Dependability",
    quetions: (
      <ul>
        <li>
          Ability to smoothly adapt to technical and administrative changes.
        </li>
        <li>Ability to provide reliable estimates for tasks.</li>
        <li>
          Efficiently following/ setting best practices beyond defined
          guidelines and yet within practical limits.
        </li>
        <li>
          Ability to perform effectively and efficiently with minimal
          supervision and/or follow-up.
        </li>
        <li>
          Ability and willingness to mentor and support other team members to
          enrich their knowledge and experience.
        </li>
        <li>Ability to provide clear documentation for produced work.</li>
        <li>Responding quickly when others need help or support.</li>
      </ul>
    ),
    covered: <Checkbox checked={false}></Checkbox>,
    point: 20,
  },
  {
    key: "3",
    kpi: "Teamwork",
    quetions: (
      <ul>
        <li>
          Working well with others and helping create a positive team
          environment.
        </li>
        <li>Adding valuable input to team discussions and decisions.</li>
        <li>Always being there to help team members when they need it.</li>
        <li>
          Performing code reviews and providing constructive feedback to other
          team members
        </li>
        <li>Listening to feedback and using it to improve.</li>
        <li>Solving any conflicts in the team in a good way.</li>
      </ul>
    ),
    covered: <Checkbox checked={true}></Checkbox>,
    point: 30,
  },
  {
    key: "4",
    kpi: "Extra Hats",
    quetions: (
      <ul>
        <li>
          Taking on additional roles effectively, such as an epic owner or
          temporary engineering manager.
        </li>
        <li>
          Leading and planning strategically in these additional (epic owner or
          engineering manager) roles.
        </li>
        <li>
          Maintaining productivity and quality of work while handling these
          additional (epic owner or engineering manager) roles.
        </li>
        <li>
          Achieving the assigned goals of these additional (epic owner or
          engineering manager) roles.
        </li>
      </ul>
    ),
    covered: <Checkbox checked={true}></Checkbox>,
    point: 30,
  },
  {
    key: "5",
    kpi: "Cultural Behavior",
    quetions: (
      <ul>
        <li>
          Helping others, even outside their role, and understanding everyone's
          needs.
        </li>
        <li>
          Taking ownership of mistakes, learning from them, and celebrating
          teammates' accomplishments.
        </li>
        <li>
          Seeking continuous learning, achieving personal and team objectives,
          and thriving in autonomous situations.
        </li>
        <li>
          Leveraging self-awareness, expertise, and setting an example in
          professional communication.
        </li>
        <li>
          Upholding the company's values and principles, showing an
          entrepreneurial spirit, and striving for excellence.
        </li>
      </ul>
    ),
    covered: <Checkbox checked={false}></Checkbox>,
    point: 30,
  },
];
const items = [
  {
    key: "1",
    label: "Post a Review",
    children: (
      <>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Divider orientation="left" style={{ color: "#38507f" }}>
          Post a review about this employee regarding what you liked or disliked
          in him/her
        </Divider>
        <TextArea
          showCount
          maxLength={100}
          onChange={onChange}
          placeholder="Your thoughts 💭..."
          style={{ height: 200, resize: "none" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "30px",
            paddingRight: 0,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#38507F", width: "20%", height: "38px" }}
          >
            Submit
          </Button>
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: "Your Reviews",
    children: (
      <Row gutter={16} className="quote-reviews">
        <Col span={24} style={{ marginBottom: 16 }}>
          <Card bordered={false}>
            <img src={quote} width={35} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              finibus, urna non cursus dictum, odio enim volutpat ligula, vitae
              tempus elit lorem a nulla. Maecenas ut cursus mauris. Mauris vitae
              sodales dolor. Donec risus justo, vulputate pellentesque congue
              quis, pretium vel eros. Pellentesque varius maximus orci quis
              tempus. Donec sodales nibh eu odio bibendum eleifend. Pellentesque
              dapibus hendrerit urna, ac mollis erat posuere eget. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Phasellus eleifend justo purus, quis luctus ipsum
              finibus ac. Integer at vulputate felis. In sed placerat dolor.
              Fusce porta a nisl in tincidunt. Aenean sit amet aliquam enim.
            </p>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: 16 }}>
          <Card bordered={false}>
            <img src={quote} width={35} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              finibus, urna non cursus dictum, odio enim volutpat ligula, vitae
              tempus elit lorem a nulla. Maecenas ut cursus mauris. Mauris vitae
              sodales dolor. Donec risus justo, vulputate pellentesque congue
              quis, pretium vel eros. Pellentesque varius maximus orci quis
              tempus. Donec sodales nibh eu odio bibendum eleifend. Pellentesque
              dapibus hendrerit urna, ac mollis erat posuere eget. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Phasellus eleifend justo purus, quis luctus ipsum
              finibus ac. Integer at vulputate felis. In sed placerat dolor.
              Fusce porta a nisl in tincidunt. Aenean sit amet aliquam enim.
            </p>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: 16 }}>
          <Card bordered={false}>
            <img src={quote} width={35} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              finibus, urna non cursus dictum, odio enim volutpat ligula, vitae
              tempus elit lorem a nulla. Maecenas ut cursus mauris. Mauris vitae
              sodales dolor. Donec risus justo, vulputate pellentesque congue
              quis, pretium vel eros. Pellentesque varius maximus orci quis
              tempus. Donec sodales nibh eu odio bibendum eleifend. Pellentesque
              dapibus hendrerit urna, ac mollis erat posuere eget. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Phasellus eleifend justo purus, quis luctus ipsum
              finibus ac. Integer at vulputate felis.
            </p>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: 16 }}>
          <Card bordered={false}>
            <img src={quote} width={35} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              finibus, urna non cursus dictum, odio enim volutpat ligula, vitae
              tempus elit lorem a nulla. Maecenas ut cursus mauris.
            </p>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: 16 }}>
          <Card bordered={false}>
            <img src={quote} width={35} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              finibus, urna non cursus dictum, odio enim volutpat ligula, vitae
              tempus elit lorem a nulla. Maecenas ut cursus mauris. Mauris vitae
              sodales dolor. Donec risus justo, vulputate pellentesque congue
              quis, pretium vel eros. Pellentesque varius maximus orci quis
              tempus. Donec sodales nibh eu odio bibendum eleifend.
            </p>
          </Card>
        </Col>
      </Row>
    ),
  },
];

const Feedback = () => (
  <>
    <Col span={12}>
      <Breadcrumb
        items={[
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
        ]}
      />
    </Col>
    <Col
      span={12}
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <Button
        type="primary"
        style={{ backgroundColor: "#38507F", height: "38px" }}
      >
        Validate using AI
      </Button>
    </Col>
    <Col span={24}>
      <Tabs onChange={onChange} type="card" items={items} />
    </Col>
  </>
);
export default Feedback;
