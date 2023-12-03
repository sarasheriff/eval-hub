// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3fd8-41-40-127-160.ngrok-free.app/api', // Replace with your API base URL
  // baseURL: 'http://0.0.0.0:5000/api', // Replace with your API base URL
  headers: {
    'User-Agent': 'PostmanRuntime/7.35.0',
    "ngrok-skip-browser-warning": "69420",
    // Add any other headers if needed
  },
});

export const postFeedback = async (evaluatorId, feedback) => {
  try {
    const response = await api.post('/employee/2/feedback', {
        evaluator_id: evaluatorId,
        feedback: feedback,
      });
    return response.data;
  } catch (error) {
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};

export const getEvaluation = async () => {
  try {
    const response = await api.get('/evaluators/1/employees/2/evaluations');
    return response.data;
  } catch (error) {
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};

export const getFeedbacks = async (evaluatorId, feedback) => {
  try {
    const response = await api.get('/employees/2/evaluators/1/feedbacks', {
        evaluator_id: evaluatorId,
        feedback: feedback,
      });
    return response.data;
  } catch (error) {
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};

export const getReport = async () => {
  try {
    const response = await api.get('/employee/2/report', {
      responseType: 'blob',  // Set responseType to 'blob' for binary data (PDF)
    });

    // Create a Blob from the binary data
    const blob = new Blob([response.data], { type: 'application/pdf' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'employee_feedback.pdf';

    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};

export const getHierarchyData = async () => {
  try {
    const response = await api.get(`/employees/hierarchy`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hierarchy data:', error);
    throw error;
  }
};

export const validateFeedbacks = async (evaluatorId, feedback) => {
  try {
    const response = await api.post('/validation/feedbacks/evaluators/1/employees/2');
    return response.data;
  } catch (error) {
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};

export const evaluateScore = async (evaluatorId, feedback) => {
  try {
    const response = await api.post('/evaluators/1/employees/2/rates');
    return response.data;
  } catch (error) {
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};


export const getEmployeesToEvaluate = async () => {
  try {
    const response = await api.get(`/evaluators/1/employees-being-evaluated`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hierarchy data:', error);
    throw error;
  }
};
