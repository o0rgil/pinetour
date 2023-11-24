//!add element
const btn = document.getElementById("btn");

let i = 0;
function Box() {
  i++;
  const box = document.createElement("div");

  box.classList.add("box");
  box.innerText = i;
}

btn.addEventListener("click", Box);

// const box = document.createElement("div");
// const boxFirst = document.createElement("div");
// const boxSecon = document.createElement("div");
