
//Function:

//--------------------------------------

// //function example


// function addition(a,b) //don't want to declare using var let const
// {

//   console.log("Addition : "+a+b)

// }

// function multiply(a,b)
// {

//   console.log("Multiplication :"+a*b)

// }


// addition(5,9);
// addition(5,8);
// addition(5,3);
// addition(5,1);

// multiply(5,9);
// multiply(2,8);
// multiply(22,99);

// //--------------------------------------
// //other method

// var x = 100;
// var y = 3;

// function add(n1, n2)
// {

// console.log(n1+n2)

// }
// add(x, y)

// //-------------------------------------
// //Other method

// var xx = 23;
// var yy = 32;

// function adding(aa,bb)
// {

// console.log(aa+bb);

// }

// adding(xx,yy);
//--------------------------------------

//use return

//In previous method, actualling console.log is there inside the function, so my result will be already out and stored. I can just call it whenever needed. 

//but here, I am going to console and get the result at the place where needed. So, unwantedly I am not going to store data

//lines of code reduced

function subtract(l, m, n)
{
return(l-m-n);
}
console.log(subtract(10, 4, 2));

//-----------------------------

//Question 01: Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

console.log("Question 1.a: Print odd numbers in an array")

//{1, 2, 3, 4, 5, 6, 7, 8}

var samplearray;
var oddnumbers = [];

function odd(samplearray)
{
    for(var i=0; i<samplearray.length; i++)

    if(samplearray[i]%2!==0)
    {
        oddnumbers.push(samplearray[i]);
    }
    return oddnumbers;
}
console.log(odd([11, 12, 13, 34, 75, 86, 79, 80, 99, 1001])); //In this function call, we have added the array rather than assigning in the starting line


//another type: 

var samplearray02;
var oddnumbers02 = [];

function odd02(samplearray02)
{
    for(var i=0; i<samplearray02.length; i++)

    if(samplearray02[i]%2!==0)
    {
        oddnumbers02.push(samplearray02[i]);
    }
    console.log(oddnumbers02)
}
odd02([1, 2, 3, 4, 5, 6, 7])