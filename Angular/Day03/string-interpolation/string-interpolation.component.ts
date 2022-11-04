import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  num:number=2;
  imgUrl:string='../../assets/bg.jpg';
  dispDiv:string='Hopes so ur Enjoying';
  constructor() { }

  ngOnInit(): void {
  }

}
