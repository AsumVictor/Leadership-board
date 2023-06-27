import { API_URL } from "./Variables";
export const getScores = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const scores = data.result;
    return scores;
  } catch (error) {
    console.log(error);
  }
};

export const addScore = async (scores) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scores),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
