<div align="center">

# JavaScript Notes

<p>Credit for all instructors and resources<p/>

</div>

<details><summary>Javascript Syntax</summary>
<p>
<br>

# JavaScript Syntax

` js syntax is the set of rules, how js program are constructed.`

</p>
</details>

---

<details><summary>Javascript Program</summary>
<p>
<br>

# Javascript Program

`A computer program is a list of 'instructions' to be 'executed' by the computer.These program instructions are called 'statements'.Statements are separated by 'semicolons'.`

</p>
</details>

---

<details><summary>Javascript Expressions</summary>
<p>
<br>

# Javascript Expressions

- An expression is a combination of values , variables, and operators which computed to a value.
- The computation is called an evaluation.
- eg. 1 + 2 , 10 > num are expression

</p>
</details>

---

<details><summary>Javascript Statements</summary>
<p>
<br>

# Javascript Statements

`Js statements are composed of: Values, Operators, Expressions, Keywords and Comments.`

- The statements is how executed the program on the `expression`.
- eg. let vv = 1 + 2 (This is commended to add the result of sum from two values to the vv variable. This is also called statement.)

</p>
</details>

---

<details><summary>Declare, Assign and Reassign</summary>
<p>
<br>

# Declare, Assign And Reassign

```javascript
let hay; // Declare the variable
hay = "wailwinphyo"; // Assign the variable
hay = "WaiLwinPhyo"; // Reassign the variable

let hello = "wailwinphyo"; // Initialize the variable
hello = "Kyaw Kyi"; // Reassign the variable
```

</p>
</details>

---

<details><summary>Javascript String</summary>
<p>
<br>

## String Method

```javascript
let string_method = "hello my friend";
console.log("Uppercase is " + string_method.toUpperCase());

console.log("Uppercase is " + string_method.toLowerCase());

console.log("Substring is " + string_method.substring(1, 4));
// substring(start_index, end_index)

console.log("Slice is " + string_method.slice(1, 4));
// slice(start_index, end_index)

// Difference between slice and substring is slice can assess negative index and substring can't.

console.log("Finding Element Town is " + string_method.includes("friend"));

console.log("Replacing down : " + string_method.replace("my", "our"));
console.log("Replacing down : " + string_method.replaceAll("my", "our"));

console.log(string_method);

let str = "   testing javascript ";
console.log(
  "Triming is the removing the whiteSpace and tag from the beginning and ending. So the result is ",
  str.trim()
);

console.log("spliting the string with t is ", str.trim().split("t"));

var str = " Java & Java Server Side& JavaScript";
console.log("Str ", str);
console.log("startWith('java') ", str.trim().startsWith("Java"));
console.log("endWith('Script) ", str.endsWith("Script"));
console.log("includes('server) ", str.includes("Server"));
```

</p>
</details>

---

<details><summary>Slugify</summary>
<p>
<br>

```js
const urlWithMutation = " I will be a url slug  ";

const slugifyWithMutation = (url) => {
  url = url.toLowerCase();
  url = url.trim();
  url = url.split(" ");
  url = url.join("-");
  return url;
};

slugifyWithMutation(urlWithMutation); // i-will-be-a-url-slug

const url = " I will be a url slug  ";

const slugify = (url) => url.toLowerCase().trim().split(" ").join("-");

slugify(url); // i-will-be-a-url-slug
```

</p>
</details>

---

<details><summary>Javascript Array</summary>
<p>
<br>

## Js Array

`Javascript Array can access Multiple values`

```javascript
let names = ["wailwinphyo", "kyawkyi", true, 20]; // Creation withArray Initialization
let name_con = new Array(123, 23, "hello", false); // Creation from Array Constructor
console.log(name_con);

names[1] = "waikyi"; // Change the array or Overwrite the array
names.push("pushing_in_array"); // adding the values in Array
console.log(names);

let array_number = [
  [1, 2, [3, 4, 5], 6, 7],
  [8, 9, 10],
];
console.log(array_number[0][2][1]);
```

### _Array Method_

`Array.prototype.map() and Array.prototype.pop()`

Array Methods that accepted values as parameter

```javascript
let arr_fun = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr_fun.length);
// Length of Array

console.log(arr_fun.toString());
// Array to String

console.log(Array.isArray(arr_fun));
// Checking out Array

arr_fun[5] = 100;
console.log(arr_fun);
// Overwrite or Change the Array

console.log(arr_fun.indexOf(100));
// Find the index of Array Value

arr_fun.push("Hay");
// Adding at the end of Array

arr_fun.unshift("Hay");
// Adding at the beginning of Array

arr_fun.pop("Hay");
// Pop out at the end of Array

arr_fun.shift("Hay");
// Shift out at the beginning of Array

arr_fun.splice(2, 3);
// array.splice(starting index, count) Cutting arr value in Array

arr_fun.reverse();
// Reverse the Array

arr_fun.join(":");
// joining array

// fill
var ar = [1, 2, 3, 4];
ar.fill(0, 2, 4); // (4) [1, 2, 0, 0]
ar; // (4) [1, 2, 0, 0]

let arr_fun1 = [200, 300, 400];
let arr_combine = arr_fun.concat(arr_fun1);
arr_combine.concat(2100);
// Combining one or more Arrays and item

console.log(arr_combine);

// Difference between push and concat
/*
push return the length of the array after pushing the item
concat return the concated new array after adding the arrays or item
*/
```

