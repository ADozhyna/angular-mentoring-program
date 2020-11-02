import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchControlComponent } from './search-control.component';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit once clicked', () => {
    const spy: jasmine.Spy = spyOn(component, 'onSubmit').and.callThrough();

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
