//! first
const one = [1, 1, 1, 1, 1];

// 1
for (i = 0; i < one.length; i++) {
  one[i] = 5;
  console.log(one);
}

//2
one.fill(5);

//!second
var names = [
  {
    firstName: "Narantsatsralt",
    lastName: "Bumnasan",
    phoneNumber: "99111111",
  },
  { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
];

//1
for (i = 0; i < names.length; i++) {
  names[i] = names[i].firstName;
  console.log(names[i]);
}

//2
console.log(names.map((el) => el.firstName));

//3
console.log(names.filter((el) => el.firstName === "Narantsatsralt"));

//! task
//todo map
//1
var too = [1, 3, 5, 7, 9];

console.log(too.map((el) => el * 2));

//2
var temp = [32.5, 24, 36];

console.log(temp.map((el) => el * 1.8 + 32 + "F"));

//3
var too = [4, 9, 16, 25];

console.log(too.map((el) => Math.sqrt(el)));

//4
var names = ["orgil", "bumaa", "huuk"];

console.log(names.map((el) => el.toUpperCase()));

//5
var names = [
  {
    firstName: "orgil",
    lastName: "ariunbileg",
  },
];

console.log(names.map((el) => el.lastName[0] + "," + el.firstName[0]));

//todo filter
//1
var too = [1, 4, 5, 7, 9, 12];

console.log(too.filter((el) => el % 2 == 0));

//2
var too = [1, -2, 4, -6];

console.log(too.filter((el) => el > 0));

//3
var words = ["forgiven", "head", "greater"];

console.log(words.filter((el) => el.length > 5));

//4
var too = [1, 2, 4, 5];

function premierNumber(x) {
  for (i = 2; i < x; i++) {}
}

//5
var words = ["has", "given", "girl"];

console.log(words.filter((el) => el[0] == "g"));
