//create XMLHTTP Request

//step 01 (Object to be sent from Client side)
var myrequest = new XMLHttpRequest();

//step 02 (request to server side using the object we created in step 01)
myrequest.open("GET","https://restcountries.com/v3.1/all",true)

//step 03 (Creating a bridge to server to send our request in step 02)

myrequest.send();

//Our request procedure is done now. Here after the response from server side

//step 04 () Server Response

//Onload - It is a event that will load our response from server into the function and give us. So, we need function to use this event

//function - Going to be anonymous function here for now

//response

myrequest.onload = function()
{
  var data = myrequest.response;
  console.log(data)  
}

