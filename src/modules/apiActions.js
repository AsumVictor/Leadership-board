import { getScores, addScore } from "./api";
import displayElement from "./displayElements";
import { userInput, scoreInput, submitBtn, tableBody } from "./Variables";
import { setFromIndicator } from "./indicators";
export const refresh = async () => {
  tableBody.innerHTML = 'LOADING SCORES...'
  const scores = await getScores();
  displayElement(scores);
};

export const addNewScore = async (e) => {
  e.preventDefault();
  let user = userInput.value;
  let score = scoreInput.value;
  if (user.trim() === "" || score.trim() === "") {
    setFromIndicator("error", "Please all fileds are required.");
  } else {
    submitBtn.value = 'Adding score...'
    try {
      let res = await addScore({ user, score });
      setFromIndicator("success", res.result);
      userInput.value = null;
      scoreInput.value = null;
      submitBtn.value = 'Add score'
      refresh()
    } catch (error) {}
  }
};
