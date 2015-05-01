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
