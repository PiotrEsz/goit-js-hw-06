const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const findUl = document.querySelector("#ingredients");

const secondTask = ingredients.forEach((ingredient) => {
  let listOfIngredient = document.createElement("li");
  listOfIngredient.textContent = ingredient;
  listOfIngredient.classList.add("item");
  findUl.append(listOfIngredient);
});
