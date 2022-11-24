import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }

}
