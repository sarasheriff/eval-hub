// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:5000/api', // Replace with your API base URL
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
