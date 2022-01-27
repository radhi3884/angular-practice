import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-dyanamic-form',
  templateUrl: './dyanamic-form.component.html',
  styleUrls: ['./dyanamic-form.component.css']
})
export class DyanamicFormComponent implements OnInit {

  userForm! :FormGroup;
 constructor(private fb : FormBuilder){
   this.userForm = this.fb.group({
    firstname : ['', [Validators.required]]
   })

 }
 //------------------------------
 addOtherSkillFormGroup(): FormGroup {  
  return this.fb.group({  
    firstname: ['', Validators.required],  
    fname : ['', Validators.required],  
    lastname: ['', Validators.required],  
    lname : ['', Validators.required],  

  });  
}  

addButtonClick(): void {  
  (<FormArray>this.userForm.get('details')).push(this.addOtherSkillFormGroup());  
}
getControls(){
  return (this.userForm.get('details') as FormArray).controls;
 }
       ngOnInit() {  
    }
  }