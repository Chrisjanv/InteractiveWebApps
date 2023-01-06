// TITLE
console.log(" ----- Area Of Shapes JS Arithmetic Challenge ----- \n\n")

// Constant Variables:
const pi = 3.1419;
const half = 0.5;

// Variables for measurements

let rectangleLength = 10;
let rectangleBreadth = 17;

let circleRadius = 25;

let triangleBase = 20;
let triangleHeight = 9;


// Rectangle
let rectangleArea = rectangleLength * rectangleBreadth;
console.log("The area of the given rectangle is : " + rectangleArea);
console.log("\n");

// Circle
let circleArea = pi*(Math.pow(circleRadius,half));
console.log("The area of the given circle is : " + circleArea);
console.log("\n");

// Triangle
let triangleArea = (half*triangleBase)*triangleHeight ;
console.log("The area of the given triangle is : " + triangleArea);