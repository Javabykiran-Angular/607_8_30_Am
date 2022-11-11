import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core java','Advanced Java','Spring Boot','JSP','Angular 12','Docker']

  arrProduct=[
    {
      name:'Motorola',
      price:30000,
      qty:1
    },
    {
      name:'OnePlus',
      price:45000,
      qty:1
    },
    {
      name:'Realme',
      price:15000,
      qty:1
    },
    {
      name:'VIVO',
      price:25000,
      qty:2
    }
  ]
  selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse Over Occur ----->")
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
