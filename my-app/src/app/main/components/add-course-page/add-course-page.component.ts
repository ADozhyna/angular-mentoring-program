import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    name: '',
    description: '',
    date: '',
    length: 0,
    isTopRated: false,
    authors: '',
  };

  public pageTitle: string = 'New course';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.coursesService.getItemById(Number(params.id))
          .subscribe(course => {
            this.model = course;
          })
        this.pageTitle = 'Edit course';
      } else {
        this.pageTitle = 'New course';
      }
    });
  }

  /*public getDuration(duration: number): void {
    this.model$.length = duration;
  }

  public getDate(date: string): void {
    this.model$.date = date;
  }

  public addCourse(): void {
    this.model$.id = this.coursesService.coursesList.length + 1;
    if (this.model$.name && this.model.description && this.model.length && this.model.date) {
      this.coursesService.createCourse(this.model);
      this.router.navigate(['']);
    }
  }

  public editCourse(): void {
    this.coursesService.updateItem(this.model.id, this.model);
    this.router.navigate(['']);
  }

  public cancel(): void {
    this.model.date = '';
    this.model.description = '';
    this.model.length = 0;
    this.model.name = '';
    this.router.navigate(['']);
  }*/

}
