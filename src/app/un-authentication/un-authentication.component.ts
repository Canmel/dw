import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UrlCollecton} from '../public/url-collection';

@Component({
  selector: 'app-un-authentication',
  templateUrl: './un-authentication.component.html',
  styleUrls: ['./un-authentication.component.css']
})
export class UnAuthenticationComponent implements OnInit {

  jumpTime: number;


  urlCollection = UrlCollecton;

  constructor(private router: Router) {
    this.jumpTime = 5;
  }

  ngOnInit() {
    this.countDdown();
  }

  countDdown() {
    const _this = this;
    setInterval(function () {
      _this.jumpTime--;
      if (_this.jumpTime === 0) {
        return location.href = '/login';
      }
    }, 1000);
  }

}
