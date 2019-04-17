import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  droppedItems = [];
  modalRef: BsModalRef;

  page: Object;

  records: Array[];

  surTitleTemp = '';

  constructor(private modalService: BsModalService, private router: Router, private httpservice: HttpService) {
  }

  onItemDrop(e: any) {
    console.log(e);
    this.droppedItems.push(e.dragData);
  }

  ngOnInit() {
    console.log(this.httpservice);
    this.pageQuery();
  }

  pageQuery() {
    this.httpservice.get('/api/tSurveyDirectory').then(resp => {
      console.log(resp['data']);
      this.page = resp['data'];
      this.records = this.page['list'];
    });
  }

  newDesign(template) {
    $('#newDesignTempalte').append('');
    this.modalRef = this.modalService.show(template);
  }

  newDesignTempalteConfirm() {
    console.log(this.surTitleTemp);
    this.modalService.hide(1);
    this.router.navigate(['/designer']);
    // window.location.href = '/designer';
  }

  newDesignTempalteCancel() {
    this.modalService.hide(1);
  }
}
