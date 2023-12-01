import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
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
import { postFeedback, getEvaluation } from '../../api';
const { Header, Content } = Layout;
const { TextArea } = Input;

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

const transformResponseData = (responseData) => {
  const groupedData = responseData.evaluations.reduce((result, evaluation) => {
    const { kpi, question, is_sufficient, score } = evaluation;

    // Find the existing KPI group or create a new one
    const existingGroup = result.find(group => group.kpi === kpi);
    if (existingGroup) {
      // Add the question to the existing group
      existingGroup.questions.push({ question, is_sufficient, score });
    } else {
      // Create a new group for the KPI
      result.push({ kpi, questions: [{ question, is_sufficient, score }] });
    }

    return result;
  }, []);

  // Transform grouped data into the desired format
  const data = groupedData.map((group, index) => ({
    key: (index + 1).toString(),
    kpi: group.kpi,
    quetions: (
      <ul>
        {group.questions.map((question, questionIndex) => (
          <li key={questionIndex.toString()}>
            {question.question}
          </li>
        ))}
      </ul>
    ),
    covered: (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {group.questions.map((question, questionIndex) => (
          <li key={questionIndex.toString()}>
            <Checkbox checked={question.is_sufficient} />
          </li>
        ))}
      </ul>
    ),
    rate: (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {group.questions.map((question, questionIndex) => (
          <li key={questionIndex.toString()}>
            {question.score}
          </li>
        ))}
      </ul>
    ),
  }));

  return data;
};

const Feedback = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChange = (event) => {
    if (event && event.target) {
      console.log(event.target.value);
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("handleSubmit");
      const evaluatorId = 1;
      // Make the API call using the postFeedback function
      const response = await postFeedback(evaluatorId, inputValue);
      // Handle success, if needed
      console.log(response);
    } catch (error) {
      // Handle error, if needed
      console.error(error);
    }
  }

  const fetchDataFromApi = async () => {
    try {
      const responseData = await getEvaluation();
      setData(transformResponseData(responseData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []); // Run only once on component mount

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
              onClick={handleSubmit}
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

  return (
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
  )
};
export default Feedback;
