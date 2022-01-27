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
    ApiCrudPrracticeComponent
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
