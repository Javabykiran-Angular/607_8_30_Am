
//array 
// array is dynamically growable & shrinkable
//array does not have any fixed size 
//array store homogenous as well as hetrogenous value 
let arr:number[];
let arr1=[2,44,5,6,7];
let arr2:number[]=[];
let arr3:any[]=[];

// for(let i=0;i<arr1.length;i++){
//     console.log("Array value is "+arr1[i])
// }

// console.log("Array is "+arr1);
// console.log("Using Join method "+arr1.join(" # "));
// console.log("Using Join method "+arr1.join());

//foreach loop

let a:number[]=[4,2,6,8,3];

// a.forEach((myvalue,i)=>{
//     console.log(myvalue+" index is "+i)
// })

//rest paramter functions

    function display(str:string,...item:number[]){
        // console.log(item);
        console.log(`1st parameter is ${str} 2nd parameer data is ${item.join(" ")} `)
    }

    // display(22,4,3,88,90,100,23);
    // display(22);
    // display("Sumit ",7,88,90);

     //push & pop
    //LIFO Principal 
    // u can add only last index 
    let a1:number[]=[];
    a1.push(20);
    console.log(a1);
    a1.push(10,45,67,99);
    console.log(a1);
    let res=a1.pop();
    console.log(a1);
    console.log("Poped value is "+res)














