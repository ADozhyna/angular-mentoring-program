import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';

@Component({
  template: `<app-course-item [course]="course" (remove)="onDelete($event)">
            </app-course-item>`
})
class TestHostComponent {
  public course = {id: 1, title: 'Some title', duration: 'duration', creationDate: new Date(), description: 'description'};
  public deletedCourseId: any;

  public onDelete(id: number) {
    this.deletedCourseId = id;
  }
}

describe('CourseItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent]
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
    const title = debugElement.query(By.css('mat-card-title')).nativeElement;

    expect(title.textContent).toEqual(testHostComponent.course.title);
   });

   it('should trigger delete event', () => {
     const { debugElement } = fixture;
     const deleteButton = debugElement.query(By.css('.delete-button'));

     deleteButton.triggerEventHandler('click', null);

     expect(testHostComponent.deletedCourseId).toEqual(testHostComponent.course.id);
   });
})

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
