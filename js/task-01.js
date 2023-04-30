const categoriesList = document.getElementById('categories');
// всі елементи категорій
const categoryItems = categoriesList.children;

//кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// для кожної категорії виводимо назву та кількість елементів

[...categoryItems].forEach(item => {
    const categoryTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoryTitle}`);

    const categoryElements = item.lastElementChild.children;
    console.log(`Elements: ${categoryElements.length}`);

});