import getScores from "./api";
import displayElement from "./displayElements";
const refresh = async () => {
  const scores = await getScores()
  displayElement(scores)
};

export default refresh;
