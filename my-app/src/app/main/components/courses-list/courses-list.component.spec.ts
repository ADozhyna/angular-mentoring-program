import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { CoursesListComponent } from './courses-list.component';

@Component({
  selector: 'app-course-item',
  template: `<mat-card><button class="delete-button" (click)="onRemove(id)">Delete</button></mat-card>`
})
export class CourseItemTestComponent {
  public id: number = 1;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();
  public onRemove(id: number): void {
    this.remove.emit(id);
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, CourseItemTestComponent, OrderByPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
  fixture = TestBed.createComponent(CoursesListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onLoad once clicked', () => {
    const spy: jasmine.Spy<() => void> = spyOn(component, 'onLoad');

    fixture.debugElement.query(By.css('.load-button')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message', () => {
    const consoleSpy: jasmine.Spy = spyOn(console, 'log');
    component.onLoad();

    expect(consoleSpy).toHaveBeenCalled();
  });

});
