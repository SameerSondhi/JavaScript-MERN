/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array

        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    let array = [];
    var index = 0;
    
    for(let i = 0; i<left.length; i++){
        // if(left[index]<right[i]){
            array.push(left[i])
        // }
    for(let j=0; j<right.length; j++)
            array.push(right[j])
        }
    for(let k=0; k<array.length; k++){
        var temp = array[k];
        if (array[k]>array[k+1]){
            array[k] = array[k+1]


        }
    }
    return array
    }
console.log(merge(sortedA3, sortedB3))

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {}

/*****************************************************************************/



function merge(left, right) {
    var combinedArr = [];
    var index = 0
    for(let i = 0; i < left.length; i++) {
        combinedArr.push(left[i])
    }
    for(let j = 0; j < right.length; j++){
        combinedArr.push(right[j])
    }
    for( let k = 1; k < combinedArr.length; k++) {
        let l = k-1
        let temp = combinedArr[k]
        while(l >= 0 && combinedArr[l] > temp) {
            combinedArr[l+1] = combinedArr[l]
            l--
        }
        combinedArr[l+1] = temp
    }

    return combinedArr;
}

console.log(merge(sortedA3, sortedB3))