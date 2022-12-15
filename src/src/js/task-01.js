const numberOfLiItem = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${numberOfLiItem.length} `);
const countElements = numberOfLiItem.forEach((e) => {
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});
