import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
inputData1:string = ''
  constructor() { }

  ngOnInit(): void {
  }
//update1
update1($event:any){
this.inputData1 = $event
}
}
