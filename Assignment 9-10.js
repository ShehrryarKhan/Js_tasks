//Question 1

let city = prompt("Enter your city name:");


if (city === "Karachi") {
    console.log("Welcome to the city of lights");
} else {
    console.log("City not recognized");
}


//Question 2

let gender = prompt("Enter your gender (male/female):");


if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Maam.");
} else {
    console.log("Gender not recognized.");
}


//Question 3

let color = prompt("Enter the color of the traffic signal");

if (color === "red") {
    console.log("Stop!");
} else if (color === "yellow") {
    console.log("Get Ready!");
} else if (color === "green") {
    console.log("Go!");
} else {
    console.log("Invalid color.");
}


//Question 4




let fuel = prompt("Enter the remaining fuel in your car");

fuel = Number(fuel);


if (fuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("You have enough fuel.");
}



//Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}

if (false){
alert("False");
}


 if("car" < "cat"){
alert("car is smaller than cat");
}


// a: Alert will be triggered.
// b: Alert will not be triggered.
// c: Alerts for "condition 2 is true" and "condition 4 is true" will be triggered.
// d: Alert will be triggered.
// e: Only "True" alert will be triggered.
// f: Alert "car is smaller than cat" will be triggered.

//Question 6


let marks1 = prompt("Enter marks obtained in the first subject:");
let marks2 = prompt("Enter marks obtained in the second subject:");
let marks3 = prompt("Enter marks obtained in the third subject:");
let totalMarks = prompt("Enter the total marks:");


marks1 = Number(marks1);
marks2 = Number(marks2);
marks3 = Number(marks3);
totalMarks = Number(totalMarks);


let totalObtained = marks1 + marks2 + marks3;
let percentage = (totalObtained / totalMarks) * 100;


let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}


document.write("<p>Total Obtained Marks: " + totalObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");



//Question 7


 var secretNumber = 7; 

 var userGuess = prompt("Guess the secret number (between 1 and 10):");

 
 userGuess = Number(userGuess);

 
 if (userGuess === secretNumber) {
     alert("Bingo! Correct answer");
 } 
 
 else if (userGuess + 1 === secretNumber) {
     alert("Close enough to the correct answer");
 } 
 
 else {
     alert("Try again!");
 }



 //Question 8


 var number = prompt("Enter a number:");

 
 number = Number(number);

 
 if (number % 3 === 0) {
     alert("The number is divisible by 3.");
 }


 //Question 9


        
        var number = prompt("Enter a number:");

        
        number = Number(number);

        if (number % 2 === 0) {
            alert("The number is even.");
        } else {
            alert("The number is odd.");
        }


//Question 10

 temperature = prompt("Enter the temperature:");

        temperature = Number(temperature);

       
        if (temperature > 40) {
            alert("It is too hot outside.");
        } else if (temperature > 30) {
            alert("The Weather today is Normal.");
        } else if (temperature > 20) {
            alert("Today’s Weather is cool.");
        } else if (temperature > 10) {
            alert("OMG! Today’s weather is so Cool.");
        }

 


//Question 11

var num1 = prompt("Enter the first number:");
num1 = Number(num1);


var num2 = prompt("Enter the second number:");
num2 = Number(num2);


var operation = prompt("Enter the operation (+, -, *, /, %):");


var result;


if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operation.");
}


if (result !== undefined) {
    alert("The result is: " + result);
}