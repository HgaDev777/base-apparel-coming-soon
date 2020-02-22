const emailBtn = document.querySelector(".email__button");
const input = document.querySelector("input");

emailBtn.addEventListener("click", checkEmail);

function checkEmail() {
  input.placeholder = "enter valid email!";
}