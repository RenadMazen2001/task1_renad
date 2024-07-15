//renad mazen
class Numbers {
    constructor() {
        this.arr = []; // Initialize an empty array
    }

    setArray(array) {
        this.arr = array; // Set the array to the provided array
    }

    addNumbers(number) {
        this.arr.push(number); // Add a new number to the array
    }

    sumArray(start, end) {
        return this.arr.slice(start, end).reduce((sum, num) => sum + num, 0); // Calculate the sum of elements between start and end indices
    }

    equalizeNumber() {
        for (let i = 1; i < this.arr.length; i++) {
            let leftSum = this.sumArray(0, i); // Sum of elements on the left side of index i
            let rightSum = this.sumArray(i + 1, this.arr.length); // Sum of elements on the right side of index i

            if (leftSum === rightSum) {
                console.log(`Equalize Number: ${this.arr[i]}`); // If sums are equal, log and return the equalize number
                return this.arr[i];
            }
            console.log(`Index: ${i}, Left Summation: ${leftSum}, Right Summation: ${rightSum}`); // Log intermediate results for debugging
        }
        console.log(`No equalize number found`); // Log if no equalize number is found
        return null;
    }
}

// Create instances of Numbers
let arr1 = new Numbers();
let arr2 = new Numbers();

// Set the arrays using setArray method
arr1.setArray([3, 6, 9, 2, 4, 6, 8]); // Set array for arr1
arr2.setArray([1, 2, 1, 3, 1, 5, 1, 7]); // Set array for arr2

console.log(arr1.equalizeNumber()); // Find and log the equalize number for arr1
console.log(arr2.equalizeNumber()); // Find and log the equalize number for arr2
