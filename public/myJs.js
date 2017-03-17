// All Views are controlled from here

//========== Global Variables ============
var value = '', array = [], index = 0, span = '', newArray = [];
//============== End ===============

//========== Main Functions ==============

// create new array
function createArray(){
    var arraySize = parseInt(document.getElementById('arraySize').value);
    if(arraySize) {
        array = new Array(arraySize);
        setArray(array);
        arrayStatus();
    }
}

// show Array status
function arrayStatus(){
    array = getArray();
    newArray = checkLogicalSizeOfArray(array);
    span = document.getElementById('showArray');
    span.innerHTML = 'Array: ' + '[' + array + ']'  +
        '<br /><br />' + 'Size of array: ' + array.length +
        '<br /><br />' + 'Logical Size of array: ' + newArray.length;
}

// insert Element at particular index of Array
function insertElement() {
    value = document.getElementById('element').value;
    index = parseInt(document.getElementById('arrayIndex').value);
    array = getArray();
    newArray = checkLogicalSizeOfArray(array);
    if(index < 0 || index >= array.length){
        alert('This index not present in Array');
    }
    else if(newArray.length == array.length){
        alert('Array is full!')
    }
    else if(!array.length){
        alert('Array is empty..')
    }
    else {
        array[index] = value;
        setArray(array);
        arrayStatus();
    }
}

// delete Element from Array
function deleteElement(){
    value = document.getElementById('element').value;
    array = getArray();
    if(array.length) {
        index = array.indexOf(value);
        if (index != -1) {
            array.splice(index, 1);
            setArray(array);
            arrayStatus();
        }
    }
    else {
        alert('Array is empty..')
    }
}

// update Element in Array
function updateElement(){
    value = document.getElementById('element').value;
    var newElement = document.getElementById('newElement').value;
    array = getArray();
    index = array.indexOf(value);
    if(index != -1){
        array.splice(index, 1, newElement);
        setArray(array);
        arrayStatus();
    }
}

// search Element in Array
function searchElement(){
    array = getArray();
    value = document.getElementById('element').value;
    index = array.indexOf(value);
    span = document.getElementById('searchResult');
    if(index != -1){
        span.innerHTML = 'Search Result: ' +value + ' found at index ' + index + ' of the Array';
        span.style.color = 'green';
    }
    else {
        span.innerHTML = 'Search Result: ' +value + ' not found in the Array';
        span.style.color = 'red';
    }
}

// sliceElement
function sliceElement(){
    value = document.getElementById('element').value;
    var newElement = document.getElementById('newElement').value;
    array = getArray();
    index = array.indexOf(value);
    var endingIndex = array.indexOf(newElement);
    span = document.getElementById('slicedArray');
    if(index != -1 && endingIndex < array.length){
        span.innerHTML = 'Sliced Array: ' + '[' + array.slice(index, endingIndex + 1) + ']';
        span.style.color = 'green';

    }
    else {
        span.innerHTML = 'Slicing Range is not valid..';
        span.style.color = 'red';
    }
}

// Sort Array in both orders
function sortArray(order){
    array = getArray();
    span = document.getElementById('sortedArray');
    if(order === 'asc') {
        span.innerHTML = 'Ascending Sorted Array: ' + '[' + array.sort(function(a, b){return a-b}) + ']';
        span.style.color = 'green';
    }
    else {
        span.innerHTML = 'Descending Sorted Array: ' + '[' + array.sort(function(a, b){return b-a}) + ']';
        span.style.color = 'blue';
    }
}

//============== End ===============

//========== Helper Functions ==========

// check Array Existence
function checkArrayExistence(){
    array = getArray();
    if(array && array.length){
        alert('An Array is already exist in DB');
        alert('click Update to update existing one..');
        arrayStatus();
    }
    else {
        alert('No Array exists in DB, Create a new One..');
    }
}
// set Array in Local Storage
function setArray(array){
    localStorage.setItem('array', JSON.stringify(array));
    arrayStatus();
}

// get Array from local Storage
function getArray(){
    return JSON.parse(localStorage.getItem('array'));
}

// check Logical size of array
function checkLogicalSizeOfArray(array){
    return array.filter(function(arr){
        return arr;
    });
}

//============== End ===============