/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh()
function as an argument, pass an inline function expression instead.
*/

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(num){
    var ha = ""; 
    for (x = 0; x < num; x++){ 
        ha += "ha";
    }  
    return ha + "!";
});
