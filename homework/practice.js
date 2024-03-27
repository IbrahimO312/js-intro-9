// TASK 2

function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
}

console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));


// TASK 4

function lastShortest(arr) {
    let shortest = arr[arr.length - 1]; // Initialize shortest to the last element
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i].length <= shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}

// Test cases
console.log(lastShortest(["red", "blue", "yellow", "white"])); // Output: "red"
console.log(lastShortest(["Apple", "Banana", "Mango"]));        // Output: "Mango"
console.log(lastShortest(["white", "yellow", "brown"]));        // Output: "brown"