import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course.model';
import { DurationPipe } from '../../pipes/duration.pipe';

import { CourseItemComponent } from './course-item.component';

@Component({
  template: `<app-course-item [course]="course" (remove)="onDelete($event)">
            </app-course-item>`
})
class TestHostComponent {
  public course: ICourse = {id: 1, title: 'Some title', duration: 'duration', creationDate: '10/5/2020', description: 'description', top: false};
  public deletedCourseId: any;

  public onDelete(id: number): void {
    this.deletedCourseId = id;
  }
}

describe('CourseItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent, DurationPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain apropriate title', () => {
    const { debugElement } = fixture;
    const title: HTMLElement = debugElement.query(By.css('mat-card-title')).nativeElement;

    expect(title.textContent).toEqual(testHostComponent.course.title.toUpperCase());
   });

  it('should trigger delete event', () => {
    const { debugElement } = fixture;
    const deleteButton: DebugElement = debugElement.query(By.css('.delete-button'));

    deleteButton.triggerEventHandler('click', null);

    expect(testHostComponent.deletedCourseId).toEqual(testHostComponent.course.id);
  });
});

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
