const categoriesList = document.querySelector('#categories');
// всі елементи категорій
const categoriesItems = categoriesList.querySelectorAll('.item');

//кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// для кожної категорії виводимо назву та кількість елементів

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryTitle}`);

    const categoryElements = item.querySelectorAll('li');
    console.log(`Elements: ${categoryElements.length}`);

});