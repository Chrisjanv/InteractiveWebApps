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

let rectangleArea = rectangleLength * rectangleBreadth;

// Append your rectangle answer:
console.log("The area of the given rectangle is : " + rectangleArea);

console.log("\n");

let circleArea = pi*(Math.pow(circleRadius,half));

// Append your circle answer:
console.log("The area of the given circle is : " + circleArea);

console.log("\n");

let triangleArea = (half*triangleBase)*triangleHeight ;

// Append your triangle answer:
console.log("The area of the given triangle is : " + triangleArea);