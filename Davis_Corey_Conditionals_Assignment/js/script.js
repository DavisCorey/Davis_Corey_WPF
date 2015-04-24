/**
 * Created by Corey Davis on 4/23/2015.
 * SDI MDV 2330
 * Conditionals Assignment
 */
//alert("Javascript is functional!");

//variable declarations
var oldPhone;  //user prompt variable
var newPhone;  //user prompt variable
var paymentsMade;  //user prompt variable
var remainBal;  //store calculation of old phone cost - payments made
var newCost;  //store calculation of new phone cost - payments made
var oldUpgrade;  //store calculation of 50% of old phone cost
var upgradeEligible;  //store calculation of payment needed to reach 50% of old phone cost
var monthlyCost;  //store remaining cost of new phone over 12 months

//user prompts
oldPhone=Number(prompt("Let's calculate how much it cost to upgrade to a new smartphone. \n Please input" +
    " the total cost of the current smartphone."));
newPhone=Number(prompt("How much is the new smartphone's retail cost?"));
paymentsMade=Number(prompt("Please input the total cost of payments made for the current smartphone."));


