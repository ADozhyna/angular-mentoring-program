import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from './duration.pipe';

@Component({
  selector: 'app-test-pipe-component',
  template: `<div>
            <p id="case-1">{{ '180m' | duration }}</p>
            <p id="case-2">{{ '30m' | duration }}</p>
            </div>`
})
export class TestPipeComponent {}

describe('duration pipe in component template', () => {
    let fixture: ComponentFixture<TestPipeComponent>;

    beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [TestPipeComponent, DurationPipe]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestPipeComponent);
      fixture.detectChanges();
    });

    it('#case-1 should contain "3h 0min"', () => {
      const el: HTMLElement = fixture.debugElement.query(By.css('#case-1')).nativeElement;
      expect(el.textContent).toBe('3h 0min');
    });

    it('#case-2 should contain "30min"', () => {
      const el: HTMLElement = fixture.debugElement.query(By.css('#case-2')).nativeElement;
      expect(el.textContent).toBe('30min');
    });
  });

describe('DurationPipe', () => {
  const pipe: DurationPipe = new DurationPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform "180m" to "3h 0min"', () => {
    expect(pipe.transform('180m')).toBe('3h 0min');
  });

  it('transform "30m" to "30min"', () => {
    expect(pipe.transform('30m')).toBe('30min');
  });
});
