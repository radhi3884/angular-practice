import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud-prractice',
  templateUrl: './api-crud-prractice.component.html',
  styleUrls: ['./api-crud-prractice.component.css']
})
export class ApiCrudPrracticeComponent implements OnInit {

  userForm! : FormGroup
  userData: any = []
  userhobbies: any = []
  constructor(private fb : FormBuilder , public httpsclient : HttpClient) {
    this.userForm = this.fb.group({
      firstName : ['' , Validators.required],
      lastName : ['' ,Validators.required],
      age : ['' , Validators.required],
      gender : ['' , Validators.required],
      city : ['' , Validators.required]
    });
   }
// hobbies
changehobbies($event : any){
  const value = $event.target.value
  if(this.userhobbies.find((x: any)=> x === value)){
    this.userhobbies.filter((x :any)=> x !== value);
  }
  else{
    this.userhobbies.push(value);
  }
}
  ngOnInit(): void {
    this.getdetails()
  }

  // get details
  getdetails(){
   this.httpsclient.get(`${environment.apiEndPoint}/student/get`)
   .subscribe((res: any)=> {
     this.userData = res.data 
   });
  }

  // delete data
  deleteData(id : string){
    this.httpsclient.delete(`${environment.apiEndPoint}/student/delete?id=${id}`)
    .subscribe((res: any)=> {
this.getdetails();
    });
  }

  // edit data
  editData(payload: any){
   this.userForm.patchValue({
     firstName : payload.firstName,
     lastName : payload.lastName,
     age : payload.age,
     city : payload.city
   });
if(payload.hobbies){ 
  this.userhobbies = payload.hobbies.split(',');
}
  }
  // save data
  saveData(){
    if(this.userForm.valid){
      this.updateData();
    }
    else{
      this.addData();
    }
    if(!this.userForm.valid){
      return
    }
  }
  // add data
  addData(){
    const payload = {
      firstName : this.userForm.value.firstName,
      lastName : this.userForm.value.lastName,
      age : this.userForm.value.age,
      city : this.userForm.value.city,
      gender : this.userForm.value.gender,
      hobbies : this.userhobbies.join(',')
    }
    this.httpsclient.post(`${environment.apiEndPoint}/student/add`,payload)
    .subscribe((res : any)=> {
      if(res.isSuccess){
        this.getdetails()
        this.userhobbies = []
      }
      else{
        alert(res.message);
      }
    });
  }
  // update data
  updateData(){
    const payload = {
      "firstName" : this.userForm.value.firstName,
      "lastName" : this.userForm.value.lastName,
      "age" : this.userForm.value.age,
      "city" : this.userForm.value.city,
      "gender" : this.userForm.value.gender,
      "hobbies" : this.userhobbies.join(',')
    }
    this.httpsclient.post(`${environment.apiEndPoint}/student/add`,payload)
    .subscribe((res : any)=> {
      if(res.isSuccess){
        this.getdetails()
        this.userhobbies = []
        this.userForm.reset()
      }
      else{
        alert(res.message);
      }
    });
  }
}