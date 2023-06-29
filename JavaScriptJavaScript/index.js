// everything is from brocode javascript full course fotr free (2023)

// let a = Number(prompt("enter value for the first leg"))
// let b = Number(prompt("enter value for the second leg"))


// let solve_hypo = Math.sqrt((Math.pow(a,2)+(Math.pow(b,2))))
// console.log(solve_hypo);



// document.getElementById("submitButton").onclick = function() {

//     let a = document.getElementById('aTextBox').value;
//     a = Number(a);
//     let b = document.getElementById('bTextBox').value;
//     b = Number(b);

//     let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = "Side c: " + c;
    
// }

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function(){
    
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;

// }
// document.getElementById("resetBtn").onclick = function(){

//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
    
// }
// document.getElementById("increaseBtn").onclick = function(){

//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
    
// }


// document.getElementById("rollButton").onclick = function() {
    
//     let x = Math.floor(Math.random() * 6)+1;
//     let y = Math.floor(Math.random() * 6)+1;
//     let z = Math.floor(Math.random() * 6)+1;

//     document.getElementById("xLabel").innerHTML = x;
//     document.getElementById("yLabel").innerHTML = y;
//     document.getElementById("zLabel").innerHTML = z;
// }

// let userName = '    Connor Rowe    ';

// console.log(userName.length);
// let firstLetter = userName.charAt(3);
// console.log(firstLetter);
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
//userName = userName.toLowerCase();
// let phoneNumber = '123-456-6789'
// phoneNumber = phoneNumber.replaceAll('-','/');
// console.log(phoneNumber);
// let fullName = "Ben Vuglar"
// let first;
// let last;

// last = fullName.slice(fullName.indexOf(" ")+1);
// first = fullName.slice(0,fullName.indexOf(" ")+1);

// console.log(last);
// console.log(first);

// let userName = "con";

// let letter = userName.charAt(0).toUpperCase().trim();
// console.log(letter);

/* let age = 65;
if(age>=65) {
    console.log("You are a senior citizen!")
}

else if(age >= 18){
    console.log("you are an adult!")
}
else if(age<0) {
    console.log("you haven't been born YET!")
}
else {
    console.log('you are a child')
}
*/

// let online = false;

// if(online) {
//     console.log('you are online!')
// }
// else {
//     console.log("you are offline!")
// }

// document.getElementById('myButton').onclick = function(){
    
//     const myCheckBox = document.getElementById('myCheckBox');

//     const visaBtn = document.getElementById('visaBtn');
//     const mastercardBtn = document.getElementById('mastercardBtn');
//     const paypalBtn = document.getElementById('paypalBtn');


//     if(myCheckBox.checked){
//         console.log('You are subscribed! ✅');
//     }
//     else{
//         console.log('You are not subscribed! ❌');
//     }

//     if(visaBtn.checked){
//         console.log("You are paying with Visa!");
//     }
//     else if(mastercardBtn.checked){
//         console.log("You are paying with mastercard!");
//     }

//     else if(paypalBtn.checked){
//         console.log("You are paying with paypal!");
//     }
//     else{
//         console.log("you must select a payment type!");
//     }
// }

// let grade = "52";

// switch (true){

//     case grade >= 90:
//         console.log("You did great! 🅰️");
//         break;

//     case grade >= 80:
//             console.log("You did good! 🅱️");
//             break;

//     case grade >= 70:
//             console.log("You did ok. ©️");
//             break;

//     case grade >= 60:
//             console.log("You did BAD! 😷 D!!!");
//             break;

//     case grade < 60:
//             console.log("You Failed!! 💥 F!!!!");
//             break;
//     default:
//         console.log(grade,"is not a letter grade!😍")
// }

// let temp = 20;
// let sunny = true;

// if(temp > 0 && temp < 30 && !sunny){
//     console.log("The weather is good!✅");
// }
// else{
//     console.log("The weather is bad!❌");
// }

// let temp = -12;
// let sunny = false;
// sunny = (!sunny);

// if (!(temp > 0)){
//     console.log("cold! 🥶")
// }
// else {
//     console.log("warm! 🥵");
// }
// if (!sunny){
//     console.log('sunny! ☀️');
// }
// else {
//     console.log('cloudy! ☁️');
// }


// let username;

// do{
//     username = window.prompt("Enter you name!");
// }while(username == "")

// console.log("Hello",username + "! 👋");

// for (let i = 20; i > 0; i-=3)
// {
//     console.log(i);
// }
// console.log("Happy new year! 🥳");

// for(let i = 1; i <= 20; i++){
//     if(i == 13) {
//         continue;
//     }
//     console.log(i);
// }

// let symbol = window.prompt("enter a symbol to use...");
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');


// for(let i = 1; i <= rows; i += 1){
//     for(let j = 1; j <= columns; j += 1){
//     document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"
// }

// startProgram();

// function startProgram(){

//     let username = "Con";
//     let age = 22;
    
//     happyBirthday(username, age);
// }

// function happyBirthday(b,a){
//     console.log("Happy Birthday to you! 🥳");
//     console.log("Happy Birthday to you! 🥳");
//     console.log("Happy Birthday dear",a, "🫵");
//     console.log("Happy Birthday to you! 🥳");
//     console.log("You are",b, "years old! 🧓");
// }

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:",area);

// function getArea(width, height){
//     return width * height;  
    
// }

// let adult = checkAge(21);
// console.log(adult);


// function checkAge(age){

//     return age >= 21 ? true : false


    // if(age >= 18){
    //     return true;
    // }
    // else{
    //     return false;
    // }
// }

// checkWinner(false);

// function checkWinner(win) {
//     win ? console.log('YOU WIN! 🥇') : console.log("YOU LOSE! 😞")
// }

// let name = "Conbon";

// function doSomething(){

// for (var i = 1; i <= 3; i++) {
//     // console.log(i);
//   }
// }
// console.log(i);

// this changes the window property of name because its accessing the code outside of global becaue its a var
// var name = 'Con';
// var name = '';

// let username = "Con";
// let items = 3;
// let total = 75;

// console.log("hello", username);
// console.log("You have",items,"items in your cart");
// console.log("your total is $",total);

// console.log(`Hello ${username}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`You total is $${total}`);

// let text = 
// `Hello ${username}<br>
// You have ${items} items in your cart<br>
// You total is $${total}`;

// console.log(text);

// document.getElementById('myLabel').innerHTML = text;

// let myNum = .50;
// myNum = myNum.toLocaleString("en-US");  // US English
// myNum = myNum.toLocaleString("hi-IN");  // Hindi
// myNum = myNum.toLocaleString("de-DE");  // standard german

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});  
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // rupees
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // celcius, kilometers, miles, kilograms...

