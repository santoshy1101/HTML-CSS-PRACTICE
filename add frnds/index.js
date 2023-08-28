const status = document.querySelector(".status");
let reqStatus = false;
const add = document.querySelector(".add");
add.addEventListener("click", () => {
  reqStatus = reqStatus ? false : true;
  add.textContent = reqStatus ? "Remove" : "Add";
  status.textContent = reqStatus ? "Accept" : "Not Accept";
  status.style.color = reqStatus ? "green" : "red";
});