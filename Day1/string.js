/*Example 1: 
Input: s = "Hello World" 
Output: 5 
Explanation: The last word is "World" with length 5. */

let str="Hello World"
let chr=str.split(" ")
let lastword=chr[chr.length-1]
console.log('The last word is "World" with length:'+lastword.length);

/*Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 */

let s = "   fly me   to   the moon  ";

// Step 1: Trim the string
let trim = s.trim();
console.log(trim);

// Step 2: Split the string into words
let split = trim.split(/\s+/);
console.log(split);

// Step 3: Find the last word
let lastWord = split[split.length - 1];
console.log(lastWord);

//Step 4: Calculate the length
let length = lastWord.length;
console.log(length);

/*Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false */

function isAnagram(str1, str2) {

    let string1 = str1.replace(/\s/g, "").toLowerCase();
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    let sort1 = string1.split("").sort().join("");
    let sort2 = string2.split("").sort().join("");

    return sort1 === sort2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));









