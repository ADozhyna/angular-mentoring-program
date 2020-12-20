import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddCoursePageComponent } from './components/add-course-page/add-course-page.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

const routes: Routes = [
    {path: '', component: CoursesListComponent, canLoad: [AuthGuard]},
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
