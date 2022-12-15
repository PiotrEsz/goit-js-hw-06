let input = document.getElementById("validation-input");
let attributeForm = input.getAttribute("data-length");

let validInput = () => {
  input.classList.add("valid");
  input.classList.remove("invalid");
};
