import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observable/rxjs-examples.service';

@Component({
  selector: 'app-childd-one',
  templateUrl: './childd-one.component.html',
  styleUrls: ['./childd-one.component.css']
})
export class ChilddOneComponent implements OnInit {

  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild1.subscribe((mes: string) => {
      this.message = mes
    })
  }
  
  ngOnInit(): void {
  }

  updateParent($event: any) {
    this.rxJsService.updateParent($event)
  }

  updateChild1($event: any) {
    this.rxJsService.updateChild1($event)
  }

}