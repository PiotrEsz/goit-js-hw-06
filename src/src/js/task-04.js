let counterSpan = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
console.log(typeof counterValue);
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const handleClickDec = () => {
  counterValue -= 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};
const handleClickInc = () => {
  counterValue += 1;
  counterSpan.innerHTML = `<span id="value">${counterValue}</span>`;
};

btnDecrement.addEventListener("click", handleClickDec);
console.log("test");
btnIncrement.addEventListener("click", handleClickInc);
console.log("test");
