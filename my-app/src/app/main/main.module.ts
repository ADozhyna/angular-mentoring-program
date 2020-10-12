import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CoursesPageComponent,
    SearchControlComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class MainModule { }
