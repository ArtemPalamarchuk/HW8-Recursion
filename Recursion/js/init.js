// document.addEventListener("DOMContentLoaded", () => {
//
// });

function summ(a,b) {
    return a + b;
}

let btnCount = document.getElementById("btnCount");
let counterDisplay = document.getElementById("countResult");
counterDisplay.innerHTML= 0;

btnCount.addEventListener("click", function () {
    counterDisplay.innerHTML++
});



let recCount = document.getElementById("recCount");
let recDisplay = document.getElementById("recResult");
recDisplay.innerHTML= 0;

recCount.addEventListener("click", function () {

    setInterval(f,10)
    function f() {
        recDisplay.innerHTML++;
    }
});

//Facorial-------------------------------------------------------
function factorial(n) {
    if (n===1){
        return 1;
    }else{
        return  n * factorial(n-1);
    }
}
console.log(factorial(5));
//---------------------------------------------------------------

//binarySearch---------------------------------------------------
function createArr(from, to){
    let str = [];
    if(from < to){
        let count = to - from;
        for(let i = 0; i <= count; i++){
            str[i] = from;
            from++;
        }
    }
    else if(to < from) {
        let count = from - to;
        for(let i = 0; i <= count; i++){
            str[i] = to;
            to++;
        }
    }
    return str;
}

let str1 = createArr(1,100000);
let steps = 0;
let search = 3;
function  binarySearch(first, last, search) {
    steps++;
    let middle = Math.floor((first + last)/2)
    if(str1[middle] === search){
        return str1[middle];
    }
    if(str1[middle] > search){
        return binarySearch(first, middle, search);
    }
    if(str1[middle] < search) {
        return binarySearch(middle, last, search);
    }
}

console.log(binarySearch(str1[0],str1[str1.length - 1],search,str1));
console.log(steps + " steps");
//---------------------------------------------------------------
//fibonachi---------------------------------------------------
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log( fib(11) );
//---------------------------------------------------------------