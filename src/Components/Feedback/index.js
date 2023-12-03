import {
  HomeOutlined,
  UserOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Col,
  Row,
  Card,
  Space,
  Collapse,
  Divider,
  Layout,
  Empty,
  Table,
  Checkbox,
  Input,
  Tabs,
  Button,
} from "antd";
import quote from "../../images/left-quote-svgrepo-com.svg";
import {
  postFeedback,
  getEvaluation,
  getFeedbacks,
  getReport,
  validateFeedbacks,
  evaluateScore,
} from "../../api";
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
    const existingGroup = result.find((group) => group.kpi === kpi);
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
          <li key={questionIndex.toString()}>{question.question}</li>
        ))}
      </ul>
    ),
    covered: (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {group.questions.map((question, questionIndex) => (
          <li key={questionIndex.toString()}>
            <Checkbox
              checked={
                question.is_sufficient === "true" ||
                question.is_sufficient === "True"
              }
            />
          </li>
        ))}
      </ul>
    ),
    rate: (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {group.questions.map((question, questionIndex) => (
          <li key={questionIndex.toString()}>{question.score}</li>
        ))}
      </ul>
    ),
  }));

  return data;
};

const Feedback = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event) => {
    if (event && event.target) {
      console.log(event.target.value);
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = async () => {
    try {
      const evaluatorId = 1;
      // Make the API call using the postFeedback function
      const response = await postFeedback(evaluatorId, inputValue);
      // Handle success, if needed
      console.log(response);
    } catch (error) {
      // Handle error, if needed
      console.error(error);
    }
  };

  const fetchDataFromApi = async () => {
    try {
      const responseData = await getEvaluation();
      setData(transformResponseData(responseData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getFeedbacksFromApi = async () => {
    try {
      const responseData = await getFeedbacks();
      setFeedbacks(responseData.feedbacks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
    getFeedbacksFromApi();
  }, []); // Run only once on component mount

  const handleDownload = async () => {
    try {
      await getReport();
    } catch (error) {
      console.error("Error in downloadPDF function:", error);
    }
  };

  const validateUsingAI = async () => {
    try {
      const responseData = await validateFeedbacks();
      const filteredData = responseData.filter((item) => !item.is_sufficient);
      setSuggestions(filteredData);
      await fetchDataFromApi();
    } catch (error) {
      console.error("Error in downloadPDF function:", error);
    }
  };

  const scoreUsingAI = async () => {
    try {
      const responseData = await evaluateScore();
      setData(transformResponseData(responseData));
    } catch (error) {
      console.error("Error in downloadPDF function:", error);
    }
  };

  const items = [
    {
      key: "1",
      label: "Post a Review",
      children: (
        <>
          <Table columns={columns} dataSource={data} pagination={false} />
          <Divider orientation="left" style={{ color: "#38507f" }}>
            Post a review about this employee regarding what you liked or
            disliked in him/her
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
              style={{
                backgroundColor: "#38507F",
                width: "20%",
                height: "38px",
              }}
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
          {feedbacks.map((feedback, index) => (
            <Col key={index} span={24} style={{ marginBottom: 16 }}>
              <Card bordered={false}>
                <img src={quote} width={35} />
                <p>{feedback}</p>
              </Card>
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: "3",
      label: "Suggestions",
      children: !!suggestions.length ? (
        <Space direction="vertical">
          {suggestions.map((suggest, index) => (
            <Collapse
              collapsible="icon"
              defaultActiveKey={["0"]}
              style={{
                backgroundColor: "#38507F",
                color: "#fff",
                fontFamily: "Poppins",
              }}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              items={[
                {
                  key: index,
                  label: suggest.question,
                  children: <p>{suggest.suggestions}</p>,
                },
              ]}
            />
          ))}
        </Space>
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 150,
            display:"flex", justifyContent:"center"
          }}
          description={<span style={{color:"#4E4E52", fontFamily:"Poppins"}}>No suggestions yet!</span>}
        ></Empty>
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
          style={{ backgroundColor: "#38507F", height: "38px", marginRight:"10px", boxShadow:"none" }}
          onClick={validateUsingAI}
        >
          Validate using AI
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#9ACE62", height: "38px",  boxShadow:"none" }}
          onClick={scoreUsingAI}
        >
          Score
        </Button>
      </Col>
      <Col span={24}>
        <Tabs onChange={onChange} type="card" items={items} />
      </Col>
    </>
  );
};
export default Feedback;
