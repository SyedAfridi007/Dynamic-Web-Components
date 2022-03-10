let body = document.querySelector("body");
let btn = document.querySelectorAll(".button");
let modalContainer = document.getElementById("modal-container");

let rrr = modalContainer.children[0].className;
console.log(rrr);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let btnId = btn[i].id;
    modalContainer.removeAttribute("class");
    modalContainer.classList.add(btnId);
  });
}

modalContainer.addEventListener("click", function () {
  modalContainer.classList.add("out");
  body.classList.remove("modal-active");
});
