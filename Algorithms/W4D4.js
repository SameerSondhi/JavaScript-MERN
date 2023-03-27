/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    var bool = false
    const split1 = s1.toLowerCase().split('').sort()
    const split2 = s2.toLowerCase().split('').sort()
    console.log(split1)
    console.log(split2)
    if (s1.length <s2.length){
        bool = false
    }
    for(let i=0; i<s1.length; i++){
        if (split1[i] == split2[i]){
            bool= true
        }
        else{
            bool = false
        }
    }
    return bool
}
//     for (let i=0; i<split1.length; i++){
//         for(let j=0; j<split2.length; j++){
//             if (split1[i] == split2[j]){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }
//     }
// }


/*****************************************************************************/

/**
 * Determines whether neededChars can be built using the chars of availableChars.
 * - Time: O(n + m) -> O(n) linear, n = neededChars length,
 *    m = availableChars length.
 * - Space: O(m) -> O(n) since it's still linear just call it n for simplicity.
 * @param {string} neededChars
 * @param {string} availableChars
 * @returns {boolean}
 */
// function canBuildS1FromS2(neededChars, availableChars) {
//     // Code goes here
// }

console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));
