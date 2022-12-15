const outputName = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
const spanValue = () => {
  outputName.innerHTML = nameInput.value;
};
nameInput.addEventListener("input", spanValue);

if (currentTarget.value) {
} else {
  outputName.textContent = "Anonymous";
}

// if (currentTarget.value) {
//   nameVale.value;
// } else {
//   span.textContent = "Anonymous";
// }
