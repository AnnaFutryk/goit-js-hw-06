const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
 
//* поганий варіант
// ingredients.forEach(ingredient => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item');

//   ingredientList.appendChild(ingredientItem);

// });

//* норм варіант
// const ingredientItems = ingredients.map(ingredient => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item');

//   return ingredientItem

// });

// ingredientList.append(...ingredientItems);

const makeIngredientItems = items => {
  return items.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('item');

    return ingredientItem

  });

};

const ingredientItems = makeIngredientItems(ingredients);
ingredientList.append(...ingredientItems);