import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {HttpService} from '../../../http.service';
import {Observable, Observer} from 'rxjs';
import {UrlCollecton} from '../../../public/url-collection';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private userForm: FormGroup;

  validTimeOutEvent: any;

  constructor(private fb: FormBuilder, private http: HttpService, private router: Router, private toastr: ToastrService, private routInfo: ActivatedRoute) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], [this.userNameAsyncValidator]],
      mobile: ['', this.mobileValidator],
      password: ['', [Validators.minLength(6), Validators.required]],
      nickname: ['', [Validators.maxLength(6), Validators.required]],
      username: ['', [Validators.maxLength(10), Validators.required]]
    });
  }

  ngOnInit() {
    const _this = this;
    let uid = '';
    this.routInfo.queryParams.subscribe(queryParams => {
      uid = queryParams['uid'];
    });
    console.log(uid);
    this.http.get(UrlCollecton.system.users.detail + uid).then(resp => {
      _this.userForm.patchValue(resp['data']);
    });
  }

  mobileValidator(control: FormControl): any {
    const mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const result = mobileReg.test(control.value);
    return result ? null : {mobile: {info: '请输入正确的手机号'}};
  }


  onSubmit() {
    if (this.userForm.valid) {
      this.http.put(UrlCollecton.system.users.update, this.userForm.value).then(resp => {
        this.toastr.success(resp['msg'], '成功');
        this.router.navigate([UrlCollecton.pages.users.list]);
      });
    } else {
      this.toastr.warning('请核对填写信息是否正确与完整', '警告');
    }
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    const _this = this;
    if (this.validTimeOutEvent) {
      clearTimeout(this.validTimeOutEvent);
    }
    this.validTimeOutEvent = setTimeout(function () {
      _this.http.get(UrlCollecton.session.userInfo).then(resp => {
        observer.next(null);
        observer.complete();
        console.log(_this.userForm.get('email'));
      }, resp => {
        observer.next({error: true, duplicated: true});
        observer.complete();
        console.log(this.userForm.get('email'));
      });
    }, 2000);
    console.log(_this.userForm.get('email'));
  });
}
