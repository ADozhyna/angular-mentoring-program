import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { CreateCourseAction, GetByIdAction, UpdateCourseAction } from '../../actions/courses.actions';
import { coursesSelector } from '../../reducers/courses.reducer';

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

  public courseForm: FormGroup;

  public course: Observable<ICourse[]> = this.store.pipe(select(coursesSelector));

  public pageTitle: string = 'New course';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.courseForm = this.fb.group({
      id: Math.floor(Math.random() * (9999 - 1000 + 1)),
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, Validators.pattern(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)]],
      length: ['', Validators.required],
      authors: [''],
    })
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.store.dispatch(new GetByIdAction(Number(params.id))); тут так и не получилось сделать хорошо
        this.coursesService.getItemById(Number(params.id))
          .subscribe(course => {
            this.model = course;
          });
        this.pageTitle = 'Edit course';
      } else {
        this.pageTitle = 'New course';
      }
    });
  }

  public getDuration(duration: number): void {
    this.model.length = duration;
  }

  public getDate(date: string): void {
    this.model.date = date;
  }

  public addCourse(): void {
    this.model.id = Math.floor(Math.random() * (9999 - 1000 + 1));
    this.store.dispatch(new CreateCourseAction(this.courseForm.value));
  }

  public editCourse(): void {
    this.store.dispatch(new UpdateCourseAction({ id: this.model.id, course: this.model }));
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
    this.model.date = '';
    this.model.description = '';
    this.model.length = 0;
    this.model.name = '';
    this.router.navigate(['']);
  }

}
