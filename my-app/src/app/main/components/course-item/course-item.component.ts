import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() public course: ICourse;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngOnChanges() {
    console.log('ngOnChanges');
  }

  public ngDoCheck() {
    console.log('ngDoCheck');
  }

  public ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  public onRemove(id: number) {
    this.remove.emit(id);
  }

}
