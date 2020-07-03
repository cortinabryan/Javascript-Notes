// Created Online Javascript Repository
// SSD Died out of nowhere so i lost my notes :) - 7/2/2020

Arrays

Array Methods = arr.length


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