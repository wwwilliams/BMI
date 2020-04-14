var markMass = prompt("What is Mark's mass in kilograms?"); //user inserts mass in kg
var markHeight = prompt("And his height in meters?");//user inserts height in meters

var johnMass = prompt("What is John's mass in kilograms?");//user inserts John's mass in kg
var johnHeight = prompt("And his height in meters?");//user inserts John's height in kg

var markBMI = markMass/(markHeight*markHeight);//formula to calculate Mark's BMI
console.log("Mark's BMI is...");//console prints this statement
console.log(markBMI);//console prints Mark's BMI

var johnBMI = johnMass/(johnHeight*johnHeight);//formula calculates John's BMI
console.log("John's BMI is...");//the console prints this statement
console.log(johnBMI);//the console prints John's BMI

var BMIboolean = markBMI >= johnBMI;//Does Mark have a higher BMI than John? True or False.

alert("It is " + BMIboolean + " that Mark has a higher Body Mass Index than John.");//The user is notified if it is true or not whether Mark has a higher BMI based on user inputs.


