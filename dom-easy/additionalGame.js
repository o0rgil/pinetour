//! additional game
const refresh = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  random1Input.value = Math.floor(Math.random() * 100) + 1;
  random2Input.value = Math.floor(Math.random() * 100) + 1;

  document.getElementById("sum").value = "";
};

const isEqual = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  const sumInput = document.getElementById("sum");

  let sumofTwo = Number(random1Input.value) + Number(random2Input.value);
  let InputNum = Number(sumInput.value);

  if (sumofTwo === InputNum) {
    alert("tentsuu");
  } else {
    alert("buruu");
  }
};

const checkbutton = document.getElementById("check");
checkbutton.addEventListener("click", isEqual);
const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", refresh);
