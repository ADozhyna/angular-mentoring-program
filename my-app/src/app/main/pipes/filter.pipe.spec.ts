import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course.model';
import { CourseItemComponent } from '../components/course-item/course-item.component';
import { DurationPipe } from './duration.pipe';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe: FilterPipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all courses', () => {
    const courses: ICourse[] =  [
      {id: 1, title: 'Angular', duration: 'duration', creationDate: '10/5/2020', description: 'description', top: false},
      {id: 2, title: 'React', duration: 'duration1', creationDate: '9/5/2020', description: 'description1', top: false}
    ];

    expect(pipe.transform(courses, '').length).toBe(courses.length);
  });

  it('should return filtered courses', () => {
    const courses: ICourse[] =  [
      {id: 1, title: 'Angular', duration: 'duration', creationDate: '10/5/2020', description: 'description', top: false},
      {id: 2, title: 'React', duration: 'duration1', creationDate: '9/5/2020', description: 'description1', top: false}
    ];

    expect(pipe.transform(courses, 'angular')[0].title).toBe('Angular');
  });
});

@Component({
  template: ` <app-course-item *ngFor="let course of coursesList" [course]="course"></app-course-item>`
})
class TestHostComponent {
  public coursesList: ICourse[] = [
    {id: 1, title: 'Angular', duration: 'duration', creationDate: '10/5/2020', description: 'description', top: false},
    {id: 2, title: 'React', duration: 'duration1', creationDate: '9/5/2020', description: 'description1', top: false}
  ];

  public searchInput: string;
}

describe('Filter pipe in template', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent, FilterPipe, DurationPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain only one item with apropriate title', () => {
    const { debugElement } = fixture;
    testHostComponent.searchInput = 'angular';
    fixture.detectChanges();

    const el: HTMLElement = debugElement.query(By.css('mat-card-title')).nativeElement;

    expect(el.textContent.toLowerCase()).toEqual('angular');
   });

  it('should return all items', () => {
    const { debugElement } = fixture;
    testHostComponent.searchInput = '';
    fixture.detectChanges();

    const length: number = debugElement.queryAll(By.css('mat-card')).length;

    expect(length).toEqual(testHostComponent.coursesList.length);
  });
});
