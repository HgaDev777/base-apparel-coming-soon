const emailBtn = document.querySelector(".email__button");
const input = document.querySelector("input");

emailBtn.addEventListener("click", checkEmail);

function checkEmail() {
  input.placeholder = "enter valid email!";
}

//Check for pop-up blockers
function checkForPopUp() {
  var testPop = window.open("", "", "width=100,height=100");
  if (testPop === null || typeof (testPop === "undefined")) {
    alert("Please disable your popup blocker.");
  }
  testPop.close();
}