// Created Online Javascript Repository
// SSD Died out of nowhere so i lost my notes :) - 7/2/2020

Arrays

Array Methods = arr.length


// ARRAY METHODS THAT MADE BIG CLICKS IN MY BRAIN LOL

.push() - Add element to END of array
.pop() - Removes LAST element of an array
.shift() - Removes FIRST element of an array
.unshift() - Add element to the BEGINNING of an array


// ALSO RANDOM BIG CLICKS

Then we can call testFun: testFun("Hello", "World"); - // "Hello" & World are ARGUMENTS
We have passed two arguments, "Hello" and "World". - //  function("THIS") - ARGUMENT







// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={} 


if..else Ternary Operator *

// In Javascript, if..else is the most basic condition statement, it consists of three parts:condition, statement1, statement2, like this:

if (condition) statementa
else           statementb

// An example, if we want to judge whether a number is odd or even, we can write code like this:

function oddEven(n){
  if (n%2==1) return "odd number";
  else        return "even number";
}

// If there is more than one condition to judge, we can use the compound if...else statement. an example:

function oldYoung(age){
  if (age<16)      return "children"
  else if (age<50) return "young man"   //use "else if" if needed
  else             return "old man"
}

This function returns a different value depending on the parameter age.

// Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:

condition ? statementa : statementb

// Condition and statement separated by "?", different statement separated by ":"
// in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

function oddEven(n){
  return n%2==1 ? "odd number" : "even number";
}

function oldYoung(age){
  return age<16 ? "children" : age<50 ? "young man" : "old man";
}



loop statement --while and do..whilee *

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}

// The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}

// The difference is, while judges the condition before perform code execution, do..while judges the condition after code run one time.

// Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

"Traverse an Array"

// To "traverse the array" is simply to go through each element in turn


"Properties and Methods"

var item = "Bottle of Water"
item.push("Juice");
console.log(items.push("Juice"))



"Study Array.Reduce & .concat = Array + Array"



"Selecting from Many Options with Switch Statements"
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.














// ________________________________________


// Basic JavaScript: Escape Sequences in StringsPassed

// - // Code	Output
// - \'	single quote
// - \"	double quote
// - \\	backslash
// - \n	newline
// - \r	carriage return
// - \t	tab
// - \b	word boundary
// - \f	form feed

// In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].


// You can also nest arrays within other arrays, like below:

[["Bulls", 23], ["White Sox", 45]]

// This is also called a multi-dimensional array.


In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true



Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3   // true
3 === '3'  // false


// Comparison with the Strict Inequality Operator

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true






















"Algorithm Challenges"

// Square Every Digit

// function sum(arr) {
//   var s = 0;
//   for (var i=0; i<arr.length; i++){
//     s = s + arr[i];
//   }
//   console.log(s);
// }

// sum([1,2,3,4,5])

// function makeNegative(num){
//   if (num < 0) {
//     return num {
//       else {
//         return num = num * num -1
//       }
//     }
//   }
// }

// let arr = [1,2,3,4,5,6];
// let arr1 = arr.splice(2,2);
// let arr2 = arr.splice(4);
// let arr3 = arr.splice(2,0,"a","b");
// let arr4 = arr.splice(2,1,"a","b")

// console.log(arr1);
// console.log(arr);

// console.log(arr2);

// console.log(arr4);


// function repeatStr(num, str){
//   var final = "";
//   if (num < 0) return "";

//   for (var i=0; i<num; i++) {
//     final += str;
//   }
//   return final;
// }

// repeatStr(4, "lol");

// searcg up recursion


// function repeatStr(num, str){
// if (num < 0) return "";
// return sum.repeat(num);
// }

// repeatStr(3, "yo")

// function repeatStr (n, s) {
//   if (n < 0) return "";
//   return s.repeat(n);
// }

bcdedit /set useplatformtick yes

bcdedit /set disabledynamictick yes

bcdedit /deletevalue useplatformclock