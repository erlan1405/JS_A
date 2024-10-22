let counter = 0;

//Create a recursive function
function recursiveFunction() {
    //Increment the counter
    counter++;
    //Call itself recursively
    recursiveFunction();
}

//Use a try/catch block to catch the error
try {
    recursiveFunction();
} catch (error) {
    //Log the error and the counter value
    console.log("Error: " + error.message);
    console.log("Maximum stack size reached after " + counter + " calls.");
}
