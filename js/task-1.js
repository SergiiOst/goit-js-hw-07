// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//  1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

//  2. Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
//   елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categoryList = document.querySelector("#categories");

const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories : ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category : ${categoryTitle}`);
  console.log(`Elements : ${categoryElements.length}`);
});