Array Methods that accepted callBack Function as parameter

```javascript
let map_arr = [
  {
    name: "aung aung",
    age: 20,
    address: "Mandalay",
  },
  {
    name: "su su",
    age: 18,
    address: "Taunggyi",
  },
  {
    name: "mg mg",
    age: 19,
    address: "Yangon",
  },
  {
    name: "tun tun",
    age: 20,
    address: "Bagan",
  },
];

const m_ap = map_arr.map((user) => {
  return user.name;
});
console.log(m_ap); // Return a new array

let index_of = in_arr.findIndex((user) => user === "su su");
//or
let anoIndexOf = in_arr.indexOf("su su");

let find_index = map_arr.findIndex((user) => user.age === 20);
// Return single index and findIndex is higherOrder Function.  indexOf takes value to point out in array and string
console.log(find_index);

let find_method = map_arr.find((user) => user.age === 20); // Return single value
console.log(find_method);

let filter_method = map_arr.filter((user) => user.age === 20);
console.log(filter_method);
// If u don't define a variable in findIndex, it will return 'index and -1' | -1 is false;

// filter return new array with all found values
```

### _Some && Every method_

```javascript
//Return true or false
let some_test = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(some_test.every((v) => v > 5));
console.log(some_test.some((v) => v > 5));
```

### _Array Spreading_

` Array spread don't reference to the original, So if you changed sprTest, do not effect to the arr_spr`

```javascript
let arr_spr = ["aung", "ko", "su", "nu"];
let arr_spr2 = ["dog", "cow", "franki", "sammy", "bukky"];
let sprTest = [...arr_spr, "spreading", "good", ...arr_spr2];

let spr_obj = [
  {
    name: "aung aung",
    age: 20,
    address: "Mandalay",
  },
  {
    name: "su su",
    age: 18,
    address: "Taunggyi",
  },
];
let spr_objTest = { ...spr_obj[1], name: "ko ko" };
// if spread the object, it spreads object properties and can modify object values

let arraySpread = {
  arr: ["aung", "htun"],
  isCheck: true,
  school: {
    state: "အ.ထ.က (၁၂)",
    university: "Mandalay University",
  },
};
let arraySpreadDestru = { ...arraySpread, isCheck: false };

console.log(arraySpreadDestru);
```

### _Destructuring_

` In array destructuring, first is index 0 and second is index 1 like that`

```javascript
const destru = ["apple", "orange", "banana"];
const [mytel, mpt] = destru;
console.log(mytel, mpt);
```

`In object destructuring, use specific object property to destructure`

```javascript
const dest = {
  testDe: [1, 2, 3, 4],
  hayDE: { ishay: true },
};
const { hayDE } = dest;
console.log(hayDE.ishay);
```

### _Array Sorting_

```javascript
let arr_sort = [10, 6, 2, 5, 21, 34];

// Old method using Filter function
function filter(x, y) {
  return x - y;
}

arr_sort.sort(filter);
console.log(arr_sort);

arr_sort.reverse();
console.log(arr_sort);

//or

arr_sort.sort((x, y) => x - y);
console.log(arr_sort);
```

</p>
</details>

---

<details><summary>Javascript Object</summary>
<p>
<br>

## JS Object

```javascript
let obj_user = {
  user_name: "mg mg",
  age: 20,
  relationship: false,
  diploma: ["MUFL", "Japanese N3", "Web Application & Development"],
  family: {
    father: "U Ba",
    mother: "Daw Mya",
    sister: "Su Su",
  },
  user_fun: function () {
    console.log(this.user_name + " is " + this.family.father + " son.");
  }, // This is called Method
};

obj_user.user_name = "Tun Tun"; // Change the object property value
// obj_user['user_name'] = 'Tun Tun';

console.log("I'm studying " + obj_user.diploma[2]);
console.log(obj_user.user_fun());
```

</p>
</details>

---

<details><summary>Property short-hand</summary>
<p>
<br>

## Property short-hand

```javascript
Property short-hand
let t1 = "wailwin";
let t2 = "ddkf";
let t3 = {
  t1, // This will be
  t2, // t1 : 'wailwin', t2 : 'ddkf'
};
```

</p>
</details>

---

<details><summary>Truthy & Falsy</summary>

<p>
<br>

## Truthy & Falsy

`In JavaScript, 0,undefined, empty string and null are only false. Remainings are true such as empty list, empty object`

```javascript
var obj = {};
var something = {
  age: 34,
};
console.log("obj && something ==>", obj && something);

var falsethy = 0;
console.log("falethy && something ==>", falsethy && something);

console.log("obj || something ==>", obj || something);
console.log("falsethy || something ==>", falsethy || something);

// if on the left side of getName() is false, works on the right side.
const name = getName() || "Lewis";
```

</p>
</details>

---

<details><summary>Control Flow</summary>
<p>
<br>

## Control flow

Control flow are =>

- if, if else, if else if else, switch (are also called conditional statement)
- for, for in , forEach, while, do while (are also called loop)

### _If Else_

```javascript
let flow_age = 20;

if (flow_age === 5) {
  console.log("Age is 5");
} else if (flow_age === 10) {
  console.log("Age is 10");
} else if (flow_age === 15) {
  console.log("Age is 15");
} else if (flow_age === 20) {
  console.log("Age is 20");
} else {
  console.log("Age is over 20!");
}
```

