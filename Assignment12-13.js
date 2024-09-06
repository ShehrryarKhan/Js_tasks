





//Question 2

let num1 = prompt("Enter the first integer:");

num1 = parseInt(num1, 10);

let num2 = prompt("Enter the second integer:");

num2 = parseInt(num2, 10);

if (num1 > num2) {
    console.log("The larger integer is: " + num1);
} else if (num2 > num1) {
    console.log("The larger integer is: " + num2);
} else {
    console.log("Both integers are equal.");
}



//Question 3
 
 let input = prompt("Enter a number:");

 
 let number = parseFloat(input);

 
 if (number > 0) {
     console.log("The number is positive.");
 } else if (number < 0) {
     console.log("The number is negative.");
 } else {
     console.log("The number is zero.");
 }



//Question 4

let users = prompt("Enter a single character:");

 
        if (users.length === 1) {
           
            let char = users.toLowerCase();

           
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                console.log(true);
            } else {
                console.log(false);
            }
        } else {
            console.log("Please enter exactly one character.");
        }


//Question 5

let correctPassword = "2123"; 


let userPassword = prompt("Please enter your password:");



   
    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }



// QuESTION 6

var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";
console.log(greeting);
}else{
greeting = "Good evening";
console.log(greeting);
}



//Question 7

    
    
let inputTime = prompt("Enter the time in 24-hour");

if (inputTime.length === 4) {
    
    let hours = inputTime[0] * 10 + inputTime[1];

    if (hours >= 0 && hours < 12) {
        console.log("Good morning!");
    } else if (hours >= 12 && hours < 17) {
        console.log("Good afternoon!");
    } else if (hours >= 17 && hours < 21) {
        console.log("Good evening!");
    } else if (hours >= 21 && hours < 24) {
        console.log("Good night!");
    } else {
        console.log("Invalid time format.");
    }
} else {
    console.log("Invalid input. Please enter time in HHMM format.");
}