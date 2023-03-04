import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParenttComponent } from './parentt/parentt.component';

const routes: Routes = [
  { path: '', component: ParenttComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
