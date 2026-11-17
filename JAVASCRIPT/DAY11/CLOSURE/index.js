// Scope and closure , HOF
// Global--> Accessible to everyone
// Functional --> Accessible only to that function
// Block level scope --> accessible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;

// }




// function greet(){

//     let c = 30;
//     var e = 90;
// }

//  console.log(c);
//  console.log(e);
// greet();



// let global = 30;


// function greet(){

//     let global = 40;


//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
//     meet();
// }

// greet();




// function createCounter(){

//     let count = 0;
//     function increment(){
//        count++;
//        return count;
//     }

//     return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// let balance = 500;


// balance+="Rohit";
// balance-=500;
// console.log(balance);



// let balance = 500;
// // private

// let user = {
//     deposit: function (amount) {
//         if (typeof amount === "number" && amount > 0) {
//             balance += amount;
//             return balance;
//         }
//     },
//     withdraw: function (amount) {
//         if (typeof amount === "number" && amount > 0 && balance >= amount) {
//             balance -= amount;
//             return balance;
//         }
//     },
//     getBalance: function () {

//         return balance;
//     }
// }


// balance = "Rohit"

//user.balance="Rohit";
// console.log(user.deposit(200));
// console.log(user.withdraw(600));
// console.log(user.getBalance());


// method ko access(function)
// balance: usko directly access na

// function createBankAccount() {
//     let balance = 500;


//     return {
//         deposit: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount > 0 && balance >= amount) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {

//             return balance;
//         }
//     }
   

// }


// const customer = createBankAccount();
// console.log(customer);
// console.log(customer.withdraw(200));



// Higher order function


function double(){

    function execute(){
        console.log("Hello");
    }

    return execute;

}

const n = double();
n();