import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-five-component',
  templateUrl: './child-five-component.component.html',
  styleUrls: ['./child-five-component.component.css']
})
export class ChildFiveComponentComponent implements OnInit {
@Input() username5 = ''
@Output() emit5 = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  //parent
  parent(){
    this.emit5.emit("parent 5 change by child 5")
  }
    //child1
    child1(){
      this.emit5.emit("child 1 update by child 5")
    }
    //child2
    child2(){
      this.emit5.emit("child 2 update by child 5")
    }
    //child3
    child3(){
      this.emit5.emit("child 3 update by child 5")
    }
     //child4
     child4(){
      this.emit5.emit("child 4 update by child 5")
    }
}
