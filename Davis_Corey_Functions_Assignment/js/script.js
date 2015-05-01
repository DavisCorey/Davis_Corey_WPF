/**
 * Created by Corey Davis on 4/30/2015.
 * SDI MDV 2330
 * Functions Assignment
 */
//alert("Javascript Functional!");


//Prompt user for cost to make product
var makeProduct=prompt("To evaluate the maximum profits for this start-up business" +
    ",\n please enter the cost to produce each product individually:");
//Parse returned value to a number
makeProduct=parseInt(makeProduct);
//Prompt Validation
var isNAN = function (makeProduct,sellProduct,weekProduction) {
    
};
while(makeProduct===""|| isNAN(makeProduct)){
    //Re-prompt User
    if(makeProduct===""){  //Blank
        makeProduct=prompt("Please do not leave blank, \n what is the cost of each product to make each:");
    }else if(isNaN){  //Not a number
        makeProduct=prompt("Please only use numbers, \n can you enter the cost of each product to make each:");
    }
}
//Prompt user for cost to sell product or service
var sellProduct=prompt("Please enter the expected retail cost of the product or service individually:");
//Parse returned value to a number
sellProduct=parseInt(sellProduct);
//Prompt Validation
while(sellProduct===""||isNAN(sellProduct)){
    //Re-prompt user
    if(sellProduct===""){  //Blank string
        sellProduct=prompt("Please do not leave blank, \n what is the retail value for each product:");
    }else if(isNaN){  //Not a number
        sellProduct=prompt("Please only use numbers, \n can you please retail cost for each product:");
    }
}
//Prompt user for units manufactured per week
var weekProduction=prompt("Please enter the expected  product that can be produced per week:");
//Parse returned value to a number
weekProduction=parseInt(weekProduction);
//Prompt Validation
while(weekProduction===""||isNAN(weekProduction)){
    //Re-prompt user
    if(weekProduction===""){  //Blank string
        weekProduction=prompt("Please do not leave blank, \n what is the number of products promised per week:");
    }else if(isNaN){  //Not a number
        weekProduction=prompt("Please only use numbers, \n can you please input the number of product produced weekly:");
    }
}
//Anonymous Function for initial calculation of cost for a week supply of inventory
var startupCost;
startupCost = function (cost,inventory) {
    var total=cost * inventory;
    return total
}(makeProduct,weekProduction);

 //Display of week of production cost
console.log("One week of manufactured products will cost"+startupCost);

var totaloutput=returnedInvestment(makeProduct,sellProduct,weekProduction);
console.log("To produce this product for "+makeProduct+" dollars and will make "+totaloutput+" dollars in profits." )

//Function to evaluate profits
function returnedInvestment(num1,num2,num3){
    //Calculate
    var totalProfits= (num2*num3)-(num1 * num3);
            //return value
    return totalProfits;
}


/*Test values entered
Product cost to make 7
Product cost to sell  10
Product manufactured per week 500
Output 3500 in cost for production and 1500 in profits
 */