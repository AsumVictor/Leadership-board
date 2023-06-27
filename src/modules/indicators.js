import { formIndicator } from './Variables';

const setSuccess = (value) => {
  formIndicator.classList.add('success');
  formIndicator.innerHTML = value;
  setTimeout(() => {
    formIndicator.innerHTML = '';
    formIndicator.classList.remove('success');
  }, 2500);
};

const setError = (value) => {
  formIndicator.classList.add('error');
  formIndicator.innerHTML = value;
  setTimeout(() => {
    formIndicator.innerHTML = '';
    formIndicator.classList.remove('error');
  }, 2500);
};

const setFromIndicator = (message, value) => {
  if (message === 'success') {
    setSuccess(value);
  }
  if (message === 'error') {
    setError(value);
  }
};

export default setFromIndicator;