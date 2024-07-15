//1.    Write a program that prints the numbers from 1 to 100.
//But for multiples of three, print "Fizz" instead of the number and 
//for the multiples of five, print "Buzz". 
//For numbers which are multiples of both three and five, print "FizzBuzz".

let i;
for(i=1;i<=100;i++)
{
    if(i%5==0 && i%3==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}


//2.   Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).


function message(str){
    let rev = str.split('').reverse().join('');
    if(str == rev)
    {
        console.log("Palindrome");
    }
    else
    {
        console.log("Not a palindrome");
    }
    return str;
}
message("level1");


//3.   Write a function that takes an array of numbers and returns the largest number.


function largest(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}
console.log(largest([2,4,6,8,10,12,11,9,7,5,3,1]));



//4.    Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.



function count(str){
    let str1 = {};
    for(let i=0;i<str.length;i++)
    {
        if(str1[str[i]])
        {
            str1[str[i]] += 1;
        }
        else
        {
            str1[str[i]] = 1;
        }
    }
    return str1;
}
console.log(count("priyadharshini"));



//5.   Write a function that takes a string and returns the longest word in the string.

function longest(str)
{
    let arr = str.split(' ');
    let max = arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].length>max.length)
        {
            max = arr[i];
        }
    }
    return max;
}
console.log("priya dharshini information technology");
console.log(longest("priya dharshini information technology"));


//6.    Write a function that takes a number as input and returns its factorial.


function factorial(num)
{
    let fact = 1;
    for(let i=1;i<=num;i++)
    {
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(10));


//7.     Write a function that converts a temperature from Celsius to Fahrenheit.


function CtoF(celsius)
{
    let fahrenheit = (celsius*9/5)+32;
    return fahrenheit;
}
console.log(CtoF(10));


//8.   Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.


function missing(arr)
{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    let n = arr.length+1;  //6
    let sum1 = n*(n+1)/2;  //6*(6+1)/2 = 21
    let sum2 = sum1 - sum;   //21-15 = 6
    return sum2;
}
console.log(missing([1,2,3,4,5]));