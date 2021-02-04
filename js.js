//?                                     //////////////////////////
//!                                     //   JavaScript Notes   //
//*                                     //////////////////////////

//? Declare, Assign And Reassign

let hay;    //! Declare the variable
hay = "wailwinphyo";    //! Assign the variable
hay = "WaiLwinPhyo";               //! Reassign the variable

let hello = "wailwinphyo"; //! Initialize the variable
hello = "Kyaw Kyi";         //! Reassign the variable



//? JS Array

//! JS Array can access Multiple values 
let names = ["wailwinphyo", "kyawkyi", true, 20]    //! Creation withArray Initialization
let name_con = new Array(123, 23, "hello", false);   //! Creation from Array Constructor
console.log(name_con) 
names[1] = "waikyi";            //! Change the array or Overwrite the array
names.push("pushing_in_array");             //!adding the values in Array
console.log(names)
let array_number = [
    [1,2,[3,4,5],6,7],
    [8,9,10]
];
console.log(array_number[0][2][1])



//? JS Object

let obj_user = {
    user_name: "mg mg",
    age: 20,
    relationship: false,
    diploma: ["MUFL", "Japanese N3", "Web Application & Development"],
    family: {
        father: "U Ba",
        mother: "Daw Mya",
        sister: "Su Su"
    },
    user_fun: function(){
        console.log(this.user_name+" is "+this.family.father+" son.");
    }    //! This is called Method
};
obj_user.user_name = "Tun Tun";             //! Change the object property value
console.log("I'm studying "+obj_user.diploma[2])
console.log(obj_user.user_fun())



//? Control Flow
/*
! Control flow are => 
! if, if else, if else if else, switch (are also called conditional statement)
! for, for in , forEach, while, do while (are also called loop)
*/

let flow_age = 20;
if (flow_age === 5){
    console.log("Age is 5");
}else if (flow_age === 10){
    console.log("Age is 10");
}else if (flow_age === 15){
    console.log("Age is 15");
}else if (flow_age === 20){
    console.log("Age is 20");
}else {
    console.log("Age is over 20!");
}


let switch_color = "green";
let switch_value;
switch(switch_color){
    case "yellow" : console.log("It is yellow");break;
    case "brown" : console.log("It is brown"); break;
    case "orange" : console.log("It is orange"); break;
    case "red" : console.log("It is red"); break;
    default : console.log("I can't guess!");break;
}

