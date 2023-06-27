import { API_URL } from "./Variables";
const refresh = async () => {
  try {
    const result = await fetch(API_URL);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default refresh;