// console.log(myNum);

// Guessing Game

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){
//     let guess = document.getElementById("guessField").value
//     guesses+=1;

//     if(guess == answer){
//         alert(`${answer} is correct! ✅ It took you ${guesses} guesses`);
//     }
//     else if(guess < answer){
//         alert("Too small ❌")
//     }
//     else{
//         alert("Too big ❌")
//     }
// }


// document.getElementById(("submitButton")).onclick = function(){

//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelcius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";

//     }

//     else if(document.getElementById("fButton").checked){
//             temp = document.getElementById("textBox").value;
//             temp = Number(temp);
//             temp = toFahrenheit(temp);
//             document.getElementById("tempLabel").innerHTML = temp + "°F";
     
//     }
 
//     else{
//         document.getElementById("tempLabel").innerHTML = "Select a unit";
//     }
// }

// function toCelcius(temp){
//     return (temp - 32) * (5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// }

// let fruits = ["apple", "banana", "orange"];
// fruits[0]= "coconut";
// fruits.push("lemon");   // element added to the end
// fruits.pop();       // last element gone
// fruits.unshift("mango");  // adds element to the beginning
// fruits.shift();     // removes element from beginning
// console.log(fruits);
// let length = fruits.length;
// console.log(length);
// let index = fruits.indexOf("apple");
// console.log(index);

// let prices = [5,10,15,20,25,30,35,40,45,50];

// for(let i = prices.length-1 ; i >= 0 ; i -= 1){
//     console.log(prices[i]);
// }

// for(let price of prices){
//     console.log(price);
// }

// let fruits = ["banana","apple","orange","mango"];

// fruits = fruits.sort();
// fruits = fruits.sort().reverse();


// for(let fruit of fruits){
//     console.log(fruit)
// }

// let fruits = ["banana","apple","orange"];
// let vegetables = ["carrots","onions","potaoes"];
// let meats = ["beef","poultry","fish"];

// let groceryList = [fruits, vegetables, meats];

// console.log(groceryList[0][1]);

// groceryList[0][0] = "mangoes";
// groceryList[0][2] = "strawberry";
// groceryList[2][2] = "pig";



// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }

// spread operator



// let userName = "Con nor"
// let numbers = [46,1,2,3,4,5,6,7,8,9];
// console.log(...numbers);
// console.log(...userName);
// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["Spongebob","Patrick","Sandy"];
// let class2 = ["Squidward","Mr Crabs","Plankton"];
// // class1.push(class2);     // this will push the array into the array
// class1.push(...class2);  // this will push the elements into the array

// console.log(class1);
// console.log(...class1);

// rest parameters (...)  = an indefinite nummber of parameters (it packs arguments into an a array when you pass args to a function)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// // without using rest parameters
// function sum2(a, b){return a + b;}
// function sum3(a, b, c){return a + b + c;}
// function sum4(a, b, c, d){return a + b + c + d;}

// // using rest parameters
// function sum(x,y, ...numbers){   // a,b,c,d,e and f are packed into numbers array
//     let total = 0;               // the first two arguments are x and y respectively
//     for(let number of numbers){  // the rest parameter has the take up the last parameter in the funtion
//     total += number
//     }
//     return total;
// }

// callback = a function passed as an argument to another function. A funtion will not run before a task in completed

// sum(2,3, displayConsole);  // with parenthesis = envoking the function, without the parenthesis = passing the function
// sum(2,3, displayDOM);

// function sum(x, y, callBack){
//     let result = x + y;
//     callBack(result);
// }


// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output;
// }

// foreEach() array method = executed a provided callback function once for each element in an array

// let students = ["spongebob", "patrick", "squickward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);

// }
// console.log(students[0]);

// function print(element){
//     console.log(element);

// }

// map() for arrays = executes a callback function for each array element and creates a new array

// let numbers  = [1,2,3,4,5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// squares.forEach(print);
// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// function print(element){
//     console.log(element);
// }

// // filter() array method = create a new array with all elements that pass a test provided by a function

// let ages = [18,16,21,17,19,20,3,60];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

// // reduce() array method = reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);
// console.log(`The total is ${total}`);

// function checkOut(total, element){
//     return total + element;
// }

// // sorting an array of numbers

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(descendingSort);
// grades.forEach(print);
// grades = grades.sort(ascendingSort);
// grades.forEach(print);

// function descendingSort(x, y){
//     return y - x;
// }

// function ascendingSort(x, y){
//     return x - y;
// }

// function print(element){
//     console.log(element);
// }

// function expression = a function with a name aka anonymous function. Helps avoid poluting the global scope

// const greeting = function(){
//     console.log("Hello!");
// }
// greeting();

// let count = 0;

// document.getElementById("increaseButton").onclick = function(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decreaseButton").onclick = function(){
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// arrow function expressions are a compact alternative to a traditional function =>

// const greeting = userName => console.log(`hello ${userName}`);

// greeting("Con");

// const percent = (x, y) => x / y * 100;

// console.log(`${percent(45, 50)}%`);

// let grades = [100,50,90,60,80,70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x,y){
//     return y-x;
// }
// function print(element){
//     console.log(element);
// }

// console.log("!!! Now with function expressions")

// let grades1 = [100,50,90,60,80,70];

// grades1.sort(function(x,y){
//     return y-x;
// });
// grades1.forEach(function(element){
//     console.log(element);
// });

// console.log("!!! Now With Arrow Functions")

// let grades2 = [100,50,90,60,80,70];

// grades2.sort((x,y) =>  y-x);

// grades2.forEach((element) => console.log(element));

// let text = ('b' + 'a' + + 'a' + 'a').toLowerCase()
// console.log(text);

// // shuffle an array

// let cards = ['A','2','3','4','5','6','7','8','10','J','Q','K'];

// shuffle(cards);

// // console.log(cards);

// cards.forEach(card => console.log(card)); 

// function shuffle(array){
//     let currentIndex = array.length;
    
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length)
//         currentIndex-=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }

