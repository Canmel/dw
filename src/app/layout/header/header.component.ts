import {Component, OnInit} from '@angular/core';
import {MainComponent} from '../../main/main.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends MainComponent implements OnInit {


  browseWidth;
  browseHeight;

  ngOnInit() {
    this.ready();
  }

  ready() {
    this.browseHeight = $(window).height();
    this.browseWidth = $(window).width();
    window.addEventListener('resize', () => {
      this.resizeBodyWidth();
      this.resizeBodyHeight();
    }, false);
  }

  clickHideUserMenuCallback(event) {
    const stepLi = $(event.target).parent();
    stepLi.parent().find('.a-w-sel').slideToggle(0, function () {
      $(this).attr('show', 'true');
    });
  }


  resizeBodyWidth() {
    this.browseWidth = $(window).width();
    if (this.browseWidth >= 1120) {
      $('.bodyCenter').width(this.browseWidth - 160);
    } else {
      $('.bodyCenter').width(960);
    }
  }

  resizeBodyHeight() {
    this.browseHeight = $(window).height();
    const autoCHeight = this.browseHeight - 230;
    $('.autoContentHeight').height(autoCHeight);
    $('#autoIframeHeight').height(autoCHeight - 5);
  }


  refreshAutoCode(codeImgId) {
    const ctx = $('#ctx').val();
    $('#' + codeImgId).attr('src', ctx + '/jcaptcha.action');
  }

  currentMenu(menuId) {
    $('.dw-menu-a').removeClass('active');
    $('#' + menuId).addClass('active');
  }
}


