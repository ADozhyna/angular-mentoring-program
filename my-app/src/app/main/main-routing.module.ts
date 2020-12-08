import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

const routes: Routes = [
    {path: '', component: CoursesPageComponent, canLoad: [AuthGuard]},
    {
      path: 'new',
      component: AddCoursePageComponent,
      data: {
        breadcrumb: 'new',
      },
    },
    {
      path: ':id',
      component: AddCoursePageComponent,
      data: {
        breadcrumb: '',
      },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
