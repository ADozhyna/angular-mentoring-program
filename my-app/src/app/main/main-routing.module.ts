import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

const routes: Routes = [
    {path: '', component: CoursesPageComponent},
    {path: 'new', component: AddCoursePageComponent},
    {path: ':id', component: AddCoursePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
