const btn = document.getElementById("btn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndmCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.getElementById("sqr").style.backgroundColor = rndmCol;
});
