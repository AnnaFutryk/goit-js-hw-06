function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');
const createBtn = document.querySelector('[data-create]');
const removeBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
removeBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const createdEl1 = document.createElement('div');
    createdEl1.style.width = size + 'px';
    createdEl1.style.height = size + 'px';
    createdEl1.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(createdEl1);
    size += 10;
  };
  
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
};