// nested functions 

// let userName = "Con";
// let userInbox = 0;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();
    
//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }

    
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messaes`)
//     }
// }

// // maps = an object that holds key value pairs of any data type

// const store = new Map([
//     ["t-shirt", 25],
//     ["Tru Relijion Jeans", 120],
//     ["Supreme Socks", 20],
//     ["Nikey undies", 50],
// ]);

// let shoppingCart = 0;

// // shoppingCart += store.get("t-shirt");
// // shoppingCart += store.get("Supreme Socks");
// // console.log(shoppingCart);

// store.set("Guchi Hat", 1200);
// store.delete("t-shirt");
// console.log(store.has("Tru Relijion Jeans"));
// console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));

// // object: a group of properties and methods.
// // a property is what an object has: make, year, model, color, mpg, horsepower
// // method: what an object can do: accelerate, decellerate, brake, throttle
// // (this) a reference to a particular object. It depends on the immediate context where you use the (this) keyword

// const car1 = {
//     model:"Camaro",
//     color:"blue",
//     year:2023,

//     drive : function(){
//         console.log(`Zroom 🏎️⏪ You drive the ${this.model}`)
//     },

//     brake : function(){
//         console.log("Breaks applied 🛑")
//     }
// }

// const car2 = {
//     model:"Evo X",
//     color:"Red",
//     year:2014,

//     drive : function(){
//         console.log(`Zroom 🏎️⏪ You drive the ${this.model}`)
//     },

//     brake : function(){
//         console.log("Breaks applied 🛑")
//     }
// }


// console.log(car1.model);
// console.log(car1.color);

// car2.drive();
// car1.brake();

// this.name = 'My own window'

// console.log(this.name);

// // classes are blueprints for making objects. In a class, ou can define properties and methods an object should have.
// // a contructor is used to assign unique properties.

// // creating a player class

// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game ⏸️");
//     }
//     exit(){
//         console.log("You exited the game 🙋‍♂️");
//     }
// }

// const player1 = new Player();
// const player2 = new Player();

// player1.score += 1;
// console.log(player1.score);
// player1.pause();
// player1.exit();
// player2.exit();

// constructor: a method of a class that accepts arguments and assigns properties

// class Student{
//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying 📚`);
//     }
// }

