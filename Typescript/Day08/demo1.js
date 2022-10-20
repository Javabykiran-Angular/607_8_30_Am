//Splice method
// add data dynamically in array 
var a = [10, 2, 56, 78];
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
var str = ["Core java", 'Advanced java', 'Spring Boot', 'Angular 12', 'React js', 'docker', 'jenkings', 'AWS'];
var newarr = str.slice(1, 4);
console.log("Original array " + str);
console.log("Copied array " + newarr);
var new1 = str.slice(2);
console.log("Copied array " + new1);
var new3 = str.slice();
console.log("Copied array " + new3);
