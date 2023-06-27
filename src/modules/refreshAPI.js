import { API_URL } from "./Variables";
const refresh = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json()
    const scores = data.result
    console.log(scores);
  } catch (error) {
    console.log(error);
  }
};

export default refresh;
