
export class CourseService{
    private courses:string[]=["Core java",'Advanced Java','Spring Boot','Angular 12','JSP','Dev Ops'];

    getCourse(){
        return this.courses;
    }

}