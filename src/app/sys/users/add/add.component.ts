import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import 'rxjs/observable/of';
import {HttpService} from '../../../http.service';
import {Observable, Observer} from 'rxjs';
import {UrlCollecton} from '../../../public/url-collection';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private userForm: FormGroup;

  validTimeOutEvent: any;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], [this.userNameAsyncValidator]],
      mobile: ['', this.mobileValidator],
      password: ['', [Validators.minLength(6), Validators.required]],
      nickname: ['', [Validators.maxLength(6), Validators.required]],
      username: ['', [Validators.maxLength(10), Validators.required]]
    });
  }

  ngOnInit() {
  }

  save() {
    alert();
  }

  mobileValidator(control: FormControl): any {

    const mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const result = mobileReg.test(control.value);
    return result ? null : {mobile: {info: '请输入正确的手机号'}};
  }


  onSubmit() {
    console.log(this.userForm.get('email').valid);
    console.log(this.userForm.get('password').valid);
    console.log(this.userForm.get('mobile').valid);
    console.log(this.userForm.get('nickname').valid);
    if (this.userForm.valid) {
      alert(1);
    }
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    const _this = this;
    if (this.validTimeOutEvent) {
      clearTimeout(this.validTimeOutEvent);
    }
    this.validTimeOutEvent = setTimeout(function () {
      _this.http.get(UrlCollecton.session.userInfo).then(resp => {
        // observer.next(null);

        observer.next({error: true, duplicated: true});
        observer.complete();
        console.log(_this.userForm.get('email'));
      }, resp => {
        observer.next({error: true, duplicated: true});
        observer.complete();
        console.log(this.userForm.get('email'));
      });
    }, 2000);
    console.log(_this.userForm.get('email'));
  })
}
