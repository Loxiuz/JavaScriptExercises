window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#blue_container")
    .addEventListener("click", blueFallOver);
}

function blueFallOver() {
  console.log("blueFallOver");
  document
    .querySelector("#blue_container")
    .removeEventListener("click", blueFallOver);
  document.querySelector("#blue_container").classList.add("fallover");
}
