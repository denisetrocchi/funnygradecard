console.clear()

//sorry but -> no time = poor coding

let check = document.querySelector(".check"),
    form = check.querySelector("form"),
    input = form.querySelector("input");

function init(){
  let curtain = document.querySelector(".curtain"),
      card = document.querySelector(".card"),
      vid = document.querySelector(".obj video");

      check.classList.add("active");
      curtain.classList.add("active");
      setTimeout(() => {
        card.classList.add("active");
        vid.classList.add("active");
        vid.play();
      }, 1000)
}

input.addEventListener("input", (event) => {
  let val = input.value.toLowerCase();
  if (val == "beatrice") {
    init()
  }
});