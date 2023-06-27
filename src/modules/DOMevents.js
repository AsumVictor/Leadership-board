const DomEvent = (el, event, action) => {
  el.addEventListener(event, action);
};

export default DomEvent