import { Component, DoCheck, Input, OnInit, SimpleChange } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ICourse } from 'src/app/shared/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';

const mockData: ICourse[] = [
  {
    id: 1,
    title: 'Video Course 1. Angular',
    duration: '160m',
    creationDate: '10/5/2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    top: true
  },
  {
    id: 2,
    title: 'Video Course 1. React',
    duration: '45m',
    creationDate: '12/20/2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    top: false
  },
  {
    id: 3,
    title: 'Video Course 1. Node.js',
    duration: '180m',
    creationDate: '10/10/2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    top: false
  },
];

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe]
})
export class CoursesListComponent implements OnInit, DoCheck {
  public coursesList: ICourse[];
  @Input() public searchString: string;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.coursesList = this.coursesService.getList();
  }

  public ngDoCheck(): void {
    this.coursesList = this.coursesService.getList();
    this.coursesList = this.filterPipe.transform(this.coursesList, this.searchString);
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange}): void {
    if (changes.searchString.currentValue) {
     const filteredList: ICourse[] = this.filterPipe.transform(mockData, this.searchString);
     this.coursesList = filteredList;
    }
  }

  public onDelete(id: number): void {
    console.log(id);
  }

  public onLoad(): void {
    console.log('loading...');
  }

}