### _Switch_

```javascript
let switch_color = "green";
let switch_value;

switch (switch_color) {
  case "yellow":
    console.log("It is yellow");
    break;
  case "brown":
    console.log("It is brown");
    break;
  case "orange":
    console.log("It is orange");
    break;
  case "red":
    console.log("It is red");
    break;
  default:
    console.log("I can't guess!");
    break;
}
```

```javascript
switch (switch_color) {
  case "yellow":
    switch_value = "It is yellow";
    break;
  case "green":
    switch_value = "It is green";
    break;
  case "brown":
    switch_value = "It is brown";
    break;
  case "red":
    switch_value = "It is red";
    break;
  default:
    switch_value = "I can't guess!";
    break;
}
```

### _For Loop_

```javascript
//for (initialization or starting point; condition or boolean expression; increment)
for (let i = 1; i < 11; i++) {
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  console.log("hello world " + i);
}
```

### _While Loop_

```javascript
let x = 5;      // Initialization or Starting Point
while (x <10){  // Condition or Boolean Expression
    ...;
    ...;
    x++;        // Increment
}
```

```javascript
let while_var = 3;
while (while_var < 6) {
  console.log("While Loop " + while_var);
  while_var++;
}
```

```javascript
let while_obj = [
  {
    hay: "Aung Aung",
  },
  {
    hay: "Su Su",
  },
  {
    hay: "Mg Mg",
  },
]; // Like JSON Array
let while_x = 0;
while (while_x < while_obj.length) {
  console.log("Names are " + while_obj[while_x].hay);
  while_x++;
}
```

### _Do While Loop_

```javascript
let x = 1; // Initialization or Starting Point
do{
  ...;
  ...;
  x++; // Increment
}while (x < 5); // Condition or Boolean Expression
```

```javascript
let do_var = 3;
do {
  console.log("Do While Loop " + do_var);
  do_var++;
} while (do_var < 6);
```

`do while loop is using when at least one time want to work`

```javascript
let do_x = 1001;
do {
  console.log("Print out even condition is false in do while loop!");
} while (do_x < 100); // Condition or Boolean Expression is False
```

### _forEach_

```javascript
let each_var = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
let each_split = each_var.split(" ");
each_split.forEach((value) => console.log(value));
each_split.forEach((value, i) => console.log(value + " " + i));
for (let i = 0; i < each_split.length; i++) {
  console.log(each_split[i] + " " + i);
}
let while_each = 0;
while (while_each < each_split.length) {
  console.log(each_split[while_each] + " " + while_each);
  while_each++;
}
```

### _for in loop_

```javascript
for (variable in array_or_abject){
  ...; // Return the index in array and key in object
  ...;
}
```

```javascript
let in_arr = ["mg myg", "aung aung", "su su", "tun tun"];
let in_obj = {
  in_name: "wai lwin phyo",
  age: 20,
  university: "Mandalay University",
};

for (i in in_arr) {
  console.log(in_arr[i]);
}
for (i in in_obj) {
  console.log(in_obj[i]);
}
```

Notes for in, for of, forEach, map()

- for in => object ,array object, array, string / return index for string and array | key for object
- for of => Array,String, Only iterable object | return values in both arr and obj | It can also use DOM that is HTMLCollection array
- foreach => Array, Only iterable object | return values in both arr and obj | Can use non-array iterable eg.DOM List that is querySelectorAll()
- map() => Only Array and return new array

### _Array Method_

```javascript
let map_arr = [
  {
    name: "aung aung",
    age: 20,
    address: "Mandalay",
    male: true,
  },
  {
    name: "su su",
    age: 18,
    address: "Taunggyi",
    male: false,
  },
  {
    name: "mg mg",
    age: 19,
    address: "Yangon",
    male: true,
  },
  {
    name: "tun tun",
    age: 20,
    address: "Bagan",
  },
];

const m_ap = map_arr.map((user) => user.name);
console.log(m_ap); // Return a new array

let index_of = in_arr.findIndex((user) => user === "su su");
//or
let anoIndexOf = in_arr.indexOf("su su");

let find_index = map_arr.findIndex((user) => user.age === 20);
// Return single index and findIndex is higherOrder Function.  indexOf takes value to point out in array and string
// If u don't define a variable in findIndex, it will return 'index and -1' | -1 is false;
console.log(find_index);

let find_method = map_arr.find((user) => user.age === 20); // Return single value
console.log(find_method);

let filter_method = map_arr.filter((user) => user.age === 20);
console.log(filter_method);
// Here, map_arr is the iterable object and user is iterated value
//! filter return new array with all values of this truthy iterated value

// Informal style map and filter
let filterInformal = map_arr.filter((user) => user.male);
console.log(filterInformal);
// That'll produce an array that contains only those user object whose "male" property is true (or truthy)
// 'male' property of SuSu is flase and TunTun had no 'male' property means also flase. So it will return AungAung and MgMg that is truthy iterated value

let filterInformal1 = map_arr.filter((user) => !user.male);
console.log(filterInformal1);
// That'll produce an array that contains only those user object whose "male" property is flase (or flasy)
```

</p>
</details>

---

<details><summary>Types of Programming Language</summary>
<p>
<br>

## Types of Programming Language

- Statically typed programming language
- Dynamically typed programming language

`Statically typed programming language such as C++, C+, Java is that you must declare your data type when you assign your variable`

