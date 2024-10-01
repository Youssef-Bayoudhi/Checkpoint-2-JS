1//

function reverseString(str) {
    return str.split('').reverse().join('')
}

2//

function countCharacters(str) {
    return str.length
}

3//

function Capitalizewords ()
var text = " ";
var result = text.toUpperCase();
return result 

4//

function findMax(arr) {
    return Math.max(arr)
}
function findMin(arr) {
    return Math.min(arr)
}       

5//

function sumArray(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

6//

function filterArray(arr, condition) {
    return arr.filter(condition)
}

7//

function factorial(n) {
    if (n < 0) return -1
    var result = 1
    for (var i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

8//

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

9//

function generateFibonacci(n) {
    let fibSequence = [0, 1];
    for (var i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence.slice(0, n);
}