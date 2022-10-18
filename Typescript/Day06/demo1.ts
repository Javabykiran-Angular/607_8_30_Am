//anonymous functions
//function does not have any name

   let temp1= function (){
        console.log("anonymous function is called...")
    }

    // temp1();

   let temp2= function (a:number,b:number):number{
        return (a+b);
    }

    let res=temp2(5,6);
    // console.log('Result is '+res)

    // fat arrow function/arrow function

   let temp3= ()=>{
            console.log("fat arrow function is called ")
        }

        // temp3();
    
     let temp4= (a:number,b:number):number=>{
            return (a+b);
        }

    // console.log(`result is ${temp4(7,3)} `)

    //optional paramter functions

        function add1(a:number,b?:number){
            console.log("Value of a is "+a)// 4
            console.log("Value of b is "+b)//undefined
            console.log("Addition  of a+b is "+(a+b!))//NAN=> not a number
        }

        // add1(4)
        // add1(4,6)

        
        function add2(a?:number,b?:number){
            console.log("Value of a is "+a)// 4
            console.log("Value of b is "+b)//undefined
            console.log("Addition  of a+b is "+(a!+b!))//NAN=> not a number
        }

        // add2();

        //default paramter functions

        function add3(a:number,b:number=6){
            console.log("Value of a is "+a)// 80
            console.log("Value of b is "+b)//9
            console.log("Addition  of a+b is "+(a!+b!))//89
        }

        // add3(80);
        // add3(80,9);

        function add4(a:number=5,b:number){
            console.log("Value of a is "+a)// 80
            console.log("Value of b is "+b)//9
            console.log("Addition  of a+b is "+(a!+b!))//89
        }


        // add4(7,40)

        function add5(a:number=5,b?:number){
            console.log("Value of a is "+a)// 80
            console.log("Value of b is "+b)//9
            console.log("Addition  of a+b is "+(a!+b!))//89
        }

        add5();