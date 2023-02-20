window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").classList.add("move");
  document
    .querySelector("#orange_container")
    .addEventListener("click", jumpingSquare);
}

function jumpingSquare() {
  console.log("jumpingSquare");
  document.querySelector("#orange_container").classList.add("paused");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jumpingSquare);
  document.querySelector("#orange_sprite").classList.add("jump");
}
