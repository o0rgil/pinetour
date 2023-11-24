//
const value = () => {
  const value = Number(document.getElementById("value").value);

  for (i = 1; i <= value; i++) {
    const circle = document.createElement("div");
    let container = document.getElementById("con");
    circle.classList.add("circle");

    console.log(typeof value);
    container.appendChild(circle);
  }
};

document.getElementById("btn");

btn.addEventListener("click", value);