`Dynamically typed programming language such as JavaScript, Python, Php is that you don't need declare your data type because it will dynamically change automatic data types`

## Data Types

- Primitive Data Type are such as String, Number, Null, Undefined, Symbol, Boolean and it store in stack memory`

```js
var a = 25; //memory location store with value 25
console.log("Type of a ", typeof a);
```

- Reference Data Type are such as Object, Array, Function and store in heap memory`

```js
var a = 10;
var b = 10;

console.log("a==b ", a == b); // false
console.log("a==a", a == a); // true because they are reference
```

`All primitives are immutable, i.e., they cannot be altered... Eg. Using a string method doesn't mutate the string`

```javascript
let pre = "hay";
pre.toUpperCase();
// The variable may be reassigned a new value, but the existing value can not be changed
let pre_data = pre.toUpperCase();
console.log(pre);
console.log(pre_data);
```

`Objects, Arrays, and Functions can be altered itself, don't need to reassign the new variable and is called Reference Data Type`

```javascript
let ref_obj = [];
ref_obj.push("Apple");
console.log(ref_obj);
```

</p>
</details>

---

<details><summary>Math Function</summary>
<p>
<br>

## Math Function

```javascript
let math_x = 2.8;
let math_y = "2.8345";

console.log(Math.round(math_x));
//Approximate
console.log(Math.ceil(math_x));
// In decimal, takes maximun even over a little
// 0.01 ပိုသွားရင်တောင် အများဆုံးကိုယူတယ်
console.log(Math.floor(math_x));
// In decimal, takes minimun even over at most
// 0.99 ပိုနေရင်တောင် အနည်းဆုံးကိုယူတယ်
console.log(Math.abs(math_x));
// Absolute Value
console.log(Math.sqrt(math_x));
// Square root
console.log(Math.pow(3, 2));
// Power or Exponential Value
console.log(Math.max(8, 5));
// Maximum Value
console.log(Math.min(8, 5));
// Minimum Value

console.log(math_x.toString());
// Number to String
console.log(String(math_x));
// Number to String
console.log(Number(math_y));
// String to Number
console.log(parseInt(math_y));
// String to integer Number
console.log(parseFloat(math_y));
// String to float Number
console.log(parseFloat(math_y).toFixed(2));
//Two place of decimal

Number.isInteger(math_x);
// check isInteger

let n = 20;
console.log("Binary ", n.toString(2));
console.log("Octal ", n.toString(8));
console.log("Hexa ", n.toString(16));
```

</p>
</details>

---

<details><summary>Ternary Operator</summary>
<p>
<br>

## Ternary Operator

```javascript
let ter = 20;
let terna = ter === 21 ? "My name is Aung Aung" : "My name is Su Su";
console.log(terna);
```

</p>
</details>

---

<details><summary>Error Handling</summary>
<p>
<br>

```js
function div(left, right) {
  console.log("Hello");
  if (left == 0) {
    throw "Left operand is zero";
  }
  return left / right;
}

try {
  console.log(div(0, 0));
  // console.log(div(10,20));
} catch (e) {
  console.log("What up man ", e);
} finally {
  console.log("Finally Ever run");
}

console.log("End of code");
```

</p>
</details>

---

<details><summary>Function</summary>
<p>
<br>

## Function

```javascript
function fun(fun_name, place) {
  console.log(`Hay now ${fun_name} brown in the ${place}`);
}
fun("cow", "down town");
```

### _Function with default values_

```javascript
function fun1(
  fun_name1 = "cow",
  place1 = "down town",
  rhyme = "i found ur sound!"
) {
  console.log(`Hay now brown ${fun_name1} in the ${place1} ${rhyme}`);
}
fun1();
```

### _Function Expression is defined a variable of nameless function_

```javascript
let fun_exp = function () {
  console.log("This is function expression");
};
fun_exp();
```

### _Immediately Invokable Function Expressions (IIFEs)_

```javascript
(function (invoke = "Wailwinphyo") {
  console.log(
    `This is Immediately Invokable Function Expression! and Coder is ${invoke}`
  );
})("Kyaw kyi");
```

### _Function inside object or Methods_

```javascript
let fun_obj = {
  obj_name: "WailwinPhyo",
  university: "Mandalay",
  major: "Physics",
  myself: function () {
    console.log(
      `My name is ${this.obj_name} and I am studying in ${this.university} University ${this.major} major!`
    );
  },
};
fun_obj.myself();
```

</p>
</details>

---

<details><summary>Functional Programming Javascript</summary>
<p>
<br>

## Functional Programming Javascript

### _Function Statements or Function Declaration_

```javascript
aaa();
function aaa() {
  console.log("this is a function statement");
}
```

---

### _Function Expression_

```javascript
//bbb() can't do!
const bbb = () => {
  console.log("this is a function expression");
};
```

---

<b>Differences bewteen Function statements and Function Expression are </b>

- Function statement is in First Level Block Scope and can execute before function statement
- Function Expression is in Block Scope Level and first execute the bbb variable and will run line by line

---

### _Function Assigned to Variables_

- Functions are data types such as strings, arrays, and numbers.
- Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked!

```javascript
let plusFive = (number) => {
  return number + 5;
};
console.log(plusFive);
// f is assigned the value of plusFive
let f = plusFive;
plusFive(3);
// Since f has the function value, it can be invoked.
f(9);
```

---

