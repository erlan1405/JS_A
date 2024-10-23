const outputDiv = document.getElementById('output');

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function displayPrimes(n, current = 2) {
    if (current > n) {
        //Alert once all primes are displayed
        alert('Calculation finished!');
        return;
    }
    
    if (isPrime(current)) {
        outputDiv.innerHTML += `${current}<br>`;
    }
    
    //Use setTimeout to allow the browser to render
    setTimeout(() => displayPrimes(n, current + 1), 0);
}

//Run the function with n = 10,000
displayPrimes(10000);
