/* function createArr(quantity) {
    let arr = [];
    for (let i = 0; i < quantity; i++){
        arr[i] = i;
    }
    return arr;
}
let arr1;


createArray.addEventListener("click", function () {
    let n = elQuaInput.value;
    arr1 = createArr(n);
});


function testCycle(el) {
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i]===Number(el)){
            return;
        }
    }
}


testByCycle.addEventListener("click", function () {
    let startTest = performance.now();
    testCycle(searchingElement.value);
    let endTest = performance.now();
    let res = endTest - startTest;
    testCycleDisplay.innerHTML =` ${res.toFixed(1)} milliseconds(cycle)`;
});

testByBinary.addEventListener("click", function () {
    let startTestBinary = performance.now();
    binarySearch(arr1[0], arr1[arr1.length - 1], searchingElement.value, arr1)
    let endTestBinary = performance.now();
    let res1 = endTestBinary - startTestBinary;
    testBinaryDisplay.innerHTML =` ${res1.toFixed(1)} milliseconds(binary)`;
});




let steps = 0;
function  binarySearch(first, last, search, arr) {
    steps++;
    let middle = Math.floor((first + last)/2);
    if(arr[middle] === Number(search)){
        console.log(steps + " количество шагов");
        steps = 0;
        return `Елемент ${arr[middle]} найден за ${steps} шаг(а)(ов)`;
    }
    if(arr[middle] > search){return binarySearch(first, middle, search, arr);}
    if(arr[middle] < search) {return binarySearch(middle, last, search, arr);}
}



 */