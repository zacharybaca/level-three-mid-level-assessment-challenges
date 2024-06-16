/* Challenge 1: Sort Array with Preserved Index for -1 Values */

/* You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array. */

function solution(arr){
    // Create Index To Use For Sorted Data
    let index = 0;

    // Sort Values That Are Not -1
    // Returns Array Of Sorted Values, Excluding Values of -1
    const sorted = arr.filter((val) => val !== -1).sort((a, b) => a - b);

    // Sort Entire Array
    return arr.reduce((arr, i) => {
        // If Value is -1, Add Value To Array
        if (i === -1) {
            arr.push(-1);
        }
        // If Value is Not -1, Add The Next Value That is in The Sorted Data
        else {
            arr.push(sorted[index++])
        }
        return arr;
    }, [])
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))