// const student1 = new Student("Beavis", 18, 0.8);
// const student2 = new Student("Benson", 30, 3.8);


// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();
// console.log(student2.name);

// // static: a member that is static, either a property or a method, belongs to class,
// //  ,and no objects created in the class

// Math.round(); // this is a static method

// class Car{

//     static numberOfCars = 0; // the car class now has the only copy of numberOfCars

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
    
//     static startRace(){
//         console.log("🚦3, 2, 1... GO! 💨")
//     }
// }
// const car1 = new Car("BMW M3");
// const car2 = new Car("Civic Si");
// const car3 = new Car("Golf GTI");
// const car4 = new Car("Acura NSX");
// const car5 = new Car("Nissan GTR");

// console.log(Car.numberOfCars);
// Car.startRace();

// // inheretance: When a child class can inherit all the methods and properties from another class
// // creating classes for rabbits, fish, and hawks

// class Animal{
//     alive = true;
    
//     eat(){
//         console.log(`This ${this.name} is eating. 🍴`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping. 😴`);
//     }

// }

// class Rabbit extends Animal{

//     name = 'rabbit';

//     run(){
//         console.log(`This ${this.name} is running! 🏃`);
//     }
// }

// class Fish extends Animal{

//     name = 'fish';

//     swim(){
//         console.log(`This ${this.name} is swimming! 🏊‍♂️`);
//     }
// }

