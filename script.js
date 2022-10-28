console.clear()

function init(){
  let card = document.querySelector(".card");
  card.classList.add("active");
}

document.addEventListener("keydown", function(event) {
  if (event.key == "b") {
    init()
  }
});