import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observable/rxjs-examples.service';

@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent implements OnInit {

  parenttData: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsParent.subscribe((mes: string) => {
      this.parenttData = mes
    })
  }

  ngOnInit(): void {
  }

}