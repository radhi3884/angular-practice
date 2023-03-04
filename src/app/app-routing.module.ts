import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCrudPrracticeComponent } from './api-crud-prractice/api-crud-prractice.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { DyanamicFormComponent } from './dyanamic-form/dyanamic-form.component';
import { ParentComponentComponent } from './input-output/parent-component/parent-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'dyanamic-form', component: DyanamicFormComponent },
  { path: 'api-crud', component: ApiCrudComponent },
  { path: 'api-crud-prractice', component: ApiCrudPrracticeComponent },
  { path: 'product-crud', component: ProductCrudComponent },
  {
    path: 'input-output' , component: ParentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
