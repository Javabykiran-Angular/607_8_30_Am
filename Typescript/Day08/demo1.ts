//Splice method
// add data dynamically in array 

let a:number[]=[10,2,56,78];
// console.log(a)
// a.splice(2,0,100);
// console.log(a);
// a.splice(1,0,25,67);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(3,1,200);
// console.log(a);
// a.splice(1,1,500,300);
// console.log(a);
// // a.splice(2,0,3)

//slice
// if u want copy a section of data then u go for slice method 

let str:string[]=["Core java",'Advanced java','Spring Boot','Angular 12','React js','docker','jenkings','AWS'];

let newarr=str.slice(1,4);
console.log("Original array "+str);
console.log("Copied array "+newarr);

let new1=str.slice(2);
console.log("Copied array "+new1);
let new3=str.slice();
console.log("Copied array "+new3);





