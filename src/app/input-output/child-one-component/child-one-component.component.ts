import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.css']
})
export class ChildOneComponentComponent implements OnInit {

@Output() emit1 = new EventEmitter<string>();
inputData2:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  parentUpdate($event: any){
    this.emit1.emit($event)
  }
  childUpdate1($event: any){
    this.inputData2 = $event
  }
}
