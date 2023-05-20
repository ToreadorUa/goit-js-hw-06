function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('span.color');
const btnEl = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body')

const onClick = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
btnEl.addEventListener('click', onClick);