switch(switch_color){
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
console.log(switch_value)


for (let i = 1; i < 11; i++){          
    //*for (initialization or starting point; condition or boolean expression; increment)
    console.log(i)
}
for (let i = 0; i < 10 ; i++){
    console.log("hello world "+ i)
}


/*
?While Looping 
let x = 5;      //! Initialization or Starting Point
while (x <10){  //! Condition or Boolean Expression
    ...;
    ...;
    x++;        //! Increment
}
*/

let while_var = 3;
while (while_var < 6){
    console.log("While Loop "+ while_var);
    while_var++;
}


/*
?Do While Looping
let x = 1;          //! Initialization or Starting Point
do{
    ...;
    ...;
    x++;            //! Increment
}while (x < 5);     //! Condition or Boolean Expression
*/

let do_var = 3;
do{
    console.log("Do While Loop "+do_var);
    do_var++;
}while (do_var < 6);




/*
?for loop is using when starting and ending point already know
?while loop is using when end point is not sure (you don't know end point)
?do while loop is using when at least one time want to work
*/



let while_obj = [
    {
        hay: "Aung Aung",
    },
    {
        hay:"Su Su",
    },
    {
        hay: "Mg Mg",
    }
];      //! Like JSON Array
let while_x = 0;
while (while_x < while_obj.length){
    console.log("Names are " +while_obj[while_x].hay);
    while_x ++;
}


let do_x = 1001;
do{
    console.log("Print out even condition is false in do while loop!");
}while (do_x < 100);    //! Condition or Boolean Expression is False



//? forEach

    
let each_var = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quod explicabo autem velit nisi similique ipsa dolorem sequi. Doloremque aliquam quo unde deserunt delectus nulla, itaque necessitatibus quos culpa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quod explicabo autem velit nisi similique ipsa dolorem sequi. Doloremque aliquam quo unde deserunt delectus nulla, itaque necessitatibus quos culpa?" ;
let each_split = each_var.split(" ");
each_split.forEach(value => console.log(value))
each_split.forEach((value,i) => console.log(value+" "+i))
for (let i = 0; i < each_split.length; i++){
    console.log(each_split[i] + " " +i);
}
let while_each = 0;
while (while_each < each_split.length){
    console.log(each_split[while_each]+ " "+ while_each);
    while_each ++;
}



//? for in loop
/*
for (variable in array_or_abject){
    ...;               //! Return the index in array and key in object
    ...;
}
*/
let in_arr = ["mg myg", "aung aung", "su su", "tun tun"];
let in_obj = {
    in_name : "wai lwin phyo",
    age : 20,
    university: "Mandalay University"
}
for (i in in_arr){
    console.log(in_arr[i]);
}
for (i in in_obj){
    console.log(in_obj[i]);
}



//?Different ways of looping Array of object
let map_arr = [
    {
        name : "aung aung",
        age : 20, 
        address : "Mandalay"
    },
    {
        name : "su su",
        age : 18,
        address : "Taunggyi"
    }, 
    {
        name : "mg mg",
        age  : 19,
        address : "Yangon"
    }, 
    {
        name : "tun tun", 
        age : 20,
        address : "Bagan"
    }
]
map_arr.map(user => console.log(user))

let find_index = map_arr.findIndex(user => user.age === 20)
console.log(find_index)

let filter_method = map_arr.filter(user => user.age === 20)
console.log(filter_method)
//! If u don't define a variable in findIndex and filter, it will return 'true and false'



//Todo: You should know your typed of programming languages!
//* Statically typed programming language
//* Dynamically typed programming language

//! Statically typed programming language such as C++, C+, Java is that you must declare your data type when you assign your variable
//! Dynamically typed programming language such as JavaScript, Python, Php is that you don't need declare your data type because it will change dynamically automatic 



//Todo: You also should know your data typed
//* Primitive Data Type are such as String, Number, Null, Undefined, Symbol, Boolean and it store in stack memory
//* Reference Data Type are such as Object, Array, Function and store in heap memory

//!All primitives are immutable, i.e., they cannot be altered... Eg. Using a string method doesn't mutate the string
let pre = "hay"
pre.toUpperCase()
//!The variable may be reassigned a new value, but the existing value can not be changed
let pre_data = pre.toUpperCase()
console.log(pre)
console.log(pre_data)


//!Objects, Arrays, and Functions can be altered itself, don't need to reassign the new variable and is called Reference Data Type
let ref_obj = [];
ref_obj.push("Apple");
console.log(ref_obj)



//? Math function
let math_x=2.8
let math_y="2.8345"

console.log(Math.round(math_x))    //!Approximate
console.log(Math.ceil(math_x))     //!In decimal, takes max even over a little
//! 0.1 ပိုသွားရင်တောင် အများဆုံးကိုယူတယ်
console.log(Math.floor(math_x))    //!In decimal, takes min even over at most
//! 0.9 ပိုနေရင်တောင် အနည်းဆုံးကိုယူတယ်
console.log(Math.abs(math_x))      //!Absolute Value
console.log(Math.sqrt(math_x))     //!Square root 
console.log(Math.pow(3,2))      //!Power or Exponential Value
console.log(Math.max(8,5))    //!Maximum Value
console.log(Math.min(8,5))    //!Minimum Value

console.log(math_x.toString())     //!Number to String
console.log(String(math_x))        //!Number t String
console.log(Number(math_y))       //!String to Number
console.log(parseInt(math_y))     //!String to integer Number
console.log(parseFloat(math_y))   //!String to float Number
console.log(parseFloat(math_y).toFixed(2))   //!Two place of decimal



//? Ternary Operator
let ter = 20;
let terna = ter ===21 ? "My name is Aung Aung" : "My name is Su Su";
console.log(terna)




//? Function

function fun (fun_name, place) {
    console.log(`Hay now ${fun_name} brown in the ${place}`);
} 
fun("cow", "down town");

//! Function with default values
function fun1 (fun_name1 = "cow", place1 = "down town", rhyme = "i found ur sound!"){
    console.log(`Hay now brown ${fun_name1} in the ${place1} ${rhyme}`)
}
fun1();

//! Function Expression is defined a variable of nameless function 
let fun_exp = function () {
    console.log("This is function expression")
};
fun_exp();

//! Immediately Invokable Function Expressions (IIFEs)
(function (invoke = "Wailwinphyo"){
    console.log(`This is Immediately Invokable Function Expression! and Coder is ${invoke}`);
})("Kyaw kyi");

//! Function inside object or Methods
let fun_obj = {
    obj_name : "WailwinPhyo",
    university : "Mandalay", 
    major : "Physics",
    myself : function(){
        console.log(`My name is ${this.obj_name} and I am studying in ${this.university} University ${this.major} major!`)
    }
};
fun_obj.myself()



//? Array Functions     
let arr_fun = [9,1,2,3,4,5,6,7,8,9]
console.log(arr_fun.length);         //! Length of Array
console.log(arr_fun.toString());     //! Array to String
console.log(Array.isArray(arr_fun)); //! Checking out Array
arr_fun[5] = 100;
console.log(arr_fun)                 //! Overwrite or Change the Array
console.log(arr_fun.indexOf(100))    //! Find the index of Array Value
arr_fun.push("Hay")                  //! Adding at the end of Array
console.log(arr_fun)
arr_fun.unshift("Hay")          //! Adding at the beginning of Array
console.log(arr_fun)
arr_fun.pop("Hay")                   //! Pop out at the end of Array
console.log(arr_fun)
arr_fun.shift("Hay")                 //! Shift out at the beginning of Array
console.log(arr_fun)
arr_fun.splice(2,3)                  //! array.splice(starting index, count) Cutting arr value in Array
console.log(arr_fun)
arr_fun.reverse()                    //! Reverse the Array
console.log(arr_fun)
let arr_fun1 = [200, 300, 400]
let arr_combine = arr_fun.concat(arr_fun1)      //! Combining the Arrays
console.log(arr_combine)


//? Date Object
let now  = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getMonth()+1);
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

