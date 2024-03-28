const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {

const categoryTitle = category.querySelector('h2');
const categorySubtitle = category.querySelectorAll('ul > li');

console.log(`Category: ${categoryTitle.textContent}`);
console.log(`Elements: ${categorySubtitle.length}`);

});
