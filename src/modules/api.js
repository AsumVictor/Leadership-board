import { API_URL, formIndicator } from './Variables';

export const getScores = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const scores = data.result;
    return scores;
  } catch (error) {
    formIndicator('error', error);
  }

  return 0;
};

export const addScore = async (scores) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scores),
    });
    return response.json();
  } catch (error) {
    formIndicator('error', error);
  }

  return 0;
};
