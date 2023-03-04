import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesPipe } from './pipes/custom-pipes.pipe';
import { PowerPipePipe } from './pipes/power-pipe.pipe';
import { TagPipePipe } from './pipes/tag-pipe.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DyanamicFormComponent } from './dyanamic-form/dyanamic-form.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { ApiCrudPrracticeComponent } from './api-crud-prractice/api-crud-prractice.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ParentComponentComponent } from './input-output/parent-component/parent-component.component';
import { ChildOneComponentComponent } from './input-output/child-one-component/child-one-component.component';
import { ChildTwoComponentComponent } from './input-output/child-two-component/child-two-component.component';
import { ChildThreeComponentComponent } from './input-output/child-three-component/child-three-component.component';
import { ChildFourComponentComponent } from './input-output/child-four-component/child-four-component.component';
import { ChildFiveComponentComponent } from './input-output/child-five-component/child-five-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipesPipe,
    PowerPipePipe,
    TagPipePipe,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    DyanamicFormComponent,
    ApiCrudComponent,
    ApiCrudPrracticeComponent,
    FilterPipe,
    ProductCrudComponent,
    ParentComponentComponent,
    ChildOneComponentComponent,
    ChildTwoComponentComponent,
    ChildThreeComponentComponent,
    ChildFourComponentComponent,
    ChildFiveComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
