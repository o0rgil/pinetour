//! DOM easy tasks
//1
const text = () => {
  const element = document.getElementById("text");
  element.textContent = "Changed text";
};
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", text);

//2
const style = () => {
  const styledElement = document.querySelector(".styledElement");
  styledElement.style.color = "red";
  styledElement.style.fontSize = "18px";
};
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", style);
//3

document.getElementById("changeTextBtn").addEventListener("click", function () {
  const text = document.getElementById("textToChange");
  if (text) {
    text.textContent = "Changed text";
  }
});
//4

const create = () => {
  const newElement = document.createElement("p");
  newElement.textContent = "Newly created text";

  const existingElement = document.getElementById("existingElement");
  existingElement.appendChild(newElement);
};
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", create);
//5

document.getElementById("btn4").addEventListener("click", function () {
  const elementToToggle = document.getElementById("elementToToggle");

  elementToToggle.style.display === "none" ? "block" : "none";
});

//! DOM easy tasks with loop
//1
const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const ul = document.getElementById("dynamicList");

listItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

document.body.appendChild(ul);
//2
const rows = document.querySelectorAll("table tr");

rows.forEach((mor, dugaar) => {
  if (dugaar % 2 == 0) {
    mor.style.backgroundColor = "lightgray";
  } else {
    mor.style.backgroundColor = "lightblue";
  }
});
//3

const dropdown = document.getElementById("mySelect");
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

options.forEach((optionText) => {
  const option = document.createElement("option");
  option.text = optionText;
  dropdown.add(option);
});