### _Arguments && Parameters_

To note bad-boys

- arguments are just as variable name and it store value ==> Is passed into another function
- parameter are just as values and can use directly ==> Just passing into function

---

### _Call Back Function_

<b>
Callback Function is a function that is passed into another function as an arguments.
</b>

```javascript
const isEven = (n) => {
  return n % 2 === 0;
};
const printMsg = (callBack, num) => {
  const isEvenNum = callBack(num);
  console.log(`The number of ${num} is a even number : ${isEvenNum}`);
};
//Pass in isEven as the callBack function
printMsg(isEven, 4);
```

---

## _First Class Function_

- If Functions in programming language are treated like other variables, the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
- Javascript treat function as a <b>First-Class-Function.</b>
- Higher-Order-Function are only possible because of the first-class-function.

```javascript
const Arithmetics = {
  add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
  },
  substract: (a, b) => {
    return `${a} - ${b} = ${a - b}`;
  },
};
console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.substract(200, 100));

//In the above program, functions are stored as a variable in an object.
```

<br>
(Or Another ways to understand)

- Treating functions as values (first class), it easier to maintain.
- If we have a wrapped function and it needs to change, we need to change both the wrapped function and the call

```javascript
// We have this httpGet function
httpGet("/post/2", (json) => renderPost(json));

// But we need to change the renderPost function to receive not only the json, but also the error (err)
// We change the renderPost function and the calling
httpGet("/post/2", (json, err) => renderPost(json, err));

// Another approach is to treat functions as values and return the renderPost function
// This way we only need to change the renderPost function. The httpGet function stays the same
httpGet("/post/2", renderPost);
```

---

## _Higher Order Function_

- Functions can be assigned to variables in the same way that strings or arrays can.
- They can be passed into other functions as parameters or returned from them as well.
- A 'higher-order-function' is a function that accepts functions as arguments and/or returns a function

```javascript
//using callBack Function
let fff = [1, 2, 3, 4];
var tt = function (dog) {
  return dog % 2 === 0;
};
let dogs = fff.filter(tt);
console.log(dogs);
```

(or)

```javascript
//using Function as Argument
let fff = [1, 2, 3, 4];
let dogs = fff.filter(function (dog) {
  return dog % 2 === 0;
});
console.log(dogs);
```

(Or Another ways to understand)

- Higher-order functions are functions that work on other functions
- Meaning that they can take one or more functions as an argument and
  can also return a function as a result

```javascript
// Imagine you have this element in the HTML:
// <button id="btn"> Click me, yo! </button>

// Let's add a click event listener to the button

document.getElementById("btn").addEventListener("click", () => {
  console.log("You clicked me!");
});

// We can also extract the logger code in a function to be explicit

const logger = (message) => () => {
  console.log(message);
};
const clickLogger = logger("You clicked me");

document.getElementById("btn").addEventListener("click", clickLogger);

// addEventListener is a high order function
```

---

### _Function returning another function_

```javascript
const greet = function (name) {
  return function (m) {
    console.log(`hi, ${name} , ${m}`);
  };
};

const greet_mess = greet("ABC");
greet_mess("Welcome to functional programming");
```

---

### _Passing Function as an argument_

```javascript
function greet(name) {
  return `hi ${name}`;
}
function greet_name(greeting, message, name) {
  console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, "Welcome to fpl");
```

---

### _Difference Between First-Class-Function and Higher-Order-Function_

First-Class-Function

- Function are treated as a variable that can be assigned to any other variable or passed as an argument.

- The first-class concept only has to do with functions in programming languages

Higher-Order-Function

- Function receives another function as an argument or returns First-Order a new function or both.

- The higher-order concept can be applied to functions in general, like functions in the mathematical sense.

---

## [See more functional programming lessons](https://github.com/jackwill99/javascriptFunctionalLessons)

</p>
</details>

---

<details><summary>Date Time Object</summary>
<p>
<br>

## Date Object

```javascript
let now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

let now_date = new Date("4-7-2001 11:10");
// new Date("Month-Day-Year")

console.log(now_date);
now_date.setDate(14);
now_date.setMonth(10);

// Can access the integer between 0 to 11
// It also have setFullYear(), setHours(), setMinutes(), setSeconds() , setMilliseconds()

console.log(now_date);
```

</p>
</details>

---

<details><summary>DOM (Javascript Document Object Models)</summary>
<p>
<br>

## Query Selector

```javascript
let query_select = document.querySelectorAll(".query_select li");
query_select.forEach((x) => {
  let que = x.querySelector("a").textContent;
  console.log(que);
});

// Or you can also use for loop method!

for (let i = 0; i < query_select.length; i++) {
  let que = query_select[i].querySelector("a").textContent;
  console.log(que);
}
```

Query Select with data arrtibute

```javascript
let data_page = document.querySelector(`[data-page="four"]`);
console.log(data_page);
```

Difference between getElementById and getElementsByClassName

- getElementById get the first element of query

- getElementsByClassName get all the elements of queries like querySelectorAll() and return HTMLCollection array

<br>

Difference between getElementsByClassName and querySelectorAll

- forEach can loop only in querySelectorAll
- Dynamically update DOM(query element) can access only in getElementsByClassName
- If you want update with querySelectorAll, select the parent element as par variable and par.children.length

<br>

### _Travesting Nodes_

They are Node types -

