console.clear()

gsap.set(".card", {
  opacity: 0,
  scale: 0
})

function init(){
  gsap.to(".card", {
    opacity: 1,
    scale: 1
  })
}

document.addEventListener("keydown", function(event) {
  if (event.key == "b") {
    init()
  }
});