export const selectElFromDOM = (el) => {
  const element = document.querySelector(el);
  return element;
};

export const tableBody = selectElFromDOM('tbody');
