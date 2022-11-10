import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(){
    console.log('Key Up Event Occur');
  }

  onKeyDown(){
    console.log("Key Down Event Occur")
  }

}
