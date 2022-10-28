console.clear()

//sorry but -> no time = poor coding

let check = document.querySelector(".check"),
    form = check.querySelector("form"),
    input = form.querySelector("input");

function active(x){
  x.classList.add("active");
}

function init(){
  let racoon = document.querySelector("img.racoon"),
      curtain = document.querySelector(".curtain"),
      card = document.querySelector(".card"),
      vid = document.querySelector(".obj video");

      active(check)
      active(racoon)     
      setTimeout(() => {
        active(curtain)
        setTimeout(() => {
          active(card)
          active(vid)
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