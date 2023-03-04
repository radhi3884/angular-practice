import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observable/rxjs-examples.service';

@Component({
  selector: 'app-childd-two',
  templateUrl: './childd-two.component.html',
  styleUrls: ['./childd-two.component.css']
})
export class ChilddTwoComponent implements OnInit {

  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild2.subscribe((mes: string) => {
      this.message = mes
    })
  }

  ngOnInit(): void {
  }

  updateParentFromTwo($event: any) {
    this.rxJsService.updateParent($event)
  }

  updateChild1FromTwo($event: any) {
    this.rxJsService.updateChild1($event)
  }

  updateChild2($event: any) {
    this.rxJsService.updateChild2($event)
  }

}