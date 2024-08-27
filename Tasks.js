


//Question 3




var birthYear = 2001; 


document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear) + ".");


//


var age = 25; 

alert("I am " + age + " years old.");



var visitorName = prompt("Enter your name:");
var productTitle = prompt("Enter the product you want to order:");
var quantity = prompt("Enter the quantity you want to order:");


document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

//








//   Question 4
var a = 10, b = 20, c = 30;


var myVar1;
var $price;
var _total;
var userName;
var count2;



document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, $, or _. For example: $name, _name, or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");





//Question no 5



   
var num1 = 10;
var num2 = 5;

// Subtraction
var subtraction = num1 - num2;
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");

// Multiplication
var multiplication = num1 * num2;
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");

// Division
var division = num1 / num2;
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");

// Modulus
var modulus = num1 % num2;
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br><br>");


// Task 2: JavaScript Mathematical Expressions

// a. Declare a variable
var myVar;

// b. Show the value of the variable after declaration
document.write("Value after variable declaration is: " + myVar + "<br>");

// c. Initialize the variable with some number
myVar = 5;
document.write("Initial value: " + myVar + "<br>");

// e. Increment the variable
myVar++;
document.write("Value after increment is: " + myVar + "<br>");

// g. Add 7 to the variable
myVar += 7;
document.write("Value after addition is: " + myVar + "<br>");

// i. Decrement the variable
myVar--;
document.write("Value after decrement is: " + myVar + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
var remainder = myVar % 3;
document.write("The remainder is: " + remainder);




//

//Question 6


var number = 10;


var result = "The value of number is: " + number + "\n";
result += "...............................................\n";

var increment = ++number;
result += "The value of ++number is: " + increment + "\n";
result += "Now the value of number is: " + number + "\n\n";

var decrement = --number;
result += "The value of --number is: " + decrement + "\n";
result += "Now the value of number is: " + number + "\n\n";

var addition = number + 7;
result += "The value of number + 7 is: " + addition + "\n";
result += "Now the value of number is: " + number + "\n\n";

var subtraction = number - 3;
result += "The value of number - 3 is: " + subtraction + "\n";
result += "Now the value of number is: " + number + "\n\n";

var multiplication = number * 2;
result += "The value of number * 2 is: " + multiplication + "\n";
result += "Now the value of number is: " + number + "\n\n";

var division = number / 2;
result += "The value of number / 2 is: " + division + "\n";
result += "Now the value of number is: " + number + "\n\n";


alert(result);


////////


// Prompt the user for their name
var userName = prompt("Enter your name:");

// Greet the user
alert("Hello, " + userName + "! Welcome to our website.");





// Prompt the user for a number
var number = prompt("Enter a number for the multiplication table:", 5);


number = number ? parseInt(number) : 5;

// Display the multiplication table in the browser
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}




// a) Take three subjects' names from the user
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// b) Total marks for each subject
var totalMarks = 100;

// c) Take obtained marks for the first subject from the user
var marks1 = prompt("Enter the obtained marks for " + subject1 + ":");
marks1 = parseInt(marks1);

// You can repeat this step for the other two subjects as needed:
var marks2 = prompt("Enter the obtained marks for " + subject2 + ":");
marks2 = parseInt(marks2);

var marks3 = prompt("Enter the obtained marks for " + subject3 + ":");
marks3 = parseInt(marks3);

// Now you can do further processing with these variables if needed.
document.write("<h2>Subjects and Marks</h2>");
document.write(subject1 + ": " + marks1 + "/" + totalMarks + "<br>");
document.write(subject2 + ": " + marks2 + "/" + totalMarks + "<br>");
document.write(subject3 + ": " + marks3 + "/" + totalMarks + "<br>");