let now_date = new Date("4-7-2001 11:10");          //! new Date("Month-Day-Year")
console.log(now_date);
now_date.setDate(14);
now_date.setMonth(10);               //! Can access the integer between 0 to 11
//Todo: It also have setFullYear(), setHours(), setMinutes(), setSeconds() , setMilliseconds()
console.log(now_date);


//? Array Sorting

let arr_sort = [10, 6, 2, 5, 21, 34];
//! Old method using Filter function
function filter(x,y){
    return x - y;
}
arr_sort.sort(filter)
console.log(arr_sort)
//! New method
arr_sort.reverse()
console.log(arr_sort)
arr_sort.sort((x,y) => x - y)
console.log(arr_sort);

function fun_sort (num){
    return num < 20;
}
console.log(arr_sort.find(fun_sort));
//! You  can write also arr_sort.find(num => num < 20)
console.log(arr_sort.filter(so => so< 20))


//? String Method
let string_method="hello my friend"
console.log("Uppercase is "+string_method.toUpperCase())
console.log("Uppercase is "+string_method.toLowerCase())
console.log("Substring is "+string_method.substring(1,4))           //! substring(start_index, end_index)
console.log("Slice is "+string_method.slice(1,4))                   //! slice(start_index, end_index)
//!Difference between slice and substring is slice can assess negative index and substring can't.
console.log("Finding Element Town is "+string_method.includes("friend"))
console.log("Replacing down : "+string_method.replace("my","our"))
console.log(string_method)


//?Query Selector

let query_select = document.querySelectorAll(".query_select li")
query_select.forEach(x => {
    let que = x.querySelector("a").textContent;
    console.log(que);
});
/*
! You can also use for loop method!
for (let i = 0; i < query_select.length; i++){
    let que = query_select[i].querySelector("a").textContent;
    console.log(que)
}
*/
let data_page = document.querySelector(`[data-page="four"]`);       //Todo: Don't forget
console.log(data_page);


