let slidebar = document.getElementById("font-size-control");
let text = document.getElementById("text");

slidebar.value = 16;
slidebar.addEventListener("input", () => {
  let size = slidebar.value;
  text.style.fontSize = size + "px";
});
let inputValue = 0;
