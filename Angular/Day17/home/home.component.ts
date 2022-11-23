import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername="Sumit Raokhande";

  jsonObj={
    id:9,
    fname:'Sumit',
    status:'Active'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid])
  }
  onPage3(){
    this.myid=8;
    this.myusername='Spruha Raokhande';
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  onfollower(){
    this.router.navigate(['/Follower'])
  }

  onqueryparam(){
    this.router.navigate(['/queryparam'],{
      queryParams:this.jsonObj
    })
  }

}