// class Hawk extends Animal{

//     name = 'hawk';

//     fly(){
//         console.log(`This ${this.name} is flying! ✈️`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// hawk.fly();

// // super keyword: refers to the parent class. It's commonly used to invoke the constructor of the parent class.

// class Animal{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name, age);
//         this.runSpeed=runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name, age);
//         this.swimSpeed=swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name,age,flySpeed){
//         super(name, age);
//         this.flySpeed=flySpeed;
//     }
// }

// const rabbit = new Rabbit("David","1",40);
// const fish = new Fish("fishie","2",80);
// const hawk = new Hawk("hawkie","3",200);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flySpeed);

// // getter: bind an object property to a function when that property is accessed
// // an underscore(_) before a property name is colloquially known as the property being protected and shouldn't be messed with
// // getters increase data security and additional logic can be performed when the property is accessed directly.
// // setters: bind an object property to a function when that property is assigned a value.

// class Car{
//     constructor(power){
//         this._gas = 23.123;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas} Liters (${this._gas / 50 * 100}%)`;
//     }

//     set gas(value){

//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(350);

// car.power = 100000000000000;

// car.gas = -123198;

// console.log(car.power);
// console.log(car.gas);

// // objects as arguments

// class Car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year; 
//         this.color = color;
//     }
// }

// const car1 = new Car("Mercedes AMG", 2012, "gray");
// const car2 = new Car("Subaru WRX Type RA", 2019, "blue");
// const car3 = new Car("GR Corolla", 2023, "red");

// changeColor(car2, "black");
// displayInfo(car2);

// // making a function to display all the information for each car
// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// // change the car's color
// function changeColor(car, color){
//     car.color = color;
// }

// // Array of objects

// class Car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year; 
//         this.color = color;
//     }

//     drive(){
//         console.log(`You drive the ${this.model} 🚗`);
//     }
// }

// const car1 = new Car("Mercedes AMG", 2012, "gray");
// const car2 = new Car("Subaru WRX Type RA", 2019, "blue");
// const car3 = new Car("GR Corolla", 2023, "red");
// const car4 = new Car("Pontiac Firebird", 2004, "red");


// const cars = [car1, car2, car3, car4];

// // console.log(cars[0].model);
// // console.log(cars[1].year);
// // console.log(cars[2].color);

// // cars[0].drive();
// // cars[1].drive();
// // cars[2].drive();

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }

// Anonymous objects. They require less syntax, and they don't need unique names, 
// but you can never directly acces them. 

// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }


// new Card("2","Spades");

// let cards = [new Card("Ace", "Spades"),
//              new Card("4","Clubs"),
//              new Card("Ace","Hearts"),
//              new Card("2","Diamonds"),
//              new Card("2","Hearts"),
//              new Card("Ace","Hearts"),
//              new Card("Queen","Clubs"),
//              new Card("10","Diamonds"),
//              new Card("2","Spades")];


// console.log(cards[0].value + cards[0].suit);
// console.log(cards[1].value + cards[1].suit);
// console.log(cards[2].value + cards[2].suit);

// cards.forEach(card => console.log(`${card.value} of ${card.suit}`));

// // error handling: objects with a descripton of what went wrong. Errors halt the executing of the program.
// // common errors: unable to open file, lost connection, user types incorrect data, typeError
// // throw: executes a user-defined error

// try{
//     console.leg();
// }
// catch(error){
//     console.log(error);
// }


// try{
//     let x = window.prompt("Enter a number 🔢");
//     x = Number(x);

//     if(isNaN(x)) throw "That wasn't a number! ❌"
//     if(x == "") throw "That was empty! 🍃"

//     console.log(`${x} is a number.👍`);
// }
// catch(error){
//     console.log(error);
// }
// finally{   // finally always executes
//     console.log("I'm always here for you 🤜🤛")
// }

// // setTimeout(): invokes a function after a set number of miliseconrds.
// // It's asyncronous, meaning it doesn't pause everything else in the program

