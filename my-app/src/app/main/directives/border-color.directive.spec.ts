import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BorderColorDirective } from './border-color.directive';

@Component({
  selector: 'app-test-component',
  template: `<div class="wrapper" >
    <div [publicationDate]="publicationDate" appBorderColor></div>
</div>`
})
export class TestComponent {
  public publicationDate: string;
}

describe('[appBorderColor] directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, BorderColorDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should add blue border', () => {
      component.publicationDate = '12/5/2019';
      fixture.detectChanges();

      const el = fixture.debugElement.query(By.directive(BorderColorDirective)).nativeElement;

      expect(el.style.borderBottom).toBe('5px solid rgb(0, 121, 173)')
    });

  it('should add green border', () => {
    component.publicationDate = '10/15/2020';
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.directive(BorderColorDirective)).nativeElement;

      expect(el.style.borderBottom).toBe('5px solid rgb(189, 238, 104)')
  })
    
  });
