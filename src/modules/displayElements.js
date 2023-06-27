import { tableBody } from './Variables';

const displayElement = (data) => {
  tableBody.innerHTML = '';
  data.map((data, index) => {
    const tr = document.createElement('tr');
    tr.classList.add('border');
    tr.id = index;
    tr.innerHTML = `
        <td class="text-center">${data.user}</td>
        <td class="text-center">${data.score}</td>
        `;

    tableBody.appendChild(tr);
    return 0;
  });
};

export default displayElement;
