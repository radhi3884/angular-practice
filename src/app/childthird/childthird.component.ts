import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childthird',
  templateUrl: './childthird.component.html',
  styleUrls: ['./childthird.component.css']
})
export class ChildthirdComponent implements OnInit {

  @Output() updateParentFromTwo = new EventEmitter<string>()
  @Output() updateChild1FromTwo = new EventEmitter<string>()
  @Output() updateChild2 = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  parent() {
    this.updateParentFromTwo.emit('From Child 3 for parent')
  }

  child1() {
    this.updateChild1FromTwo.emit('From child 3 for child 1')
  }

  child2() {
    this.updateChild2.emit('From child 3 for child 2')
  }

}
