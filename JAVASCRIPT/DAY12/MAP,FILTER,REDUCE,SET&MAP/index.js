// forEach, filter, reduce, map, set

// const arr = [10,20,30,40]
// let sum = 0;


// arr.forEach((number)=>{
//     sum+=number;
// })


// console.log(sum);


// filter

// const arr = [10,20,30,40]

// true: select, flase: not selected
// const newArr = arr.filter((number)=>number>25);


// console.log(newArr);

// const compare = (number)=>number>25;
// compare(20);

// Array.prototype.filtering = function(compare){

//     const ans = [];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }

//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25);

// console.log(newArr);


// const a = [80,30,46,52,98,6,18,25]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);

// const Arr = [10,20,30,40,50,60]

// const newarr = Arr.map((num)=> num*3)
// console.log(newarr);

// Data structure: Set

// const arr = [10,20,15,30,25,35,40];
// //console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);

// //console.log(s1.has(20));
// s1.delete(10);
// //console.log(s1);
// s1.clear();
// console.log(s1)


// const email = ["al@sm","ak@sm","sa@sm","al@sm"];

// // const uniqueEmail = [...new Set(email)];
// // console.log(uniqueEmail);

// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }

// Map:

// const m1 = new Map([
//     ["Alok",20],
//     [2,"Alok"],
//     [true, 11],
//     [[10,20,30],"Samir"]
// ]);

// m1.set({name:"Manish",age:20},false);

// // console.log(m1.size);

// for(let [keys,value] of m1){
//     console.log(keys,value);
// }

