import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  newDesign(event) {
    $('body').append('<div id="myDialogRoot">' +
      '<div class=\'dialogMessage\' style=\'padding-top:40px;margin-left:20px;padding-bottom:0px;\'>' +
      '<div>复制标题：<input id=\'surTitleTemp\' type=\'text\' style=\'padding:3px;width:320px;color:rgb(14, 136, 158);\' value=\'\'>' +
      '</div></div></div>');
  }
}
