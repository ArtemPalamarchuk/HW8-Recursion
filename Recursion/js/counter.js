recursiveBtn.addEventListener("click", function () {
    recursiveDisplay.innerHTML = count()
});

let count = makeCounter();
function makeCounter() {
    function counter() {
        console.log(counter.currentCount)
        return counter.currentCount++;
    };

    counter.currentCount = 1;
    return counter;
}