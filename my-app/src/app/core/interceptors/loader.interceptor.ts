import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SpinnerLoaderService } from '../services/spinner-loader.service';
import { catchError, delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private spinnerLoader: SpinnerLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerLoader.spinnerShow();
    return next.handle(request)
      .pipe(
        delay(500),
        finalize(() => {
          this.spinnerLoader.spinnerHide()
        }),
        catchError((err: Response) => throwError(err.statusText))
      );
  }
}
