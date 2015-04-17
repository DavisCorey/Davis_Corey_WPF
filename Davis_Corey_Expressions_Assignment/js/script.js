/**
 * Created by CoreyDavis on 4/16/15.
 * MDV 2330
 * Expressions Assignment
 */

//Add alert to test my file
alert("JavaScript is functional!");

//variables
var sprayLength;  //Variable Declaration
var yardLength;  //Variable Declaration
var yardWidth;  //Variable Declaration



//prompt for Sprinkler watered area
sprayLength=Number(prompt("Calulation of unwatered lawn area." +
" \nPlease enter the considered sprinkler spray length in feet."));

//1st Area Calculation
var sprayArea=sprayLength*sprayLength;  //Length squared and set to area
sprayArea*=3.14;  //PI * Length squared

//outputs
console.log(sprayArea);