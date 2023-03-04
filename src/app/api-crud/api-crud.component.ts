import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud',
  templateUrl: './api-crud.component.html',
  styleUrls: ['./api-crud.component.css']
})
export class ApiCrudComponent implements OnInit {

  userForm! : FormGroup
  userData : any = []
  userHobbies: any = []
  constructor(private fb : FormBuilder , private httpclients : HttpClient) { 
    this.userForm = this.fb.group({
      firstName : ['' , Validators.required],
      lastName : ['', Validators.required],
      age : ['' , Validators.required],
      city : [''],
      password : ['' ,Validators.required],
      id : []
    });
  }

  ngOnInit(): void {
    this.getdetails();
  }
// ----------- get data 
getdetails(){
  this.httpclients
  .get(`${environment.apiEndPoint}/student/get`)
  .subscribe((res: any)=> {
    this.userData = res.data;
  });
}
// for hobbies
hobbiesChanged($event: any) {
  const value = $event.target.value;
  if (this.userHobbies.find((x: any) => x === value)) {
    this.userHobbies = this.userHobbies.filter((x: any) => x !== value);
  } else {
    this.userHobbies.push(value);
  }
}
// ------------- deleteData 
deleteData(id: string){
  this.httpclients.delete(`${environment.apiEndPoint}/student/delete?id=${id}`)
  .subscribe((res : any)=>{
    this.getdetails();
  });
}
// ------------- edit items
editData(payload: any) {
  this.userForm.patchValue({
    firstName: payload.firstName,
    lastName: payload.lastName,
    age: payload.age,
    city: payload.city,
    id: payload._id
  });
  if (payload.hobbies) {
    this.userHobbies = payload.hobbies.split(',');
  }
}
// -------------- save data
saveData() {
  if (!this.userForm.valid) {
    return
  }
  if (this.userForm.value.id) {
    this.updateData()
  } else {
    this.addData()
  }
}

// -------------- add data
addData(){
  const payload = {
     "firstName": this.userForm.value.firstName,
    "lastName": this.userForm.value.lastName,
    "age" : this.userForm.value.age,
    "city" : this.userForm.get("city")?.value,
    "hobbies" : this.userHobbies.join(',')
  }
  this.httpclients.post(`${environment.apiEndPoint}/student/add`,payload)
  .subscribe((res: any)=> {
    if(res.isSuccess){
      this.getdetails()
      this.userHobbies = []
    }
    else{
      alert(res.message)
    }
  });
}
// ------------ update data
updateData() {
  const payload = {
    "firstName": this.userForm.get('firstName')?.value,
    "lastName": this.userForm.value.lastName,
    "age": this.userForm.value.age,
    "hobbies": this.userHobbies.join(','),
    "gender": this.userForm.value.gender,
    "city": this.userForm.value.city,
    "id": this.userForm.value.id,
  }
  this.httpclients.post(`${environment.apiEndPoint}/student/update`, payload).subscribe((res: any) => {
    if (res.isSuccess) {
      this.getdetails();
      this.userForm.reset()
      this.userHobbies = []
    } else {
      alert(res.message)
    }
  });
}
}