//? Travesting Nodes
/*
! They are Node types -->>
* 1- Element;
* 2- Attribute (deprecate)
* 3- Text Not
* 8- Comment
* 9- Document itself
* 10- DOCTYPE-
 */

let trav = document.querySelector(".query_select");
console.log(trav.childNodes.length)                    //! Length is undefined
for (let i =0; i < trav.childNodes.length; i++){
    let ch_node = trav.childNodes[i];       //! ChildNodes return NodeList[...]
    console.log(ch_node.nodeType)
    if (ch_node.nodeType === 1){
        console.log(ch_node.childNodes[0].textContent)
    }
}

console.log(trav.childNodes[0].nextSibling.nextSibling.nextSibling);
console.log(trav.childNodes[5].previousSibling.previousSibling);
console.log(trav.childElementCount)         //! Count element
console.log(trav.firstElementChild.childNodes[0].textContent)
console.log(trav.firstElementChild.nextSibling.nextSibling.childNodes[0].textContent)
console.log(trav.children[3].childNodes)
console.log(trav.children[3].childNodes[3].textContent)



//? Create Element

let cre_app = document.querySelector(".query_select");
//* <li><a href="#">Create Element</a></li>
let text_node = document.createTextNode("Create Element");
let aTag = document.createElement("a")
aTag.setAttribute("href","#");
aTag.appendChild(text_node);
console.log(aTag);
let liTag = document.createElement("li");
liTag.appendChild(aTag);
cre_app.prepend(liTag);



//? Replace Element

let oldH1 = document.querySelector(".head");
let newH1 = document.createElement("h1");
let rep_text = document.createTextNode("Hello My Friend!");
newH1.appendChild(rep_text);
newH1.className = "babi";
newH1.id = "bibi";
//! To replace element , we need parrent element of it!
let rep_parent =oldH1.parentNode;           //! rep_parent = document.querySelector("body") is equal
rep_parent.replaceChild(newH1, oldH1)



//? AddEventListener with Events

//! There are more events : click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove
let click_me = document.querySelector(".btn");
click_me.addEventListener("dblclick", (e) => {
    console.log(e.target);
    alert("123");
});
//! Another Ways is      click_me.ondblclick = () => alert("123");


//? Form Events

//! Form events are : keydown, keyup, keypress, focus, blur, cut, paste, change
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
click_me.addEventListener("click", (e)=> {
    e.preventDefault();     //! This is prevent default values in Form such as action link(google.com)
    console.log(input1.value)
});
input1.addEventListener("blur", (e)=> {
    console.log(input1.value);
});



//? LocalStorage

let form = document.querySelector("form");
let del = document.querySelector("#delete");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let name = input1.value;
    let age = input2.value;
    let user = {
        name,
        age,
    };
    addData(user);
});
let addData = (obj) =>{
    let data = JSON.stringify(obj);
    localStorage.setItem("local", data);
}
let getData = () => {
    let get_data = localStorage.getItem("local");
    let data_obj = JSON.parse(get_data);
    return data_obj;
};
getData()
let cleared = () =>{
    localStorage.removeItem("local");
};
del.addEventListener("click", cleared);



//? Session Storage

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let val1 = input1.value;
    let val2 = input2.value;
    let ses_obj = {
        val1,
        val2,
    };
    sesDatadb(ses_obj);
});
let ses_save = (save) =>{
    let save_data = JSON.stringify(save);
    sessionStorage.setItem("user data", save_data);
}
let sesDatadb = (obj) =>{
    let getses = sesGetData();
    if (getses === null){
        let ses_arr = [];
        ses_arr.push(obj);
        ses_save(ses_arr);
    }else{
        let check = getses.findIndex(usr_name => usr_name.val1 === obj.val1);
        if (check === -1){
            if (obj.val2 > 18){
                getses.push(obj);
                ses_save(getses);
            }else{
                alert("Your age is under 18!")
            }
        }else{
            alert("User already exist with that name!")
        }
    }
};
let sesGetData = () =>{
    let usr_data = sessionStorage.getItem("user data");
    let real_data = JSON.parse(usr_data);
    return real_data;
}



