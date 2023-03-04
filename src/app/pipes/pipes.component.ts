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

 currentdate = new Date(2000,8,3);
 userdata : any = ["hello" ,"world" , "user" , 1 , 2 , 3 , "gujarat" , "surat"]
 userlist : any = ["hello" ,"world" , "user" , 1 , 2 , 3 , "gujarat" , "surat"]
 includeText = "h"
  ngOnInit(): void {
  }

}
