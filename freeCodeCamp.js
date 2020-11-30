// This is an in-line comment.
/* This is a
multi-line comment */
//Use the var keyword to create a variable called myName.
var myName;
// Setup
//Assign the value 7 to variable a.
var a;

// Only change code below this line
var a = 7;
//Assign the contents of a to variable b.
// Setup
var a;
a = 7;
var b;

// Only change code below this line
var b=a;
var a =9;

//Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//Modify the existing declarations and assignments so their names use camelCase.
// Do not create any new variables.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


//Change the 0 so that sum will equal 20.
var sum = 10 + 0;
var sum = 10 +10;

//Change the 0 so the difference is 12.
var difference = 45 - 33;

//Change the 0 so that product will equal 80.
var product = 8 * 0;
var product = 8 * 10;

var myVar = 87;

//Change the code to use the ++ operator on myVar.
// Only change code below this line
myVar++;

//Combine the if statements into a single if/else statement.

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }else {
        result = "5 or Smaller";
    }
    // if (val > 5) {
    //     result = "Bigger than 5";
    // }
    //
    // if (val <= 5) {
    //     result = "5 or Smaller";
    // }

    // Only change code above this line
    return result;
}

testElse(4);

// Convert the logic to use else if statements.
// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     }
//
//     if (val < 5) {
//         return "Smaller than 5";
//     }
//
//     return "Between 5 and 10";
// }
//
// testElseIf(7);
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }else{

    return "Between 5 and 10";
}}

testElseIf(7);
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//Write chained if/else if statements to fulfill the following conditions:
//
// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"

function testSize(num) {
    // Only change code below this line
    if (num<5){
        return"Tiny";
    }else if(num<10){
        return"Small";
    }else if (num<15){
        return "Medium";
    }else if (num<20){
        return"Large";
    }else{
        return "Huge"
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);


//Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
//
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes == 1){
        return names[0]
    }else if(strokes <= par - 2){
        return names[1]
    }else if (strokes == par - 1){
        return names[2]
    }else if (strokes == par){
        return names[3]
    }else if (strokes == par + 1){
        return names[4]
    }else if (strokes == par + 2){
        return names[5]
    }else if (strokes >= par + 3){
        return names[6]
    }


    return "Change Me";
    // Only change code above this line
}
//Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

golfScore(5, 4);
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }




    // Only change code above this line
    return answer;
}


//Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"
caseInSwitch(1);

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

// Write a switch statement to set answer for the following ranges:
//     1-3 - "Low"
//     4-6 - "Mid"
//     7-9 - "High"
//
//     Note
//     You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
        answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
        answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);


//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Ate Nine"}
    // if (val === "bob") {
    //     answer = "Marley";
    // } else if (val === 42) {
    //     answer = "The Answer";
    // } else if (val === 1) {
    //     answer = "There is no #1";
    // } else if (val === 99) {
    //     answer = "Missed me by this much!";
    // } else if (val === 7) {
    //     answer = "Ate Nine";
    // }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);