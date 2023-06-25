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

// foreEach() = executed a provided callback function once for each element in an array

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

