//data types
//number(int,long,double,float,short),string(""/''),boolean(true/false),
//any(number,string,boolean)
//void=>does not point any thing=> it is neutral data type
//misec. null & undefined => It acts as data type or As value

    var a1:number=10; //Forward declaration & defination
    // console.log("Value of a1 is "+a1);
    var a2:number;
    // console.log('Value of a2 is '+a2);
    var str:string;
    // console.log(`Value of str is ${str}`);
    var a3:any;
    a3=2.5;
    console.log(`Value of a3 is ${a3} `);
    a3='Sumit';
    console.log(`Value of a3 is ${a3} `);
    a3=true;
    console.log(`Value of a3 is ${a3} `);

    // Type Assertion
    var a4:any;
    // u can implement in 2 ways
    //1 angle bracket syntax
    //2 as syntax

     //1 angle bracket syntax

    var t1=(<string> a4);
    // t1.

     //2 as syntax
     var t2=(a4 as string);
    //  t2.

    

