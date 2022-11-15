import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() StrEvent=new EventEmitter();
  strdata:string='Data send from child to parent...';

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

  @Output() arrObjEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.StrEvent.emit(this.strdata)
    this.arrObjEvent.emit(this.arrProduct);
  }

}
