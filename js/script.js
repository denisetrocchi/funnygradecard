console.clear()

// Sorry but --> no time = poor coding (#justforfun)

let check = document.querySelector(".check"),
    form = check.querySelector(".check form"),
    input = form.querySelector("input"),
    caption = form.querySelector("small");

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
  if(val.slice(0,1) == "b") {
    caption.innerHTML = "Daje, avanti così <span>&#9997;</span>"
  } else {
    caption.innerHTML = "Ma l'hai letto l'indizietto?! <span>&#128530;</span>"
  }
  if(val.slice(0,5) == "beatr") {
    caption.innerHTML = "<strong>No pressure</strong>, non ti stiamo osservando <span>&#128064;</span>"
  }
  if(val.slice(0,8) == "beatrice") {
    caption.innerHTML = "GRANDEEE <span>&#127881;</span>"
    setTimeout(() => {
      init()
    }, 1000)
  }
});