const outputName = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = "Anonymous";
  }
});

// if (currentTarget.value) {
//   nameVale.value;
// } else {
//   span.textContent = "Anonymous";
// }
