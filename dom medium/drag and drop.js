const drop = document.getElementById("drop");
const drag = document.getElementById("drag");
drag.addEventListener("dragend", () => {
  drop.style.borderColor = "red";
});
