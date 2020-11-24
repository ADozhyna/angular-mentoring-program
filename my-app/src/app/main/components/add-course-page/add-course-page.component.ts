import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public pageTitle: string = 'New course';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute) { }


  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        const res = this.coursesService.getItemById(Number(params.id));
        this.model.id = res.id;
        this.model.title = res.title;
        this.model.description = res.description;
        this.model.duration = res.duration;
        this.model.creationDate = res.creationDate;
        this.model.top = res.top;
        this.pageTitle = 'Edit course';
      } else {
        this.pageTitle = 'New course';
      }
    });
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

  public editCourse() {
    this.coursesService.updateItem(this.model.id, this.model);
    this.router.navigate(['']);
  }

  public cancel(): void {
    this.model.creationDate = '';
    this.model.description = '';
    this.model.duration = '';
    this.model.title = '';
    this.router.navigate(['']);
  }

}
