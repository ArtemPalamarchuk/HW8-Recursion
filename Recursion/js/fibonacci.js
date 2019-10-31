function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

fibonacciBtn.addEventListener("click", function () {
    let n = fibonacciInput.value;
    fibonacciDisplay.innerHTML = `${fib(n)}`;
});