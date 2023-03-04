import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observable/rxjs-examples.service';

@Component({
  selector: 'app-childd-three',
  templateUrl: './childd-three.component.html',
  styleUrls: ['./childd-three.component.css']
})
export class ChilddThreeComponent implements OnInit {
  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild3.subscribe((mes: string) => {
      this.message = mes
    })
  }

  ngOnInit(): void {
  }

  parent() {
    this.rxJsService.updateParent('From Child 3 for parent')
  }

  child1() {
    this.rxJsService.updateChild1('From Child 3 for child 1')
  }

  child2() {
    this.rxJsService.updateChild2('From Child 3 for child 2')
  }

}

