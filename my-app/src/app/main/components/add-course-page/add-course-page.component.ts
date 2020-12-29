import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseAuthor, ICourse } from 'src/app/shared/models/course.model';
import { CreateCourseAction, GetByIdAction, UpdateCourseAction } from '../../actions/courses.actions';
import { coursesSelector } from '../../reducers/courses.reducer';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  public authors: CourseAuthor[];

  public courseForm: FormGroup;

  public pageTitle: string = 'New course';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder) { }

  public ngOnInit(): void {

    this.coursesService.getAuthors().subscribe(response => {
      this.authors = response
    });

    this.courseForm = this.fb.group({
      id: Math.floor(Math.random() * (9999 - 1000 + 1)),
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, Validators.pattern(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)]],
      length: ['', Validators.required],
      authors: [],
    });
    
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.store.dispatch(new GetByIdAction(Number(params.id))); тут так и не получилось сделать хорошо
        this.coursesService.getItemById(Number(params.id))
          .subscribe(course => {
            this.courseForm.controls['id'].setValue(course.id);
            this.courseForm.controls['name'].setValue(course.name);
            this.courseForm.controls['description'].setValue(course.description);
            this.courseForm.controls['length'].setValue(course.length);
            const courseDate = new Date(course.date);
            const day = String(courseDate.getDate()).length === 1 ? `0${courseDate.getDate()}` : courseDate.getDate();
            const month = String(courseDate.getMonth() + 1).length === 1 ? `0${courseDate.getMonth() + 1}` : courseDate.getMonth() + 1;
            this.courseForm.controls['date'].setValue(`${day}/${month}/${courseDate.getFullYear()}`);
            this.courseForm.controls['authors'].setValue(course.authors);
          });
        this.pageTitle = 'Edit course';
      } else {
        this.pageTitle = 'New course';
      }
    });
  }

  public addCourse(): void {
    const dateArr = this.courseForm.controls['date'].value.split('/');
    this.courseForm.controls['date'].setValue(new Date(+dateArr[2], dateArr[1] - 1, +dateArr[0]).toDateString());
    this.store.dispatch(new CreateCourseAction(this.courseForm.value));
  }

  public editCourse(): void {
    const dateArr = this.courseForm.controls['date'].value.split('/');
    this.courseForm.controls['date'].setValue(new Date(+dateArr[2], dateArr[1] - 1, +dateArr[0]).toDateString());
    this.store.dispatch(new UpdateCourseAction({ id: this.courseForm.controls['id'].value, course: this.courseForm.value }));
  }

  public createCustomErrorMatcher(controlName: string) {
    return {
      isErrorState: () => {
        return this.courseForm.controls[controlName].touched && this.courseForm.controls[controlName].invalid;
      },
      hasError: (error: string) => {
        return this.courseForm.controls[controlName].hasError(error);
      }
    };
  }

  public cancel(): void {
    this.router.navigate(['']);
  }

}
