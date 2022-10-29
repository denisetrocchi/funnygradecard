console.clear()

// Sorry but --> no time = poor coding (#justforfun)

let check = document.querySelector(".check"),
    form = check.querySelector(".check form"),
    input = form.querySelector(".check input");

function activate(x){
  x.classList.add("active");
}

function init(){
  let racoon = document.querySelector("img.racoon"),
      curtain = document.querySelector(".curtain"),
      card = document.querySelector(".card"),
      vid = document.querySelector(".obj video");
  console.log("Let's party!")
  activate(check)
  activate(racoon)     
  setTimeout(() => {
    activate(curtain)
    setTimeout(() => {
      activate(card)
      activate(vid)
      vid.play();
    }, 1000)
  }, 1000)
}

input.addEventListener("input", (event) => {
  let val = input.value.toLowerCase();
  if (val == "beatrice") {
    init()
  }
});