//? OOP JavaScript ==> Object Oriented Programming
//? ECMAS 5 ==> create OOP ==> Prototype
//? ECMAS 6 ==> create OOP ==> Class 
//Todo: To Learn JavaScript Prototype , you must know JavaScript Constructor Function/Method

//? JS Constructor Function/Method
/*
!                function ConstructorName (object_property_variables) {
!                    this.object_property = object_property_variable;
!                    "this" is current constructor object or current object
!                };
 */

function Person(val1, val2){
    this.name = val1;
    this.age  = new Date(val2);
    this.urself = ()=>{
        let my_date = Date.now() - this.age.getTime();
        let de_date = new Date(my_date);
        return de_date.getUTCFullYear()-1970;
    };
}
let person1 = new Person("KgKg", "11-15-2001");
console.log(person1)
console.log(person1.urself())


//? Prototype
//! Two type of Prototype
//! Default.Object.Prototype & Current.Object.Prototype

function Pro(value1, value2){
    this.name = value1;
    this.own = value2;
}
Pro.prototype.myown = function(){
    return `I have a new ${this.own}`;
}
Pro.prototype.myself = function(){
    return `My name is ${this.name} & I have a ${this.own}`;
}
let kyaw = new Pro("Kyaw Kyi", "Toyota Car")
console.log(kyaw.myown())


//? Prototype Inheritance (Inheritance == အမွေဆက်ခံတာ)
//! If the objects of archetype such as object_property and object_method are the same, we can use like this

function Proin(pro1, pro2){
    this.name = pro1,
    this.university = pro2
}
Proin.prototype.himself = function () {
    return `My name is ${this.name} & I am studying in ${this.university} University`;
};


function Aung(in1, in2){
    Proin.call(this,in1,in2);
    //! Aung က Proin ရဲ့ Inheritance ဖြစ်လို့ Proin မှာရှိတဲ့ Properties & Values တွေ သူကလက်ခံထားတယ် Prototype တေ့ာမပါဘူး
}
Aung.prototype = Object.create(Proin.prototype);    //! အခုမှ Proin ရဲ့ Prototype method ကို ရရှိသွား


function Susu(in1, in2,type){
    Proin.call(this, in1, in2);
    this.gender = type;             //! Susu မှာ တန်ဖိုးတခုပိုရှိနေမယ်ဆိုရင် , you can do this
}
Susu.prototype = Object.create(Proin.prototype);
Susu.prototype.himself = function () {
    return `My name is ${this.name} and I am studying in ${this.university} University. I am also ${this.gender}`
};          //! Overwrite the Prototype Method of Susu

let aung = new Aung("AgAg", "Mandalay")
console.log(aung.university);
console.log(aung.himself())
let susu = new Susu("SuSu", "Yangon", "Girl")       //! Susu have one more values other than
console.log(susu.himself())
console.log(susu.gender)



//? Another Ways Of Create Prototype

const carprototype = {
    getname : function () {
        return this.name;
    },
    getspeed : function () {
        return this.speed;
    }
};

let car = Object.create(carprototype);
car.name = "Toyota";
car.speed = 190;
console.log(car.speed);
console.log(car.getname())

let bar = Object.create(carprototype, {
    name: {value: "Suzuki"},
    speed: {value: 180}
})
console.log(bar.name +" speed is "+ bar.getspeed())


//? ECMAS 6 ==> Class

class Studentclass {
    static name = "WaiKyi";     //! for only static member
    static age = 10;            //! it also
    constructor (stu1, stu2) {
        console.log('Hay wailwinphyo')
        this.name = stu1;
        this.age = stu2;
    };
    info() {
        return `Student ${this.name} of age is ${this.age}`
    };
    static getinfo() {
        console.log(`Student ${this.name} of age is ${this.age}`) 
    }
}
new Studentclass();         //! When creat a new object, Constructor work automatically
let agyi = new Studentclass("Aung Gyi", 20);
console.log(agyi.age)
console.log(agyi.info())
Studentclass.getinfo()      //! Direct call method because it is static member


