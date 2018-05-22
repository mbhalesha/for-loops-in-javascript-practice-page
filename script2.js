// //syntax for a for loop
// //inside of the () is the syntax with 2 semi colons and there are 3 segments inside the ()
// // for (;;){

// // }
// // middle part is a condition - as long as the condition is true, whatever is inside the curly braces is going to run, otherwise will skip to the next line of code under the curly braces, as soon as it is 10, will be the stopping point
// // the last segment is add one to i after every iteration
// // can do i-- which is the countdown example
// // in this example, we're printing out 0-10

// for (var i = 0; i<11 ; i++){
// console.log(i)
// }

// //let's say we want to do 10 to 0

// for (var i = 10; i>=0 ; i--){
//     console.log(i)
//     }

// incorporate the DOM and add a for loop
// user types something and we are going to count the total number of a's

function count (){
    var input = document.getElementById("textarea").value;
    var count = 0;

    for (var i = 0; i < input.length; i++){
        if (input[i] =="A" || input [i] == "a"){
            count++;
// this would work too:  if (input[i].toUpperCase () =="A")}


    }
}

    document.getElementById("results").innerHTML = "There are " + count + " A's in the text."

}