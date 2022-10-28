console.clear()

//no time = poor coding (sorry!)

let checkin = document.querySelector(".checkin"),
    form = checkin.querySelector("form"),
    input = form.querySelector("input");

function init(){
  let curtain = document.querySelector(".curtain"),
      card = document.querySelector(".card"),
      video = document.querySelector(".obj video");

      checkin.classList.add("active");
      curtain.classList.add("active");
      setTimeout(() => {
        card.classList.add("active");
        video.classList.add("active");
      }, 1500)
}

input.addEventListener("input", (event) => {
  let val = input.value.toLowerCase();
  if (val == "beatrice") {
    init()
  }
});