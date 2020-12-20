import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { DateInputComponent } from './components/date/date-input.component';
import { DurationComponent } from './components/duration/duration.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    BorderColorDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    ModalComponent,
    AddCoursePageComponent,
    DateInputComponent,
    DurationComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  exports: [
    CoursesListComponent,
    AddCoursePageComponent,
  ]
})
export class MainModule { }