- 1- Element;
- 2- Attribute (deprecate)
- 3- Text Not
- 8- Comment
- 9- Document itself
- 10- DOCTYPE

```javascript
let trav = document.querySelector(".query_select");
for (let i = 0; i < trav.childNodes.length; i++) {
  let ch_node = trav.childNodes[i];
  // ChildNodes return NodeList[...]
  console.log(ch_node.nodeType);
  if (ch_node.nodeType === 1) {
    console.log(ch_node.childNodes[0].textContent);
  }
}

console.log(trav.childNodes[0].nextSibling.nextSibling.nextSibling);
console.log(trav.childNodes[5].previousSibling.previousSibling);
console.log(trav.childElementCount);
// Count element

console.log(trav.firstElementChild.childNodes[0].textContent);
console.log(
  trav.firstElementChild.nextSibling.nextSibling.childNodes[0].textContent
);
console.log(trav.children[3].childNodes);
console.log(trav.children[3].childNodes[3].textContent);
```

You can also use `.children` and it will return HTMLCollections array of it's children elements

```javascript
let trav = document.querySelector(".query_select");
console.log(trav.children);
```

### _Create Element_

```javascript
let cre_app = document.querySelector(".query_select");

// <li><a href="#">Create Element</a></li>

let text_node = document.createTextNode("Create Element");
let aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.appendChild(text_node);

console.log(aTag);

let liTag = document.createElement("li");
liTag.appendChild(aTag);
cre_app.prepend(liTag);
```

### _Replace Element_

```javascript
let oldH1 = document.querySelector(".head");
let newH1 = document.createElement("h1");
let rep_text = document.createTextNode("Hello My Friend!");
newH1.appendChild(rep_text);
newH1.className = "babi";
newH1.id = "bibi";
// To replace element , we need parrent element of it!

let rep_parent = oldH1.parentNode;
// same like rep_parent = document.querySelector("body") or can use parentElement

rep_parent.replaceChild(newH1, oldH1);
```

`Difference between className and classList`

```javascript
trav.className.replace("query_select", "selected");
console.log(trav.classList);
// but it won't change

trav.classList.replace("query_select", "selected");
console.log(trav.classList);
// it works
```

### _execCommand_

execCommand specifies the `name of the command` to execute on the `selected section`.

`Some of the commands are (copy, cut, delete, paste, redo, undo, bold, etc...)`

```javascript
function copyToCliboard(hex) {
  let tarea = document.createElement("textarea");
  // Create a textarea tag

  tarea.value = hex.innerText;
  // Set the value of textarea

  document.body.appendChild(tarea);
  // Set textarea tag to document

  tarea.select();
  // textarea value select

  document.execCommand("copy");
  // Now copy the selected value

  document.body.removeChild(tarea);
  // Remove the textarea
}
```

</p>
</details>

---

<details><summary>Javascript DOM Events</summary>
<p>
<br>

## Javascript Events

### _AddEventListener with Events_

`There are more events : click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove`

```javascript
let click_me = document.querySelector(".btn");
click_me.addEventListener("dblclick", (e) => {
  console.log(e.target);
  alert("123");
});

// Another Ways
click_me.ondblclick = () => alert("123");
```

### _DOMContentLoaded Event_

```javascript
addEventListener("DOMContentLoaded");
```

### _Event Bubbling_

` In nested events, events from the inner element up through parents like a bubble in the water , this process is called 'bubbling'. If use event.stopPropagation(), events stop propagate(ပျံ့နှံ့) from this element event to outer event`

### _Form Events_

` Form events are : keydown, keyup, keypress, focus, blur, cut, paste, change`

```javascript
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
click_me.addEventListener("click", (e) => {
  e.preventDefault();
  // This prevents default values in Form such as action link(google.com)
  console.log(input1.value);
});
input1.addEventListener("blur", (e) => {
  console.log(input1.value);
});
```

### _GetArrtibutes from HTML Element_

```javascript
console.log(input1.id, input1.type, input1.autocomplete);
```

</p>
</details>

---

<details><summary>BOM (Javascript Browser Object Models)</summary>
<p>
<br>

## BOM

### _Navigator_

```javascript
//Check Device Type
var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macOs = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
  windows = ["Win32", "Win64", "Windows", "WinCE"],
  ios = ["iPhone", "iPad", "iPod"],
  os = null;

if (macOs.includes(platform)) {
  os = "MacOs";
} else if (windows.includes(platform)) {
  os = "window Os";
} else if (ios.includes(platform)) {
  os = "IOS";
} else if (/Android/.test(userAgent)) {
  os = "Android";
} else if (!os && /Linux/.test(platform)) {
  os = "Linux";
}
```

## JS Timing

### _setInterval_

```javascript
let count;
// to access global variable

let test;
// this also

button.addEventListener("click", function (e) {
  e.preventDefault();
  count = val.value;
  inter();
});

change.addEventListener("click", function () {
  clearInterval(test);
  // to change setInterval at first you must clearInterval

  count = val.value;
  inter();
});

function inter() {
  test = setInterval(function () {
    console.log(count);
  }, count);
}
```

### _setTimeout_

```javascript
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  // add zero in front of numbers < 10
  return i;
}
```

</p>
</details>

---

<details><summary>LocalStorage & Session Storage</summary>
<p>
<br>

### _LocalStorage_

