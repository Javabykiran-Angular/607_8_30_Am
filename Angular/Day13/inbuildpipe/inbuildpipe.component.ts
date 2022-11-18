import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {


  strdata:string='U learn Angular 12 from Dynamic person Sumit raokhande';
  
  num2:number=-452.78956324557;
  mydate=new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
