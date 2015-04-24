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
var blankstring;  //ternary declaration for blank input
var blankstring1;  //ternary declaration for empty input
var blankstring2;  //ternary declaration for zero input

//user prompts
oldPhone=Number(prompt("Let's calculate how much it cost to upgrade to a new smartphone. \n Please input" +
    " the total cost of the current smartphone."));
newPhone=Number(prompt("How much is the new smartphone's retail cost?"));
paymentsMade=Number(prompt("Please input the total cost of payments made for the current smartphone."));

//Validate User Prompts with Ternary
blankstring=(oldPhone=="")? oldPhone=Number(prompt("We left out some information \n Can you input the cost of your" +
    " current smartphone.")):false;
blankstring1=(newPhone=="")? newPhone=Number(prompt("We left out some information \n Can you input the cost of the new smartphone.")):false;
blankstring2=(paymentsMade=="")? paymentsMade=Number(prompt("We left out some information \n Can you input the estimated total cost" +
    " of payments made.")):false;

//Calculations
remainBal=oldPhone-paymentsMade;  //Calc of payments made taken from the old phone's value
newCost=newPhone-paymentsMade;  //Calc of difference of new phone cost and payments made on old phone
oldUpgrade=oldPhone/2;  //Calc of amount of old phone value of 50% to reach upgrade ability (TMobile used)
upgradeEligible=oldUpgrade-paymentsMade;  //Calc of amount needed to reach 50% for upgrade possibility
monthlyCost=newCost/24;  //Calc of new phones cost after upgrade over 24 months (TMobile used)

//Conditionals


