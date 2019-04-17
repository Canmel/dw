import {ErrorHandler} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

export class AppErrorHandler implements ErrorHandler {

  constructor(public toastr: ToastrService, private router: Router) {
  }

  handleError(error: any): void {
    console.log('this is the error handler', error);
    this.toastr.error('发生了错误');
  }
}
