import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childsecond',
  templateUrl: './childsecond.component.html',
  styleUrls: ['./childsecond.component.css']
})
export class ChildsecondComponent implements OnInit {

  @Output() updateParent = new EventEmitter<string>()
  @Output() updateChild1 = new EventEmitter<string>()
  message: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  updateParentFromTwo($event: any) {
    this.updateParent.emit($event)
  }

  updateChild1FromTwo($event: any) {
    this.updateChild1.emit($event)
  }

  updateChild2($event: any) {
    this.message = $event
  }

}
