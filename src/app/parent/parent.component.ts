
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentData: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  parentOutput($event: any) {
    this.parentData = $event
  }

}
