let btn = document.querySelector("ul");
let filter = document.querySelectorAll("li");
let work = document.querySelectorAll("img");
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let bubble = e.target.closest("li");
  if (!bubble) return;

  filter.forEach((t) => t.classList.remove("active"));
  bubble.classList.add("active");

  let clickId = bubble.dataset.filter;
  work.forEach((w) => {
    let imageId = w.dataset.type;

    w.parentElement.parentElement.classList.remove("active");

    if (clickId == "all") {
      w.parentElement.parentElement.style.display = "block";
    } else if (imageId !== clickId) {
      w.parentElement.parentElement.style.display = "none";
    } else {
      w.parentElement.parentElement.style.display = "block";
    }
  });
});

container.addEventListener("click", function (e) {
  e.preventDefault();
  let bubble = e.target.closest(".card");
  if (!bubble) return;

  let targetBubble = bubble.firstElementChild.dataset.id;
  console.log(targetBubble);

  cards.forEach((card) => {
    loopCard = card.firstElementChild.dataset.id;

    if (targetBubble === loopCard) {
      card.classList.add("active");
    } else {
      card.style.display = "none";
      card.classList.remove("active");
    }
  });
});
