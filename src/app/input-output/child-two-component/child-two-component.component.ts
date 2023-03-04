import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit {

  @Output() parent = new EventEmitter<string>()
  @Output() child1 = new EventEmitter<string>()
  inputData3: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  parentUpdate($event: any){
    this.parent.emit($event)
  }
  childUpdate1($event: any){
    this.child1.emit($event)
  }
  childUpdate2($event: any){
    this.inputData3 = $event
  }

}
