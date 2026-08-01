/* Practice: mixed-type arrays

Create a program to store and display user profiles for a basic application. Your
program should store and display one profile that contains the following:
● User name
● Age
● Subscription status
● User’s location
● User’s hobbies (at least two)
Complete the following tasks in order to create the program:

*/ 

//Task 1: create the profile

let userOne = ["Rachel", 26, true, {City: "Richmond"}, ["fishkeeping", "coding"]]

//Task 2: access and log profile details

console.log("User's name:",userOne[0]);
console.log("User hobbies #2:", userOne[4][1]); 

//Task 3: modify the profile

userOne[1] = 27;

//Task 4: display the updated profile 

console.log("Updated Profile:",userOne);