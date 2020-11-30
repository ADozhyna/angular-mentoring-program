import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';




@NgModule({
  declarations: [
    CoursesPageComponent,
    SearchControlComponent,
    CoursesListComponent,
    CourseItemComponent,
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
