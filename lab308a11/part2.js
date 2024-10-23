const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
}


const facto = (n, a = 1) => {
    if (n === 0) return a; // The base case, to stop recursion
    return () => facto(n - 1, n * a); // The recursive call
}


const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
        result = result(); // Call a function until it returns a new function 
    }
    return result; // Return the final result
}
