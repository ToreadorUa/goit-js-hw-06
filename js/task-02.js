const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const result = document.querySelector('#ingredients')
const list = [];
ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  list.push(li);
})
result.append(...list);

