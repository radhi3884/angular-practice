import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  // element : string = ''
  constructor() { }
 element = "<p>'hello'</p>"

  ngOnInit(): void {
  }

}