```javascript
let form = document.querySelector("form");
let del = document.querySelector("#delete");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = input1.value;
  let age = input2.value;
  let user = {
    name,
    age,
  };
  addData(user);
});
let addData = (obj) => {
  let data = JSON.stringify(obj);
  localStorage.setItem("local", data);
};
let getData = () => {
  let get_data = localStorage.getItem("local");
  let data_obj = JSON.parse(get_data);
  return data_obj;
};
getData();
let cleared = () => {
  localStorage.removeItem("local");
};
del.addEventListener("click", cleared);

// Local/Session Storage update
// setItem to the same key with the new value, if the same key name you store, the last value will be store in that
// localStorage.setItem('local', 'updating storage')
```

### _Session Storage_

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val1 = input1.value;
  let val2 = input2.value;
  let ses_obj = {
    val1,
    val2,
  };
  sesDatadb(ses_obj);
});
let ses_save = (save) => {
  let save_data = JSON.stringify(save);
  sessionStorage.setItem("user data", save_data);
};
let sesDatadb = (obj) => {
  let getses = sesGetData();
  if (getses === null) {
    let ses_arr = [];
    ses_arr.push(obj);
    ses_save(ses_arr);
  } else {
    let check = getses.findIndex((usr_name) => usr_name.val1 === obj.val1);
    if (check === -1) {
      if (obj.val2 > 18) {
        getses.push(obj);
        ses_save(getses);
      } else {
        alert("Your age is under 18!");
      }
    } else {
      alert("User already exist with that name!");
    }
  }
};
let sesGetData = () => {
  let usr_data = sessionStorage.getItem("user data");
  let real_data = JSON.parse(usr_data);
  return real_data;
};
```

</p>
</details>

---

<details><summary>Object Oriented Programming</summary>
<p>
<br>

## OOP JavaScript ==> Object Oriented Programming

In ECMAS 5 , create OOP with `Prototype`

In ECMAS 6 , create OOP with `Class`

### _JS Constructor Function/Method_

```javascript
function ConstructorName(object_property_variables) {
  this.object_property = object_property_variable;
  //"this" is current constructor object or current object
}
```

<br>

```javascript
function Person(val1, val2) {
  this.name = val1;
  this.age = new Date(val2);
  this.urself = () => {
    let my_date = Date.now() - this.age.getTime();
    let de_date = new Date(my_date);
    return de_date.getUTCFullYear() - 1970;
  };
}
let person1 = new Person("KgKg", "11/15/2001");
console.log(person1);
console.log(person1.urself());
```

### _Prototype_

Two type of Prototype are `Default.Object.Prototype & Current.Object.Prototype`

```javascript
function Pro(value1, value2) {
  this.name = value1;
  this.own = value2;
}
Pro.prototype.myown = function () {
  return `I have a new ${this.own}`;
};
Pro.prototype.myself = function () {
  return `My name is ${this.name} & I have a ${this.own}`;
};
let kyaw = new Pro("Kyaw Kyi", "Toyota Car");
console.log(kyaw.myown());
```

### _Prototype Inheritance (Inheritance == အမွေဆက်ခံတာ)_

```javascript
function Proin(pro1, pro2) {
  this.name = pro1;
  this.university = pro2;
}
Proin.prototype.himself = function () {
  return `My name is ${this.name} & I am studying in ${this.university} University`;
};

function Aung(in1, in2) {
  Proin.call(this, in1, in2);
  // Aung က Proin ရဲ့ Inheritance ဖြစ်လို့ Proin မှာရှိတဲ့ Properties & Values တွေ သူကလက်ခံထားတယ် Prototype တေ့ာမပါသေးဘူး
}
Aung.prototype = Object.create(Proin.prototype);
// အခုမှ Proin ရဲ့ Prototype method ကို ရရှိသွား

let aung = new Aung("AgAg", "Mandalay");
console.log(aung.university);
console.log(aung.himself());
```

### _Overwrite Constructor and Prototype Method_

```javascript
function Susu(in1, in2, type) {
  Proin.call(this, in1, in2);
  this.gender = type;
  // Susu မှာ တန်ဖိုးတခုပိုရှိနေမယ်ဆိုရင် , overwrite constructor
}

Susu.prototype = Object.create(Proin.prototype);

Susu.prototype.himself = function () {
  return `My name is ${this.name} and I am studying in ${this.university} University. I am a ${this.gender}`;
};
// Overwrite the Prototype Method of Susu

let susu = new Susu("SuSu", "Yangon", "Girl");
// Susu have one more values other than

console.log(susu.himself());
console.log(susu.gender);
```

### _Another Ways Of Create Prototype_

```javascript
const carprototype = {
  getname: function () {
    return this.name;
  },
  getspeed: function () {
    return this.speed;
  },
};

let car = Object.create(carprototype);
car.name = "Toyota";
car.speed = 190;
console.log(car.speed);
console.log(car.getname());

let bar = Object.create(carprototype, {
  name: { value: "Suzuki" },
  speed: { value: 180 },
});
console.log(bar.name + " speed is " + bar.getspeed());
```

## ECMAS 6 ==> Class

```javascript
class Studentclass {
  static name = "WaiKyi";
  // for only static member

  static age = 10;
  // it also

  constructor(stu1, stu2) {
    console.log("Hay wailwinphyo");
    this.name = stu1;
    this.age = stu2;
  }

  info() {
    return `Student ${this.name} of age is ${this.age}`;
  }

