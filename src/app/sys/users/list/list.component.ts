import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../http.service';
import {UrlCollecton} from '../../../public/url-collection';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page: Object = {total: 0, nextPage: 2, list: []};
  private searchForm: FormGroup;

  constructor(private router: Router, private http: HttpService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      email: ['', []],
      username: ['', []]
    });
  }

  ngOnInit() {
    this.query();
  }

  query() {
    console.log(this.searchForm.value);
    this.http.get(UrlCollecton.system.users.list, this.searchForm.value).then(resp => {
      console.log(resp);
      this.page = resp['data'];
    });

  }

}
