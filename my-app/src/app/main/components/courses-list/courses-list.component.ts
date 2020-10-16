import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
})
export class CoursesListComponent implements OnInit {
  public coursesList: ICourse[];
  @Input() public searchString: string;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesList = this.coursesService.getList(); 
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange}) {
    if(changes.searchString.currentValue) {
     this.coursesList = this.filterPipe.transform(this.coursesList, this.searchString);
    }
    
    
  }

  public onDelete(id: number) {
    console.log(id);
  }

  public onLoad() {
    console.log('loading...');
  }

}
