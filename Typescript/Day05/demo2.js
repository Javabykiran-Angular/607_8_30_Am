//1 functions without paramter & without return type
//2 functions with paramter & without return type
//3 functions without paramter & with return type
//4 functions with paramter & with return type
//1 functions without paramter & without return type
function add1() {
    console.log("First type function is called ");
}
// add1(); //function call 
//2 functions with paramter & without return type
function add2(a, b) {
    console.log('Addition of a+b ' + (a + b));
}
// add2(2,3);
//3 functions without paramter & with return type
function add3() {
    return (5 + 5);
}
var temp = add3();
console.log("Value of temp is " + temp);
//4 functions with paramter & with return type
function add4(a, b) {
    return (a + b);
}
console.log('Addition is ' + add4(5, 4));