//? Class Inheritance

class Car {
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    };
    getspeed(){
        console.log(`This is parrent class & ${this.speed}`);
    };
}
class Toyota extends Car {
    constructor (cval1, cval2, cval3){
        super(cval1, cval2);
        this.price = cval3;
    };
    getspeed(){
        console.log(`This is overwriting of car method & ${this.price}`)
    };
}
class Suzuki extends Car {
    constructor (cval1, cval2, cval3){
        super(cval1, cval2);
        this.manufacture = cval3;
    };
}
let to = new Toyota("Toyota", 180 , 3000);
console.log(to.price)
to.getspeed();
let su = new Suzuki("Suzuki", 150, "Japan");
su.getspeed()
console.log(su.manufacture);


//? XMLHTTPRequest

let url = "https://jsonplaceholder.typicode.com/posts";
let xml = document.querySelector("#xml");

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4){
        let g_store = this.responseText;
        let result_data = JSON.parse(g_store);
        let str = "";
        result_data.forEach(da =>{
            str += `
                <h1>${da.title}<h1>
            `;
        });
        xml.innerHTML = str;
    }
}
xhr.send()


/*
! There are some ways of XMLHTTPRequest
xhr.onload = function () {
    if (this.status === 200){
        console.log(this.responseText)
    }
}
*/


//? Promise

let pro = new Promise((resolve, reject) => {
    xhr.open("GET", url)
    xhr.onload = function () {
        if (this.status === 200){
            resolve(this.responseText);
        }else{
            reject("Failed to load")
        }
    };
    xhr.send();
});
pro
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
//! If you return pro Constructor in a function ; you can call function_name().then .catch;


//? Fetch

fetch(url)
    .then(res => {return res.text()})          //! res Response Json & Text ; you can look at this in prototype
                                               //! In also this case; res.text() also Response the promise type
    .then(result => console.log(result))       //! res & res.text() are Response promise type; So we change promise like this
    .catch(err => console.log("Failed to load"));


//? Async Await Function

let data_url = "https://gorest.co.in/public-api/posts";
let xData = new XMLHttpRequest();
async function as(){
    let goRest = new Promise((resolve, reject)=>{
        xData.open("GET", url);
        xData.onload = function(){
            if (this.status ===200){
                resolve(this.responseText);
            }else{
                reject("Failed to load");
            }
        };
        xData.send();
    });
    let goReturn = await goRest;
    return goReturn;
}
as().then(res => console.log(res)).catch(err=> console.log(err))


//?  Promises and Fetch Api

function asynchronous (){
    return new Promise((resolve, reject)=> {
        fetch(url)
            .then(res => resolve(res.text()))
            .catch(err=> reject(err));
    })
}
asynchronous()
    .then(res=> console.log(res))
    .catch(err=> console.log(err));



//? Regular Expression
//! It has some method --> exec, test, match, search

let reg = /secret/g;    //! g for Global and i for In Case Sensitive
let mail = "secret Letter:Hay buddy I am sending you a secret message!";
console.log(reg.exec(mail));
console.log(reg.test(mail));
console.log(mail.match(reg));   //! if RegEx is Global, it can find all
console.log(mail.search(reg));

/*
!   ^       Start only with
!   $       End only with
!   ^..$    Only between them
!   h.llo   Any Character in .
!   h*llo   Zero:None or More Character in *
!   sa?e?y  Option a Or e or none:zero
!   why\?   \ is you want to use ? not to be Option
*/


function regCheck (reg, str){
    if (reg.test(str)){
        console.log("True");
    }else{
        console.log("False")
    }
}
regCheck(/^hello/i, "Hello my friend");
regCheck(/friend$/, "Hay my friend");
regCheck(/^Mandalay$/, "My name is wailwinphyo");
regCheck(/h.llo/, "hzllo");
regCheck(/h*llo/, "hllo");
regCheck(/he?a?llo/, "hallo");
regCheck(/Denis\?/, "Denis?")















