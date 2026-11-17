// objects
// key value
// const user = {
//     name: "Rohit",
//     age: 20,
//     emailID: "negi@gmail.com",
//     amount: 3400,
//     "home address": "Dwarka"
// } 


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);
// CURD operation: Create read update delete

// console.log(user.age);

// update
// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);


// // delete
// delete user.emailID;
// console.log(user);


// const user = {
//     name: "Rohit",
//     age: 20,
//     emailID: "negi@gmail.com",
//     amount: 3400,
// } 

// const user2 = user;
// user2.age = 90;

// console.log(user);

// Important

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys,user[keys]);
// }

// user.keys user["name"] user["age"]


// const user = {
//     name: "Rohit",
//     age: 20,
//     emailID: "negi@gmail.com",
//     amount: 3400,
// } 

// for loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr);
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'emailID', 'negi@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

// for(let[key,values] of Object.entries(user)){
//     console.log(key,values);
// }



// for(let values of Object.entries(user)){
//     console.log(values);
// }
// const name = user.name;
// const age = user.age;

// object ko destucting karna
// const {name:userName,age:userAge} = user;

// const arr = [10,20,30,46,90,56];

// const [first,second] = arr;

// console.log(userName,userAge);
// console.log(first,second);

const user = {
    name: "Rohit",
    age: 20,
    emailID: "negi@gmail.com",
    amount: 3400,
} 