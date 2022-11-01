export class Derpartment{
    private role:string;

    constructor(r:string){
        this.role=r;
    }

    //getter & setter

    getRole(){
        return (this.role);
    }

    setRole(role:string){
        this.role=role;
    }

}