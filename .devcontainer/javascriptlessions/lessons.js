// //      variables -- 1
// const account = 10; // const cant be changed again once it is initilized 
// let account_email = "kittu@gmail.com"; // we mostly use let in this 
// var acc_pass = "12345"; // we wont use var mostly due to scope problem as it has functinoal scope problem
// account_city = "jaipur"; // it is not allowed but it is valid

// acc_pass = "231";// we can change var and let at anywhere in the scope 
// // rest we can do it we can change rest variables like let and var
// console.table([account,account_email,acc_pass,account_city]);

// //   Data types -- 2
// let age = 18;
// let name = "kit";
// let can_login = false;
// let some = 10.0;
// // we have null in java script too
// // undefined is a type in which when we wont define something 
// console.table([typeof age,typeof name,typeof can_login,typeof some]);

// // we use typeof for knowing the type of the datatype like number etc....

// //    Data Type Conversions -- 3
// let str = "33";
// console.log(typeof str);
// let num = Number(str);
// console.log(typeof num);
// let a = String(num);
// console.log(typeof (a));
// // if the conversion doesnt match it will give us nan
// /*  if we have string as 123ab
// and we try to convert to number then it gives us NaN (not an number)
// */ 

// // Operations --- 4
// console.log("1"+2);
// console.log(1+"2");
// console.log(1+2+"2");
// console.log("1"+2+2);
// /* 
// each of them has their own reference
// the first one and second one we get 12 
// but in the third and fourth we get differently like 32 and 122 
// */

// // comparsion of datatypes -- 5
// console.log(1==2);
// console.log(2>3);
// console.log(3<2);
// console.log(1!=2);
//  // the above once are common but we also have strict check ===
//  // === strict check 
//  console.log("2">1);//true
//  console.log("2"===1);//false

// //  Data Types Summary --- 6
// /* 
//  1 - Primitive 
//  7 Types : String,Number,Boolean,NUll,Undefined,Symbol,Big Int 

//  2-Reference (Non Primitive)
//  Arrays, Objects, Functoions 
// */
// //Primitive
// let userEmail;
// let some = null;
// let symb = Symbol('123');//it is a different datatype
// console.log(symb);

// const big_number = 12321232123212321232123n// it is a big int at last we need to keep 'n'
// // Non Primitive
// const so = [1,2,3];
// const obj = {
//     name:"pardhu",
//     age: 22,
// }
// const myFunction = function(){
//     console.log("hi");
// }
// myFunction();
// console.log(obj);

// //  Stack and Heap -- 7 
// /* 
// In stack primitive data types will be stored

// in stack the data will data will be copied but in heap the data will not be copied

// In Heap non primitive data types will be stored
// */
// let a = "some";
// let b = a;
// b = "sa";
// console.log(a);
// console.log(b);
// // here u can see that a and b are different even after i change 
// let user = {
//     name:"par",
//     age : 12
// }
// let user1 = user;
// user1.name = "kit";
// console.log(user);
// console.log(user1);
// // here the name in user is changed to kit aswell as the user1 as they both point to one object

// Number and Maths --- 8 
/*
we use toFixed(2) for rounding a decimal to two digits
we use toLocalString() for changing to numbers and keeping commas
Number.MAX_VALUE for max and Number.MIN_VALUE for min value

Maths 
-----
Math.abs() --> gives us the absolute value 
Math.round() --> rounds to nearest number
Math.ceil() --> rounds to highest nearest number
Math.floor() --> rounds to nearest lowest number
Math.max() --> gives max numbers
Math.min() --> gives min numbers
Math.random() -- gives random numbers 

*/

// Date -- 9

// let myDate = new Date();
// console.log(myDate.toDateString()); // gets the present date in day month format
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // gets the present date in mm/dd/yyyy format 
// console.log(myDate.toTimeString()); // get the time
// console.log(myDate.toLocaleString()); // time and date we mostly use this
// // for creating date
// let createdDate = new Date(2023,0,23); // for creation we need to pass parameters as (year , month(starts from 0), date)
// console.log(createdDate.toLocaleString());
// // we can also give time also
// let createdDateAndTime = new Date(2023,1,12,5,1);// hours , minutes format
// console.log(createdDateAndTime.toLocaleString());
// // we can also create like this
// let datea = new Date("12-01-2022");
// console.log(datea.toLocaleString());
// // for getting preset date and time we use now 
// let present = Date.now() // we get in milliseconds 
// console.log(present);// we use .getTime() for getting time 




// // Array -- 10
// //javascript arrays are mixed and resizeable arrays means we can and add delete dynamically and there will be mixed data types
// const my_arr = [1,2,3,4,5,6];// one way of delcraing
// const myarr = new Array(1,2,3,4,5); // another way of declaring
// console.log(my_arr);
// my_arr.push(7);// adds an element at last of the array .push()
// console.log(my_arr);
// my_arr.pop();//removes last element
// console.log(my_arr);
// my_arr.unshift(0) // adds an element at the starting of an array
// console.log(my_arr); 
// my_arr.shift() // removes an element at the starting of an array
// console.log(my_arr);

// console.log(my_arr.includes(3))// checks if this is present in array or not 
// console.log(my_arr.indexOf(3)) // gives the index of the element
// console.log(my_arr.join())// converts array to string 
// // there are two methods for slicing the array .slice(start,end) and .splice(start,end) but the point is 
// console.log(my_arr.slice(1,4)) // here there will be only three elementns from 1 to 3 and the original array will not be changed
// console.log(my_arr.splice(1,5)) // here there will be 5 elements and also the orginal array will be changed it will be divied into two parts
