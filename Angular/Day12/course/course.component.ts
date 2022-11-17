import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  mycourse:string[]=[];

  constructor(private service:CourseService) {
      // let service=new CourseService();     
   }

  ngOnInit(): void {
    this.mycourse=this.service.getCourse();
  }

}
