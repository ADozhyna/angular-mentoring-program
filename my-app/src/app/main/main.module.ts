import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class MainModule { }
