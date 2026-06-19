// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
const num1 = 100
// Declare a variable using let and assign it the number 45.
let num2 = 45
// Log both.
console.log(num1,num2)

//note: const first = 100
//        let sec = 45'
//        console.log(first, sec)


// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
let result = (((num1 + num2) - 20)* 2) / 5;
// Log the result.
console.log(result)

//note: const doMath = (((first + sec) - 20)* 2) / 5;



// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
//

// console.log(num1 = 10);
console.log(num2 = 4);

// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer:
//                  1. After reassign the let variable to a diferent number, using "let",
//                     the variable's value can change. 
//                  2.when ssing "const", it can't change the value of the varible's. Since 
//                      it protect the varible's access permission, make it as constant.
//                     

// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.

let number = 47
function checkEvenOdd (num)
{
  if (num % 2 ===0)
  {
    console.log("even")
  }
  else
  {
    console.log("odd")
  }
}
checkEvenOdd(number);

//note: const isEven = 47 % 2 === 0
//      if (isEven) {
//        console.log('even')
//      }else {
//        console.log('false')()
//      }


// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: 1. The % returns the remainder of the expresion's.
//                  2. This is the really common method to check if the number is odd or even
//                     it applys in mutiple situations, such as chess game, and any games related with 
//                     grid. We need to use it to check the where accurate positions are for the avatar.
//                  


// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp) 
// ------------------------------------------------------------


console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "  // note : is is a string

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim())
// console.log(rawInput.trimEnd())
// console.log(rawInput.trimStart())


// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase() )

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
console.log(rawInput.toLowerCase().includes("awesome"))

//note: console.log(rawInput.toLowerCase().indexOf('awesome').tostring())

// B5.
// Log the first 10 characters of rawInput.
console.log(rawInput.slice(0,10));

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
console.log(rawInput.trim().split(" "))
//note: return a sting of array data type.
//      if code . split('b') then it will remove the character 'b', the 
//      split the rest of the words.

//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: .split() method is converting a string to an array, if using "" as a parameter then it will
//                 split whole string characters to a single char then insert to an array. 
//                 And when split depend on what inside of an array, if it include a whitespace,
//                 then pass in the whitespace in the parameter as a split thing to split.



// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

//note: const scores = [88, 72, 95, 60, 84, 100, 73, 91, null, {}, function() {}]
// In JS this is a dynamic by default, in an  array you can mix the data type in the array
// let str = 'abdul'
// str[2] = 'something'
//result : will not change a string

//note: scores[2] = 66
// result : will change the array scores = [88, 72, 66 ......] 


// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0],scores[scores.length-1])

// C2.
// Log the total number of scores we see in the array.
console.log(scores.length)

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
console.log(scores.push(78))
console.log(scores)

// C4.
// Use a method to log the index of the score 95.
// Log the index.

console.log(scores.indexOf(95))
//console.log(scores.indexOf(72) + 1 ) 

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
console.log(scores.includes(50))

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
console.log("c6")
// let results = ""
// for (let i = 0; i < scores.length; i ++)
// {
//   results += `${scores[i]}\n`
// }
// console.log(results)

function display (arr)
{
  for(let i = 0; i < scores.length; i++)
  {
  console.log(`${arr[i]}\n`);
  }
}
display(scores);


//note: for(let i = 0 ; i < scores.length; i++){
//         console.log(scores[i])}



// C7.
console.log("------------------")
console.log("c7")

// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//

scores.forEach((score) => {
  console.log(score);
});

//class note:
// run this function for every item i the scores array
// const scores = [88, 72, 95, 60, 84, 100, 73, 91]
// const cb = function(item){
// console.log(item)}

//class note:  call back function
// scores.forEach(function(item)){
//        conlose.log(item)
//    
//        //need more code here

//        }        

// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other? 

//          answer: 1.The forEach method is less-coded and more organized. 
//                  And it is only for arrays. The for loop gives more conrol,
//                  and it can break and continue.
//                  2. There is no better than the other.
//                   



// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
// const scores = [88, 72, 95, 60, 84, 100, 73, 91]

