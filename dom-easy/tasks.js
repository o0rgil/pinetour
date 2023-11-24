let nas = 56;

if (nas >= 18) {
  console.log("nasand hursen");
} else {
  console.log("nasand hureegui");
}

let a = 4556;

if (a % 2 == 0) {
  console.log("tegsh");
} else if (a % 2 !== 0) {
  console.log("sondgoi");
}

let b = 17;
let c = 40;
let d = 64;

if (b > c && b > d) {
  console.log(b);
} else if (c > b && c > d) {
  console.log(c);
} else if (d > b && d > b) {
  console.log(d);
}

let num = 1;

//! while
while (100 >= num) {
  console.log(num);
  num++;
}

var sum = 0;

for (i = 0; i >= 6; i++);
while (i <= 6) {
  sum + i;
  console.log(sum);
}

let n = 100;
let i = 0;
do {
  console.log(n);
  n--;
} while (i < n);

let x = 0;
do {
  console.log(x);
  x = 1;
} while (x < 0);
console.log(x);

//!break

for (i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

//!continue

let tooo = 1;

while (too <= 10) {
  too++;
  if (too == 6) {
    continue;
  }
  console.log(too);
}

//! function and findXcube
function cube_power_of_x(x) {
  let cube = x ** 3;
  console.log(cube);
}
cube_power_of_x(12);

average = niilberr / numbers.length;

console.log(average);

//object excercise

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54000,
    casherId: 2,
    date: "2022-11-01",
  },
  {
    productName: "Milk",
    unitPrice: 4000,
    amount: 30,
    totalPrice: 120000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Powder",
    unitPrice: 3500,
    amount: 200,
    totalPrice: 700000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Butter",
    unitPrice: 7500,
    amount: 25,
    totalPrice: 187500,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Honey",
    unitPrice: 10000,
    amount: 40,
    totalPrice: 400000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Sugar",
    unitPrice: 7000,
    amount: 35,
    totalPrice: 245000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Box",
    unitPrice: 1500,
    amount: 2000,
    totalPrice: 300000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Color",
    unitPrice: 5000,
    amount: 10,
    totalPrice: 50000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Flour",
    unitPrice: 3500,
    amount: 400,
    totalPrice: 140000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Oil",
    unitPrice: 9000,
    amount: 15,
    totalPrice: 135000,
    casherId: 1,
    date: "2022-11-01",
  },
];

//bubble sort

var numb = [2, -3, 5, 6, -8, 10];

for (i = 0; i < numb.length; i++) {
  for (k = 0; k < numb.length; k++) {
    if (numb[i] > numb[k]) {
      let min = numb[i];
      numb[i] = numb[k];
      numb[k] = min;
    }
  }
}

console.log(numb);

//
var number = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

for (i = 0; i < numbers.length; i++) {
  for (k = i; k < numbers.length; k++) {
    let sum = 0;
    for (j = i; j <= j; j++) {
      sum += numbers[j];
    }
    max = Math.E();
  }
}

//! array
//todo easy
//Array Members Average

var numbers = [10, 20, 30, 40, 50];

let niilberr = 0;
let average;

for (i = 0; i < numbers.length; i++) {
  niilberr += numbers[i];
}

average = niilberr / numbers.length;

console.log(average);

average = sum / numbers.length;
console.log(average);

//Fibonacci sequence

const Fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
  39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733,
  1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025,
  20365011074, 32951280099, 53316291173, 86267571272, 139583862445,
  225851433717, 365611773776, 591286729879, 956722026041, 1548008755920,
  2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565,
  27777890035288, 44945570212853, 72723460248141, 117669030460994,
  190392490709135, 308061521170129, 498454011879264, 806515533049393,
  1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757,
  8944394323791464, 14472334024676221, 23416728348467685, 37889062373143906,
  61305790721611591, 99194853094755497, 160500643816367088, 259695496911122585,
  420196140727489673, 679891637638612258, 1100087778366101931,
  1779979416004714189, 2880067194370816120, 4660046610375530309,
  7540113804746346429, 12200160415121876738, 19740274219868223167,
  31940434634990099905, 51680708854858323072, 83621143489848422977,
  135301852344706746049, 218922995834555169026,
];
console.log(Fibonacci);

//Sum positive even number

var numbers = [2, -3, 5, 6, -8, 10];
var niil = 0;

for (i = 0; i < numb.length; i++) {
  if (numb[i] >= 0 && numb[i] % 2 == 0) {
    niil += numb[i];
  }
}

//Change array last element

var numbers = [10, 20, 30, 40, 50];

number[4] = 30;

console.log(number);

//todo medium
//?Chunk

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let chunk = 2;

for (i = 0; i < numbers.length; i++) {
  if (chunk > 0) {
    numbers.push(numbers);
  }
}

//Find max and min

var numbers = [5, 10, 1, 89, 46, 17, 31, 59];

var min = 0;
var max = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[0] >= numbers[i]) {
    min = numbers[i];
  }
}
console.log(min, max);

//?Sort an array

//! array-object-string-methods
//todo easy
//Ascending order

const rank = { b: 2, a: 1, c: 3 };

