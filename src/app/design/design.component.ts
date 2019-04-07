import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  items = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Orange', type: 'fruit'}];

  droppedItems = [];
  modalRef: BsModalRef;

  surTitleTemp = '';

  constructor(private modalService: BsModalService, private router: Router) {
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    console.log(e);
    this.droppedItems.push(e.dragData);
  }

  ngOnInit() {

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
