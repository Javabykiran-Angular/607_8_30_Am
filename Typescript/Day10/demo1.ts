export class Myclass{
    private id:number;
    protected lname:string;
    public fname:string;

    constructor(id:number,l:string,f:string){
        this.id=id;
        this.lname=l;
        this.fname=f;
    }

  
    display(){
        console.log(`
            ID         :: ${this.id}
            First Name :: ${this.fname}
            Last Name  :: ${this.lname}
        `)
    }

}

// let obj=new Myclass(9,'Raokhande','Sumit');
// obj.display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;


