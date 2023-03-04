
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output() parentOutput = new EventEmitter<string>();
  message: string = ''
  constructor() { }

  ngOnInit(): void {

  }
  updateParent($event: any) {
    this.parentOutput.emit($event)
  }

  updateChild1($event: any) {
    this.message = $event
  }

}
function output() {
  throw new Error('Function not implemented.');
}

