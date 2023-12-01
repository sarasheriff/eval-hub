// api.js
import axios from 'axios';

const apiUrl = 'http://0.0.0.0:5000/api/employee/2/feedback';

export const postFeedback = async (evaluatorId, feedback) => {
  try {
    const response = await axios.post(apiUrl, {
        evaluator_id: evaluatorId,
        feedback: feedback,
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};
