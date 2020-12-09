import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerLoaderService } from './core/services/spinner-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isShowSpinner: BehaviorSubject<boolean> = this.spinnerLoaderService.isShow;

  constructor(private spinnerLoaderService: SpinnerLoaderService) {}
}
