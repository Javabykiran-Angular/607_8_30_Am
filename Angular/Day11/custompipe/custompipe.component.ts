import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quidem voluptates saepe at quis ducimus obcaecati itaque placeat fuga dicta! Quam quasi ipsum sit id necessitatibus harum saepe corporis dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quidem voluptates saepe at quis ducimus obcaecati itaque placeat fuga dicta! Quam quasi ipsum sit id necessitatibus harum saepe corporis dolorem!';
  constructor() { }

  ngOnInit(): void {
  }

}
