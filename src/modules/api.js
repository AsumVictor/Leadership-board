import { API_URL } from "./Variables";
const getScores = async()=>{
    try {
        const res = await fetch(API_URL);
        const data = await res.json()
        const scores = data.result
        return scores
      } catch (error) {
        console.log(error);
      }
}

export default getScores