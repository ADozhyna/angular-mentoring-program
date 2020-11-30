import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICourse } from 'src/app/shared/models/course.model';
import { CourseItemComponent } from '../components/course-item/course-item.component';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe: OrderByPipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});

@Component({
  template: ` <app-course-item *ngFor="let course of (coursesList | orderBy: order)" [course]="course"></app-course-item>`
})
class TestHostComponent {
  public coursesList: ICourse[] = [
    {id: 1, title: 'Some title', duration: 'duration', creationDate: '10/5/2020', description: 'description', top: false},
    {id: 2, title: 'Some title', duration: 'duration1', creationDate: '9/5/2020', description: 'description1', top: false}
  ];

  public order: string;
}

describe('OrderBy pipe in template', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent, OrderByPipe, DurationPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain apropriate date with parameter order = "downDate"', () => {
    const { debugElement } = fixture;
    testHostComponent.order = 'downDate';
    fixture.detectChanges();

    const el: HTMLElement = debugElement.query(By.css('.creation')).nativeElement;

    expect(el.textContent).toEqual('5 Sep, 2020');
   });

  it('should contain apropriate date with parameter order = "upDate"', () => {
    const { debugElement } = fixture;
    testHostComponent.order = 'upDate';
    fixture.detectChanges();

    const el: HTMLElement = debugElement.query(By.css('.creation')).nativeElement;

    expect(el.textContent).toEqual('5 Oct, 2020');
   });
});