  static getinfo() {
    console.log(`Student ${this.name} of age is ${this.age}`);
  }
}
new Studentclass();
// When creat a new object, Constructor work automatically

Studentclass.getinfo();
// Can call method directly because it is static member

let agyi = new Studentclass("Aung Gyi", 20);
console.log(agyi.age);
console.log(agyi.info());
```

### _Class Inheritance overwrite constructor and method_

```javascript
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  getspeed() {
    console.log(`This is parrent class & ${this.speed}`);
  }
}

class Toyota extends Car {
  constructor(cval1, cval2, cval3) {
    super(cval1, cval2);
    this.price = cval3;
  }
  getspeed() {
    console.log(`This is overwriting of car method & ${this.price}`);
  }
}

class Suzuki extends Car {
  constructor(cval1, cval2, cval3) {
    super(cval1, cval2);
    this.manufacture = cval3;
  }
}

let toyo = new Toyota("Toyota", 180, 3000);
console.log(toyo.price);

toyo.getspeed();

let suzu = new Suzuki("Suzuki", 150, "Japan");

suzu.getspeed();

console.log(suzu.manufacture);
```

</p>
</details>

---

<details><summary>Promise, Async and Await</summary>
<p>
<br>

### _Manually test_

`Code runs one by one line statement`

#### **Assume setTimeout is the time to take getting data from server**

```javascript
console.log("Start");

// moves temporarily to the WebAPIs and runs straight forward
setTimeout(() => {
  console.log("Now Doing Staff");
}, 2000);
// when finish, moves to the mainScript() and runs

console.log("End");
```

### _Testing with Promise_

```javascript
const loginUser = new Promise((resolve) => {
  const name = "Dev Ed";
  console.log("now waiting for deciding");
  setTimeout(() => {
    resolve(name);
  }, 2000);
});

loginUser.then((user) => console.log(user));
```

### _Promise Refactor_

```javascript
function loginUser(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ email, password });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("We access your email!");
      resolve(["video1", email]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`email of the video is ${video}`);
    }, 2000);
  });
}

loginUser("wailwinphyo@gmail.com", "fuckUBro")
  .then((usr) => getUserVideos(usr.email))
  // usr is resolve values of loginUser and pass parameter into next function

  .then((video) => videoDetails(video[1]))
  // video is resolve values of getUserVideos above function and pass parameter into next function

  .then((detail) => console.log(detail));
// detail is resolve values of videoDetails
```

### _Promise All_

Promise All return data list

```javascript
const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("youtube staff is working");
    resolve([1, 2, 3, 4]);
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("fb staff is now and");
    resolve({ user: "Name" });
  }, 5000);
});

Promise.all([yt, fb]).then((result) => {
  console.log(result);
});
```

## XMLHttpRequest

```javascript
let url = "https://jsonplaceholder.typicode.com/posts";
let xml = document.querySelector("#xml");

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
// open method takes three parameters ==> method, url, asynchronous(true or false)

xhr.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let g_store = this.responseText;
    let result_data = JSON.parse(g_store);
    let str = "";
    result_data.forEach((da) => {
      str += `
                <h1>${da.title}<h1>
            `;
    });
    xml.innerHTML = str;
  }
};
xhr.send();

// you can also use onload instad of onreadystatechange
xhr.onload = function () {
  if (this.status === 200) {
    console.log(this.responseText);
  }
};
```

## Promise

Promise works auto Asynchronous although isn't Asynchronous Code.

```javascript
let pro = new Promise((resolve, reject) => {
  xhr.open("GET", url);
  xhr.onload = function () {
    if (this.status === 200) {
      resolve(this.responseText);
    } else {
      reject("Failed to load");
    }
  };
  xhr.send();
});
pro.then((data) => console.log(data)).catch((err) => console.log(err));

console.log("This works ahead Promise code");
```

## Fetch

```javascript
fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw Error("Could not fetch the data for that resource");
    }
    return res.text();
  })
  // res Response Json & Text ; you can console.log() this in prototype

  // In also this case; res.text() also Response the promise type

  .then((result) => console.log(result))
  // res & res.text() are Response promise type; So we change promise like this

  .catch((err) => {
    console.log(err);
    console.log("Failed to load");
  });
```

## Async Await Function

```javascript
let data_url = "https://gorest.co.in/public-api/posts";
let xData = new XMLHttpRequest();
async function as() {
  let goRest = new Promise((resolve, reject) => {
    xData.open("GET", url);
    xData.onload = function () {
      if (this.status === 200) {
        resolve(this.responseText);
      } else {
        reject("Failed to load");
      }
    };
    xData.send();
  });
  let goReturn = await goRest;
  return goReturn;
}
as()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

## Promise & async await Function

```javascript
function add(nums) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(nums)) {
      let result = nums.reduce((a, b) => a + b);
      resolve(result);
    } else {
      reject("Something was wrong");
    }
  });
}

// To catch the reject of Promise, use (try catch)
// sum function wait until the return of add function
async function sum(nums) {
  try {
    let result = await add(nums);
    console.log(`Result is ${result}`);
  } catch {
    console.log("Something was wrong");
  }
}

sum([1, 2]);
console.log("This works ahead");
```

## Promises and Fetch Api

```javascript
function dataFetch() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res.text()))
      .catch((err) => reject(err));
  });
}
dataFetch()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

## Post to Api

```javascript
fetch(url, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

</p>
</details>

---
