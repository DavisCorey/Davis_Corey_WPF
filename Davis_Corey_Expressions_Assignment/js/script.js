/**
 * Created by CoreyDavis on 4/16/15.
 * MDV 2330
 * Expressions Assignment
 */

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
var sprayLength;  //Variable Declaration
var yardLength;  //Variable Declaration
var yardWidth;  //Variable Declaration

//Prompts
//prompt for Sprinkler watered area
sprayLength=Number(prompt("Calculation of non-watered lawn area." +
" \nPlease enter the considered sprinkler spray length in feet."));
//Length of yard prompt from user
yardLength=Number(prompt("What is your yard length in feet."));
//Width of yard prompt from user
yardWidth=Number(prompt("What is your yard width in feet."));

//Calculations
var yardSide=[yardLength,yardWidth];  //Array declaration for yard area calculation

//1st Area Calculation
var sprayArea=sprayLength*sprayLength;  //Length squared and set to area
sprayArea*=3.14;  //PI * Length squared

//2nd Area Calculation
// Calculation of yard area length * width
var yardArea=yardSide[0]*yardSide[1];

//3rd Calculation
// Calculation of area not reached by the sprinkler.
var nonWaterArea=yardArea-sprayArea;  //Area of the yard minus area covered by sprinkler.

//outputs
console.log(" "+sprayArea +" feet is the spray area and the yard area is "+yardArea+ " feet.\n" +
"You will have "+nonWaterArea+" feet that will not be watered by this sprinkler.");

/*Tested inputs 10 feet = Sprinkler length
20 feet for the length
20 feet for the width
86 feet should be left over unwatered.
*/