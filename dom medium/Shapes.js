// const sqr = document.getElementById("sqr");
// const square = () => {
//   console.log("k");
// };
// sqr.addEventListener("dblclick", square);

const circle = () => {
  const sqr = document.getElementById("sqr");
  const circle = document.createElement("button");
  circle.classList.add("circle");

  sqr.remove();
  document.body.appendChild(circle);
};
const sqr = document.getElementById("sqr");
sqr.addEventListener("click", circle);

const triangle = () => {
  const circle = document.getElementsByClassName("circle");
  const triangle = document.createElement("button");
  triangle.classList.add("triangle");
  circle.remove();
  document.body.appendChild(triangle);
};
const circl = document.getElementsByClassName("circle");
circl.addEventListener("dblclick", triangle);
