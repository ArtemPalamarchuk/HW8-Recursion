function factorial(n) {
    if (n===1){return n}
    else{return n * factorial(n-1)}
}

factorialBtn.addEventListener("click", function () {
    let n = factorialInput.value;
    if (n <= 0) {return factorialDisplay.innerHTML = "Only positive numbers "}
    if (n === "1") {return factorialDisplay.innerHTML = "1"}
    if(n>10000){return factorialDisplay.innerHTML = "Infinity"}
    factorialDisplay.innerHTML = `Факториал числа ${n} = ${factorial(n)}`;
});


