// // Array;

// // let marks1 = 100;
// // let marks2 = 50;
// // let marks3 = 70;
// // let marks4 = 80;

// let marks = [100,50,70,80,90]



// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Alok",true]  // Alok:-string,true:-bollean

// // console.log(arr[2]);
// // console.log(typeof arr);

// // arr[1] = 90;
// // console.log(arr);

// // push : add(Insert) element at end

// arr.push(90);
// arr.push("Strike");

// console.log(arr);

// // pop opreation: Delete element from end
// arr.pop();
// console.log(arr)


// // starting mai add kar sakta hu, delete the element at first place

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // delete kar sakta hu 

// arr.shift();
// console.log(arr);


// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr2)
// object(non primitive): copy by reference hota hai
// primitive: copy by value


// const arr = [10,30,50,90,11];
// arr[2] = 30;



// console.log(arr);

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// const arr3 = arr.splice(1,3,"Alok",19);
// console.log(arr);

// const arr = [10,20,30,40,50];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// const arr3 = [arr,arr2,arr4];

// spread operator

// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3)


// const names = ["Alice","Rohit","Bob","Mohit","Charlie"];

// console.log(names.toString());
// console.log(typeof names.toString());
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// names.sort();
// names.reverse();

// console.log(names);

// const a = [101,90,23,14,56,78,];
// const arr = [10,"Rohit","Mohan",true];

// arr.sort();
// console.log(arr);

// const arr = [10,40,31,71,5,11];

// arr.sort((a,b)=> a-b);
// // ascending order

// arr.sort((a,b)=> b-a);

// console.log(arr);

// 10,31.40
// a = 10
// b = 31

// -ve : pehle a aayega fir b aayega;
// +ve : b aayega fir a aayegat


const arr = [10,40,31,[40,50,[60,19,99],20],11];

const a = arr.flat(2);
console.log(a);

// console.log(arr[3][2][1])