// let item = "Cryptocurrency";
// let price = "1.25";

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(toostMessage, 7000);
// let timer3 = setTimeout(triadMessage, 10000);


// function firstMessage(item, price){
//     alert(`Buy ${item} for only ${price}!!!`);
// }

// function toostMessage(){
//     alert(`PLEASE BUY COURSE !!NOW!! 50% OFF TODAY $500 DOLLAR BUNDLE VALUE!!!`);
// }

// function triadMessage(){
//     alert(`THIS IS NOT A SCAM!! 🙅🙅🙅🙅🙅`);
// }

// document.getElementById("myButton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`Thanks for purchasing this course! 🥳🥳🥳`);
// }

// // setInterval(): a method that invokes a function repeatedly after a number of milliseconds.
// // It's asyncronous, so it doesn't stop the program

// let count = 0;
// let max = window.prompt("Count up to what #? 🔢");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count += 1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }

// // The Date object

// let date  = new Date();

// // let year = date.getFullYear();
// // let dayOfMonth = date.getDate();

// // date.setFullYear(2024);

// // date = date.toLocaleString();

// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formatDate(date)
// {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am"

//     hours = (hours % 12) || 12;

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`
// }

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update(){
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds  = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";

//         hours = (hours % 12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }
    
//     function formatZeroes(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;

//     }   
// }

// console.log("Start");
// setTimeout(() => console.log('This is asynchronous'), 5000);
// console.log("END");

// // console.time() method: start a time to track how long an operation takes. 

// console.time("Response time");

// //alert("CLICK THE OK BUTTON!");
// setTimeout(() => console.log("HELLO!"), 3000);

// console.timeEnd("Response time");

// // promises: an object that encapsulates the results of an asyncronous operation.
// // Three states of promises: 'pending', 'fulfilled', and 'rejected'

// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded")
//     }
//     else{
//         reject("File not loaded");
//     }

// });

// promise.then((value) => console.log(value))
//        .catch(error => console.log(error));

// // wait for 5 seconds, then display a message

// const wait = time => new Promise( resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then( () => console.log("Thanks for waiting"));

// // async: makes a function return a promise

// async function loadFile(){

//     let fileLoaded = true;

//     if(fileLoaded){
//         return "File loaded ✅";
//     }
//     else{
//         throw "File not loaded ❌";
//     }
// }

// loadFile().then(value => console.log(value))
//        .catch(error => console.log(error));

// // await: makes an async function wait for a promise

// async function loadFile(){

//     let fileLoaded = false;

//     if(fileLoaded){
//         return "File loaded ✅";
//     }
//     else{
//         throw "File not loaded ❌";
//     }
// }

// async function startProcess(){
//     // the await keyword can only be used in an async function

//     try{        
//     let message = await loadFile();
//     console.log(message);

//     }
//     catch(error){
//         console.log(error);
//     }
   
// }
// startProcess();

// // !!!!!!!!!!!!!!!Modules: a file with reusable code. You can use parts of the file at a time.!!!!!!!!!!!!!!!!!

// import * as AllMaths from "./math_util.js";

// // The contents of math_util.js

// // export const PI = 3.14159;

// // export function getCircumference(radius){
// //     return 2 * PI * radius;

// // }

// // export function getArea(radius){
// //     return  PI * radius * radius;
    
// // }

// console.log(AllMaths.PI);

// let circumference = AllMaths.getCircumference(10);
// console.log(circumference);

// let area = AllMaths.getArea(10);
// console.log(area);

// !!!!!!!!!! THE DOM !!!!!!!!!! THE DOM !!!!!!!!!! THE DOM !!!!!!!!!! THE DOM !!!!!!!!!! THE DOM

//  console.log(document.URL);

//  document.title = "Title goes here 😁";
// document.location = "http://Google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";

// !!!!!!!! ELEMENT SELECTORS !!!!!!!! ELEMENT SELECTORS !!!!!!!! ELEMENT SELECTORS !!!!!!!! ELEMENT SELECTORS

let element = document.getElementById("myTitle");
element.style.backgroundColor = 'lightgreen';

