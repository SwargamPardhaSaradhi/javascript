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

