let counterValue = 0;
const btnAddEl = document.querySelector('[data-action="increment"]');
const btnSubstructEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

const onBtnAddClick = () => {
    counterValue += 1;
   valueEl.textContent = counterValue;
}
const onBtnSubstrClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
btnAddEl.addEventListener('click', onBtnAddClick);
btnSubstructEl.addEventListener('click', onBtnSubstrClick);
