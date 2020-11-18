import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  public model: ICourse = {
    id: null,
    title: '',
    description: '',
    duration: '',
    creationDate: '',
    top: false
  };

  constructor(private coursesService: CoursesService, private router: Router) { }

  public ngOnInit(): void {
  }

  public getDuration(duration: string): void {
    this.model.duration = duration;
  }

  public getDate(date: string): void {
    this.model.creationDate = date;
  }

  public addCourse(): void {
    this.model.id = this.coursesService.coursesList.length + 1;
    if (this.model.title && this.model.description && this.model.duration && this.model.creationDate) {
      this.coursesService.createCourse(this.model);
      this.router.navigate(['']);
    }
  }

  public cancelCreation(): void {
    this.model.creationDate = '';
    this.model.description = '';
    this.model.duration = '';
    this.model.title = '';
    this.router.navigate(['']);
  }

}
