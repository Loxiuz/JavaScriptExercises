window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#orange_container")
    .addEventListener("click", jumpingSquare);
  document
    .querySelector("#orange_container")
    .addEventListener("animationend", jumpDone);
}

function jumpingSquare() {
  console.log("jumpingSquare");
  document.querySelector("#orange_container").classList.add("jump-once");
}

function jumpDone() {
  console.log("jumpDone");
  document.querySelector("#orange_container").classList.remove("jump-once");
}
