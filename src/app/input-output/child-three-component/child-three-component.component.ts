import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-three-component',
  templateUrl: './child-three-component.component.html',
  styleUrls: ['./child-three-component.component.css']
})
export class ChildThreeComponentComponent implements OnInit {
@Input() username3 = ''
@Output() emit3 = new EventEmitter<string>();
inputData4: any = ''
  constructor() { }

  ngOnInit(): void {
  }

  //parent
  parent(){
    this.emit3.emit("parent 3 change by child 3")
  }
  //child1
  child1(){
    this.emit3.emit("child 1 update by child 3")
  }
  //child1
 child2(){
    this.emit3.emit("child 2 update by child 3")
  }

  // update4($event)
  update4($event:any){
    this.inputData4 = $event
  }
}