rank;

rank.sort((a, b, c) => {
  return a - b - c;
});

console.log(rank);

//Get full name

const person = {
  firstName: "Orgil",
  lastName: "Ariunbileg",
};
console.log(person.lastName.toUpperCase() + " " + person.firstName);

//Array reverse

var numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
numbers.join();
console.log(numbers.reverse().toString());

//?UpdateStudentGrades

//todo medium
//Find duplicate element

var numbers = [3, 5, 3, 5, 5];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 1) {
    console.log(numbers[i]);
  }
}

//?Matching string in array

const string = [pineapple, pinecone, pine, as, sass];

//?Matching value in array

//Student list
const students = [
  { name: "orgil", age: 16, courses: ["Math", "Physics"] },

  { name: "baatar", age: 19, courses: ["Math", "Chemistry"] },

  { name: "bat", age: 23, courses: ["Physics", "Chemistry"] },

  { name: "naraa", age: 20, courses: ["Math", "Physics", "Chemistry"] },

  { name: "shagai", age: 21, courses: ["Math", "Biology"] },
];

for (i = 0; i < students.length; i++) {
  for (j = 0; j < students.length; j++) {
    if (Object.hasOwn(students.courses, "Math")) {
      console.log(students.name);
    }
  }
}

//! function
//todo easy
//3-ын зэрэгт

function cube_power_of_x(x) {
  let cube = x ** 3;
  console.log(cube);
}
cube_power_of_x(12);

//Гурвалжны талбай олох

function AreaOfTriangle(a, b, c) {
  if ((a + b > c, b + c > a, c + a > b)) {
    let semiP = (a + b + c) / 2;
    let s = semiP * (semiP - a) * (semiP - b) * (semiP - c);
    s = Math.sqrt(s);
    console.log(s);
  } else {
    console.log("Possible");
  }
}
AreaOfTriangle(3, 4, 6);

//?Давхцал

//x² + 5x + 6

function x(x) {
  let answer = x ** 2 + 5 * x + 6;
  console.log(answer);
}
x(0);

//todo medium
//Find long word

const longest = "My name is Orgil";
let con = "";

function longestWord() {
  for (i = 0; i < longest.length; i++) {
    for (k = 0; k < longest.length; k++) {
      if (longest[i].length < longest[k].length) {
        con += longest[k];
      }
    }
  }
  console.log(con);
}

//Mini calculator

let plus = 0;
let minus = 0;

function calculator(x, y) {
  plus += x + y;
  minus += x - y;
  console.log("Нэмсэн үр дүн:" + " " + plus);
  console.log("Хассан үр дүн:" + " " + minus);
}
calculator(3, 8);

//?Palindrom checker
const palindrom = "racecar";

function palindrom() {
  for (i = 0; i < palindrom.length; i++) {
    if ((palindrom[i] = palindrom[0])) {
      true;
    }
  }
}
palindrom();

//?Remove vowels

const word = ["I like inecone"];
const vowels = ["e, u, i, o, a"];
const newWord = "";

//todo hard
//Factorial

function factorial(n) {
  let ans = 1;
  for (i = 1; i <= n; i++) {
    ans *= i;
    console.log(ans);
  }
}
factorial(7);

//!loop
//todo easy
//1 to 100

for (i = 1; i <= 100; i++) {
  console.log(i);
}

//Even number sum

let utga1 = 9;
let summ = 0;

for (i = 0; i < utga1; i++) {
  for (k = i; k % 2 == 0; k--) {
    summ += k;
    console.log(summ);
  }
}

//N number sum

let nt = 20;
let niilber = 0;

for (i = nt; i >= 1; i--) {
  niilber += i;
  console.log(niilber);
}

//Number power

var too = 2;

for (i = too; i < 1000; i++) {}

//todo medium
//Bubble sort

var numbers = [7, 6, 4, 3];

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

//Largest difference between any two numbers

var numbers = [5, 10, 1, 89, 46, 17, 31, 529];
var sum = 0;
var min = 0;
var max = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[0] >= numbers[i]) {
    min = numbers[i];
  }
  sum = max - min;
}
console.log(sum);

//Left pyramid pattern

var utga = 5;

for (i = 1; i <= utga; i++) {
  let result = "";
  for (k = utga; k >= 1; k--) {
    result += "*";
  }
  console.log(result);
}

//Min operation

var numbers = [4, 8, 9, 1, 3, 10];

for (i = 0; i < numbers.length; i++) {
  numbers.sort((a, b) => {
    return a - b;
  });
  if (numbers[i] % 2 == 0) {
  }
}
console.log(numbers);

//!nested-loop
//todo easy
//Draw square

for (i = 0; i < 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}

//todo medium

//Draw triangle
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 5; j > i; j--) {
    row += "  ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

//
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 5; j > i; j--) {
    row += "  ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

//todo hard

//Draw pyramid

//
for (let i = 9; i >= 1; i--) {
  let row = "";
  for (let j = 9; j > i; j--) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

//! 23-11-21 tasks
//Change Text Content
<p id="text">Initial Text</p>;

var element = document.getElementById("text");
element.textContent = "Changed Text Content";
