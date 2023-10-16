// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// describe("getData", (array) => {
//   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
//     expect(getData(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: getData
// input: array of objects
// output: array with sentence about each person with their name capitalized
// process: create variable to hold the value of the completed array, iterate through the array of objects using .map() higher order function,use dot notation to call on values within object (name and occupation), use use .split() to turn name string into array, create variable to hold the value of the capitalized name, use .map() to iterate through newly created names array, use built in methods .charAt(), .toUpperCase(), and .slice() , to uppercase the letter at index 0 then + to add back the rest of the characters from index 1 to end use .join() to turn word array back into string, use string interpolation the write the output sentence, return the second array variable

// const getData = (array) => {
//   const array2 = array.map(character => {
//     const names = character.name.split(" ")
//     const capitalize = names.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
//     return `${capitalize} is ${character.occupation}.`
//   })

//   return array2
// }
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
// describe("remainderArray", (array) => {
//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     expect(remainderArray(hodgepodge1)).toEqual([2, 0, -1, 0])
//     expect(remainderArray(hodgepodge2)).toEqual([2, 1, -1])
//   })
// })
// b) Create the function that makes the test pass.

// Pseudo code:
// function name: remainderArray
// input: array of mixed values
// output: array of the remainder of each of the integers in the array when divided by 3
// process: create an empty array to hold the remainders, for loop to iterate through array, creat a conditional using typeof operator to determine if the value at each index is a number, use modulo operator to return the remainder of each number divided by 3, use .push() to add the remainders to the empty array

// const remainderArray = (array) => {
//   const newArray = []
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       newArray.push(array[i] % 3)
//     } 
//   }
//   return newArray
// }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
// describe("cubeSum", () => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//     expect(cubeSum(cubeAndSum1)).toEqual(99)
//     expect(cubeSum(cubeAndSum2)).toEqual(1125)
//   })
// })
// b) Create the function that makes the test pass.

// Pseudo code:
// function name: cubeSum
// input: array of numbers
// output: sum of all the numbers in the array cubed
// process: create variable equal to 0 to hold final result, iterate through the array of numbers, use Math.pow() method to return each value in the array raised to the third power, add to sum so that returning sum will return the sum of all the numbers

const cubeSum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
      sum += Math.pow(array[i], 3)
  }
  return sum
}
