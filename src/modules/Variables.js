export const selectElFromDOM = (el) => {
  const element = document.querySelector(el);
  return element;
};

export const tableBody = selectElFromDOM("tbody");
export const refreshBtn = selectElFromDOM(".refresh");
export const submitBtn = selectElFromDOM(".submit");
export const userInput = selectElFromDOM(".user");
export const scoreInput = selectElFromDOM(".score");
export const formIndicator = selectElFromDOM(".form-indicator");
export const API_URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DduMfw1Cbs9nVFmDS4n8/scores";
