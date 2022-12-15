function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let initialSize = 30;
const initialData = 30;

const box = document.getElementById("boxes");
const creationBtn = document.querySelector("[data-create]");
const destructionBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

creationBtn.addEventListener("click", () => {
  for (let i = 0; i < input.value; i++) {
    const newBox = document.createElement("div");

    newBox.style.width = `${initialSize}px`;
    newBox.style.height = `${initialSize}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    initialSize += 10;
    box.appendChild(newBox);
  }
});

destructionBtn.addEventListener("click", () => {
  box.innerHTML = "";
  initialSize = initialData;
});
