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
    console.log("response")
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message); // Log the error message
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};

export const getEvaluation = async () => {
  try {
    const response = await api.get('/evaluators/1/employees/2/evaluations');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message); // Log the error message
    console.error('Error details:', error); // Log the full error object
    throw error;
  }
};
