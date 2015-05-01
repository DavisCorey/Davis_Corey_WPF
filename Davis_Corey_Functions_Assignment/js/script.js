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
while(makeProduct===""||isNAN(makeProduct)){
    //Re-prompt User
    if(makeProduct===""){  //Blank
        makeProduct=prompt("Please do not leave blank, \n what is the cost of each product to make each:");
    }else if(isNaN){  //Not a number
        makeProduct=prompt("Please only use numbers, \n can you enter the cost of each product to make each:");
    }
}
//Prompt user for cost to make product
var sellProduct=prompt("Please enter the expected retail cost of the product or service individually:");
//Parse returned value to a number
sellProduct=parseInt(sellProduct);
//Prompt Validation
while(sellProduct===""||isNAN(sellProduct)){
    //Re-prompt user 
    if(sellProduct===""){  //Blank
        sellProduct=prompt("Please do not leave blank, \n what is the retail value for each product:");
    }else if(isNaN){  //Not a number
        sellProduct=prompt("Please only use numbers, \n can you please retail cost for each product:");
    }
}
