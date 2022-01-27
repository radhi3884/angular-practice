import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModelGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm! : FormGroup;
  constructor(public fb : FormBuilder) {
    this.userForm = this.fb.group({
      firstname : ['' , [Validators.required]],
      lastname : ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      Age : ['', [Validators.required]],
      password : ['', [Validators.required , Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')]],
      other: this.fb.array([ this.addOtherSkillFormGroup()])
    })
   
   }
  
  ngOnInit(): void {
  }
  addOtherSkillFormGroup(): FormGroup {  
    return this.fb.group({  
      education: ['', Validators.required],  
      age : ['', Validators.required],  
      degree: ['Bachelor', Validators.required]  
    });  
  }  

  addButtonClick(): void {  
    (<FormArray>this.userForm.get('other')).push(this.addOtherSkillFormGroup());  
  }
  getControls() {
    return (this.userForm.get('other') as FormArray).controls;
  }
}