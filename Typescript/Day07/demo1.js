//array 
// array is dynamically growable & shrinkable
//array does not have any fixed size 
//array store homogenous as well as hetrogenous value 
var arr;
var arr1 = [2, 44, 5, 6, 7];
var arr2 = [];
var arr3 = [];
// for(let i=0;i<arr1.length;i++){
//     console.log("Array value is "+arr1[i])
// }
// console.log("Array is "+arr1);
// console.log("Using Join method "+arr1.join(" # "));
// console.log("Using Join method "+arr1.join());
//foreach loop
var a = [4, 2, 6, 8, 3];
// a.forEach((myvalue,i)=>{
//     console.log(myvalue+" index is "+i)
// })
//rest paramter functions
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    // console.log(item);
    console.log("1st parameter is ".concat(str, " 2nd parameer data is ").concat(item.join(" "), " "));
}
// display(22,4,3,88,90,100,23);
// display(22);
// display("Sumit ",7,88,90);
//push & pop
//LIFO Principal 
// u can add only last index 
var a1 = [];
a1.push(20);
console.log(a1);
a1.push(10, 45, 67, 99);
console.log(a1);
var res = a1.pop();
console.log(a1);
console.log("Poped value is " + res);
