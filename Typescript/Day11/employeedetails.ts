import {Employee} from './employee';
import {Derpartment} from './department';

export class EmployeeDetails implements Employee{
        fname: string;
        lname:string;
        salary:number;
        dept:Derpartment;

        constructor(f:string,l:string,sal:number,role:string){
            this.fname=f;
            this.lname=l;
            this.salary=sal;
            this.dept=new Derpartment(role);
        }
        
        display(){
            console.log(`
                --------- Employee Details-------
                First name  :: ${this.fname}
                Last name   :: ${this.lname}
                Salary      :: ${this.salary}
                Department  :: ${this.dept.getRole()}
            `)
        }
}