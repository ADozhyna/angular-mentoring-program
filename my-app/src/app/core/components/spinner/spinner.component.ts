import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerLoaderService } from '../../services/spinner-loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public isShowSpinner: BehaviorSubject<boolean> = this.spinnerLoaderService.isShow;

  constructor(private spinnerLoaderService: SpinnerLoaderService) { }

  public ngOnInit(): void {
  }

}
