let arr=[10,'yoga',89,1.9,"learn js"]
console.log(arr);

//1.push -> used to add one or more element at the end of the array
console.log(arr.push(true, 'let')) //7
console.log(arr); //[ 10, 'yoga', 89, 1.9, 'learn js', true, 'let' ]

//2.pop -> used to remove 1 element at the end of the array
console.log(arr.pop())//let
console.log(arr) //[ 10, 'yoga', 89, 1.9, 'learn js', true ]

//3.shift  -> removes one element at the beginning of the array 
console.log(arr.shift()) //10
console.log(arr) //[ 'yoga', 89, 1.9, 'learn js', true ]

//4.unshift - > add one or more elements to the beginning array
console.log(arr.unshift('element',123)) //7
console.log(arr) //[ 'element', 123, 'yoga', 89, 1.9, 'learn js', true ]

//5.includes
console.log(arr.includes(123))//true

//6.indexOf
console.log(arr.indexOf(123))

//7.join
let arr1=['element','shift']
console.log(arr1.join("-"))//element-shift

//reverse
console.log(arr1.reverse());

//sort
console.log(arr.sort())



