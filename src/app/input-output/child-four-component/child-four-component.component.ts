import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-four-component',
  templateUrl: './child-four-component.component.html',
  styleUrls: ['./child-four-component.component.css']
})
export class ChildFourComponentComponent implements OnInit {
@Input() username4 = ''
@Output() emit4 = new EventEmitter<string>();
inputData5:any = ''
  constructor() { }

  ngOnInit(): void {
  }


  //parent
  parent(){
    this.emit4.emit("parent 4 change by child 4")
  }
  //child1
  child1(){
    this.emit4.emit("child 1 update by child 4")
  }
  //child2
  child2(){
    this.emit4.emit("child 2 update by child 4")
  }
  //child3
  child3(){
    this.emit4.emit("child 3 update by child 4")
  }

  // update5($event)
  update5($event:any){
this.inputData5 = $event
  }
}
