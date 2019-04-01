import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @ViewChild('vcRef', {read: ViewContainerRef}) vcRef: ViewContainerRef;

  li_surveyQuItemBody = [];

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  dropItemsHandler(e: any) {
    console.log(e.dragData);
    console.log(this.vcRef);
    this.vcRef.createEmbeddedView(e.dragData);
  }

  settingHandler(template) {
    this.modalRef = this.modalService.show(template);
  }

  showTooltip(event) {
    $(event.target).find('div').eq(0).addClass('hover');
  }

  hideTooltip(event) {
    $(event.target).find('div').eq(0).removeClass('hover');
  }


}
