import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../http.service';
import {UrlCollecton} from '../../../public/url-collection';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {template} from '@angular/core/src/render3';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page: Object = {total: 0, nextPage: 2, list: []};
  private searchForm: FormGroup;

  modalRef: BsModalRef;
  message: string;

  selectedEntity: Object;

  constructor(private router: Router, private http: HttpService, private fb: FormBuilder, private toastr: ToastrService, private modalService: BsModalService) {
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

  delete(template: TemplateRef<any>, selected) {
    this.selectedEntity = selected;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deleteConfirm() {
    this.modalRef.hide();
    console.log(this.selectedEntity);
    this.http.delete(UrlCollecton.system.users.delete, this.selectedEntity['uid']).then(resp => {
      this.toastr.success(resp['data']['msg'], '成功');
      this.query();
    });
  }

  deleteDecline() {
    console.log(this.selectedEntity);
    this.modalRef.hide();
  }
}
