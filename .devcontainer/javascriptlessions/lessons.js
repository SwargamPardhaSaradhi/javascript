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

// const arr = [1,2,3,4];
// const att2 = [14,5,6,7];
// const arry = arr.concat(att2); // this method is for concating two arrays
// console.log(arry);
// there is also spread operator like ... for spreading 
// const ar = [...arr,...att2]
// console.log(ar);

// // we can use flat for flatterning the arr which is multi 

// console.log(Array.from("pardhu")); // this method will make array of the stiring or objects
 
// // we can do arrays by Array.of(var1, var2, var3, ...);




// objects  ---  11
// sigleton 
//object literals
// const Jsuser = {
//     name:"pardhu",
//     age:20,
//     lastVisit :["monday","tuesday"]
// }

// console.log(Jsuser.name); // this is one way 
// console.log(Jsuser["name"]); // this is another way but me mostly use by . operator

// Jsuser.name = "kitu" // for changing the objects
// // Object.freeze(Jsuser) // we will freeze the objects we cannot change the values in object

// Jsuser.greetings = function(){ // we will create object functions like this 
//     console.log(`${this.name}`); // by this variable we can access the object values
// }
// Jsuser.greetings(); // if we freeze the object it wont work

// objects 2 

// // we can declare an object and then we can add values ex below
// const ob1 = {};
// ob1.name = "kit";
// ob1.age = 21;
// console.log(ob1); // here the object will automatically add the values to the object
// // we can also nest objects 
// const obj1 = {1:'1',2:'2'};
// const ob2 = {3:'3'};
// const ob3 = Object.assign({},obj1,ob2); // this is used for merging the objects the first {} is not mandatory but we can keep for better use
// console.log(ob3);

// // we can also use spread operator
// const obj3 = {...obj1,...ob2};
// console.log(obj3);

// // for getting the keys of the object we will use Object.keys()
// console.log(Object.keys(ob1));
// console.log(Object.values(ob1)); // similarly for values
// console.log(Object.entries(ob1)); // for getting in array

// console.log(ob1.hasOwnProperty('name')); // for checking the property is present or not

// // we can also destructure the object also 

// const {name} = ob1;
// console.log(name);

// // we can also rename them 
// const {name: myName} =ob1;
// console.log(myName); // this is how we mostly destructure the object


//  functions in javascript -- 12

// function addNumbers(num1 , num2){
//     return num1+num2;
// }
// let res = addNumbers(1,2);
// console.log(res);
// the above one is example of function
// function SayName(name = "kittu"){
//     console.log(name);
// }
// // here in the above u can see that we can keep the function value to kittu if it isnot used
// SayName("pardhu"); // kittu will be overrided
// SayName(); // nothing is given hence kittu as basic one is printed

// function num(...some){ // by keeping ... we can add all the element to array
//     return some;
// }
// console.log(num(100,200,3000));
// we can also send object as parameter to function and also arrays 

// we can also declare in arrow function
// const ben = () => {
//     console.log("hi");
// }
// ben();

//  if we want to exectue the function then and their it self then we use ()()
// (function(){
//     console.log("hi");
// })();

// rest all are about loops similar to java 

/* but as in java for each loop here we will have 
for(const a of arr){};
we use of instead of : 

and also here we also has Map 
*/
// const map = new Map();
// map.set('as0','hi'); // here as0 is key and hi is the word we stored it will be like this 
// console.log(map); // we can add more 


// object itteration 
/* for object itteration we use in 
like for(const i in myObject )  note we use of for arrays and others 
but for object we use in for getting keys
*/
// const user ={
// name:"pardhu",
// age:20,
// salary:200000
// }
// for(const i in user){
//     console.log(i);
// }
// for(const i in user){
//     console.log(`key :- ${i} object :- ${user[i]}`);
// }
// we can use in for printing the arrays but we get keys

// filter in array 
// const arr = [1,2,3,4,5,6];
// const mynumb = arr.filter((item) => {
//     return item>2;
// });
// console.log(mynumb);
// arr.forEach((num) => {console.log(num);});
// reduce in array
// reduce is optional but if we want the syntax is given below
// const ar = arr.reduce((acc,item) => {
// return acc+item;
// },0);
// console.log(ar);
/*
const a = [1,2,3,4,5];
const ar = a.reduce((accumulator,items in array) => {
    we will return array like adding all 
    return accumulator + item in array},0 here we will keep zero as it is the basic start)
    */






// DOM the main deal
// basic one is
//document.getElementById('byid');