const filterScores = scores.filter((score) => {
  return score > 80
})
console.log(filterScores)
//second way to write it.
// const filerScores2 = scores.filter(function(score){
//   return score >80
// })

// class note:
// const filterScores = scores.filter(function(item)){
// return item >= 80
//})
// console.log(filterScores)

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer:
//    newArr save the new array(result) which every score is multi by 2 already.
const newArr = scores.map((score)=>{
  return score * 2;
})

console.log(newArr)

//class note: 
//const scores = [88, 72, 95, 60, 84, 100, 73, 91]
// const doubledScores = scores.map(funciton(src){
// return scr * 2
//})
// conlose.log(doubledScores)


// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.

// const varthree = "city of New York"

console.log(student.name, student['city'])

//class note: console.log(student.name, student['city'])

// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.

student.grade = 'B+';
console.log(student)

//for example:
//student['gender'] = 'F'
//console.log(student)

// class note:
//student.grade = 'B+'
//console.log(student)

// D3.
// Use a method to log all of the keys in the object.

console.log(Object.keys(student))

//class note:
//console.log(Object.keys(student))

// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student))

//class note:
////console.log(Object.values(student))

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)

// for(let (key) in (object))


// student.name <--- its only going to show the name
// student[] <------ you put the key value inside and it will show whatever the key value is

for(let key in student){
  console.log(`${key}: ${student[key]}`) 
}

//class note
// the key is a varible, it can change the name you want
// for(let key in student){
//  //the key is a string
// consle.log(key. ':', student[key]}


// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer:
//                  1. The dot notation is using the property itselves name to accesse.
//                     THe bracket notation is using a string or variable to accesse.
//                  2.If we have a object that has a string name as a property then we need to use 
//                    bracket notation instead of dot notation.
//                    such as : const student = {
//                                                "name": "Brunson",
                                            //    age: 29,
                                            //    city: "New York",
                                            //    enrolled: true
                                            //  }
                      // Then we need to use student[name]


// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]
// E1.
// Log the name of the third student.

// note:
//consle.log(roster[2].name)

// E2.
// Using forEach, log the name of every student who is present.

//note: itemsleves are an objects
//roster.forEach(function(item)){
//  console.log(item.name)
//}

// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.

// note:
//const filteredStudents = roster.filter(function(str)
//return str.grade >= 70 )}
//consle.log(filteredStudents)


// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.

//note:
// const modifiedStudentsArr = roster.map(function(std)){
// return std.name}
////consle.log(modifiledStudentsArr)

// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer:


// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//

//note:
//function greet(name){
//reture'Hello', + name + '!'}
console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"

// note:
// 1. const another = function(){}
//2. const yetAnotherArrow = () => {}


// F2.
// Write a function called square that takes a number and returns its square.
//

//note:
//function square(num){
//return num = num
//}
console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer:


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//

//note:
//


console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//

// note: 
// function sum (arr){
//let total= 0 
// for (let index = 0; index < arr.length; index ++){
// const num = arr[index]
//total += arr[index]}
// return total
//}

//can we use arr.map? not, we don;t need to use it. cz it is a loop
//.map always return a new arr, we don't need it.

console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//

//note:
//function myForEach(arr,callback){
// for (let index = 0; index < arr.length; index ++){
// const num = arr[index]
// callback(item) // this is call the function back
//}
myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer:


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//

//note:
// function myMap (arr,callback){
// const newArry = [] 
// for (let index = 0; index < arr.length; index ++){
// const resultOfCallback = callback(arr[index]){
// newArray.push(resultOfCallback)}
// return newArry
//}

// note:
// this is how callback function works 
//function hereFn(n){
//  n = n*2
//}
//console.log(myMap([1, 2, 3], hereFn(n)))


console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//


//note:
// function myFilter (arr,callback){
// const newArry = [] 
// for (let index = 0; index < arr.length; index ++){
// const is ture = callback(arr[index]){
// if (isTure){
// newArry.push(arr[index])}
// return newArry
//}

console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer:
