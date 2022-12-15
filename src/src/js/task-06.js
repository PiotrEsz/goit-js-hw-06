let input = document.getElementById("validation-input");
let attributeForm = input.getAttribute("data-length");

let validInput = () => {
  input.classList.add("valid");
  input.classList.remove("invalid");
};

let invalidInput = () => {
  input.classList.add("invalid");
  input.classList.remove("valid");
};
input.addEventListener("blur", () => {
  if (attributeForm == input.value.length) {
    validInput();
  } else {
    invalidInput();
  }
});
