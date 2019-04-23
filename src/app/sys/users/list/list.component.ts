import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../http.service';
import {UrlCollecton} from '../../../public/url-collection';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page: Object = {total: 0, nextPage: 2, list: []};

  constructor(private router: Router, private http: HttpService) {
  }

  ngOnInit() {
    this.query();
  }

  query() {
    this.http.get(UrlCollecton.system.users.list).then(resp => {
      console.log(resp);
      this.page = resp['data'];
    });

  }

}
