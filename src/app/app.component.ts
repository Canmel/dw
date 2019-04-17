import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpService} from './http.service';
import {UrlCollecton} from './public/url-collection';
import {SystemProperties} from './public/system-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'dw';
  cookieValue = 'UNKNOWN';

  constructor(private httpservice: HttpService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get(SystemProperties.session.authenticated);
    console.log(this.cookieValue);
    if (this.cookieValue !== 'true') {
      this.httpservice.get(UrlCollecton.session.userInfo).then(resp => {
        console.log(resp);
        this.cookieService.set(SystemProperties.session.authenticated, resp['authenticated']);
      });
    }
  }
}
