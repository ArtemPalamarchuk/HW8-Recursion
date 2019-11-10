//Compare time by binarySearch and by Cycle (UI)
function createArr(quantity) {
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

//Compare searching time in LinkedList and Binary Tree (Console)

const binaryTree = new BinaryTree();
const binaryTreeNode = new BinaryTreeNode();
const linkedList = new LinkedList();

// Create array in diapason 0 - to
function createArr(to){
	let arr = [];
	for(let i = 0; i < to; i++){
		arr.push(i);
	}
	return arr;
}

// Mix array
function shuffle(array){
	 let j, temp;
	 for(let i = array.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	 }
	return array;
}

// Add to tree random uniq elements with length -> length
function makeTree(length){
	let array = createArr(length);
	let unsortedArray = shuffle(array);
	for(let i = 0; i < unsortedArray.length; i++){
		binaryTree.push(unsortedArray[i]);
	}
}
 
//Test search time in tree
function testTree(elem){	
	startTestBinary = performance.now();
	binaryTree.search(elem);
	endTestBinary = performance.now();
    res = endTestBinary - startTestBinary;
	console.log(res);
}

// Add to Linked List random uniq elements with length -> length
function makeLinkedList(length){
	let array = createArr(length);
	let unsortedArray = shuffle(array);
	for(let i = 0; i < unsortedArray.length; i++){
		linkedList.push(unsortedArray[i]);
	}
}

//Test search time in Linked List
function testLinkedList(elem){	
	startTestBinary = performance.now();
	linkedList.search(elem);
	endTestBinary = performance.now();
    res = endTestBinary - startTestBinary;
	console.log(res);
}



