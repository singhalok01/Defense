//Function

// function greeting(){
//     console.log("Hello coder army")
//     return 0;
// }

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();

// addNumber(4,8);


//rest operator(most important)
// function addNumber(...num){

//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);

// }
// addNumber(9,8);
// addNumber(9,7,8);
// addNumber(9,7,8,6);
// addNumber(12,13,14,15,16,17,18,19,20,21,22,23,24,25,26)


// console.log(greeting());


// const arr = [10,20,30,40]
// const arr2 = [10,20,30,40,50,60,70]

// // const [first,second,...num] = arr;
// // console.log(first,second,num);

// const ans = [arr,arr2];
// console.log(ans);


// function: expression


// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;

// }




// const addNumber = function(num1,num2){
//     return num1+num2;

// }

// console.log(addNumber(3,4));


// arrow function

// ()=>{

// }

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }

// let arr = [10,20,30,40];

// arr.sort((a,b)=>a-b);
// console.log(arr);

// const addNumber = (num1,num2)=> num1+num2;

// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;


// console.log(addNumber(3,5))
// console.log(squareNumber(6));

// const greeting = ()=> {
//     let user = {
//         name:"Alok",
//         age:20,
//     }

//     return user;
// }

// console.log(greeting());


// const greeting = ()=> ({name:"Alok,age:20"});

// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("Hello Jii");
// })();

// (()=>{
//     console.log("Hii")
// })();




function greet()
{
    console.log("Hello Jii Kaise Ho")
}

function dance(){
    console.log("I am Dancing");
}

function meet(callback){
    console.log("I am going to meet someone");
    // dance(); hardcode (Reusable)
    
    callback();
    console.log("I have finished meeting");
}

meet(greet);
meet(dance); 

// Blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`);
    console.log("payment is received");
    zomatoOrderPlaced();

    // GST: Government
    // Rider ko kitna paymant dena hai
    // company ko kitna dena hai
}

payment(500,zomatoOrderPlaced);
payment(400,blinkitOrderPlaced);

