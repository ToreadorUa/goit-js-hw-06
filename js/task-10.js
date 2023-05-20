function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    divArray.push(div);
    }
  boxesEl.append(...divArray)
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

const inputEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', () => {
  const amount = inputEl.valueAsNumber;
  createBoxes(amount);
});
destroyBtnEl.addEventListener('click', destroyBoxes);
