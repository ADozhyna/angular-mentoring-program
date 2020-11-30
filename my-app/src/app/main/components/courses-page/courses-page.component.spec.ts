import { Component, DebugElement, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesPageComponent } from './courses-page.component';

@Component({
  selector: 'app-search-control',
  template: `
  <form (ngSubmit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Look for courses</mat-label>
        <input matInput placeholder="Text to search" [(ngModel)]="inputValue" name="inputValue">
      </mat-form-field>
      <button type="submit">Search</button>
    </form>`
})
export class SearchControl {
  public inputValue: string = 'some value';
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public onSubmit(): void {
    this.search.emit(this.inputValue);
  }
}

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent, SearchControl ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get search string', () => {
    const childEl: DebugElement = fixture.debugElement.query(By.css('form'));
    const spy: jasmine.Spy<(searchString: string) => void> = spyOn(component, 'onSearch');
    childEl.triggerEventHandler('ngSubmit', null);

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should apropriate searchItem property', () => {
    const childEl: DebugElement = fixture.debugElement.query(By.css('form'));
    childEl.triggerEventHandler('ngSubmit', null);

    fixture.detectChanges();

    expect(component.searchString).toEqual('some value');
  });
});
