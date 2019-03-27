import {Component, OnInit} from '@angular/core';
import {MainComponent} from '../../main/main.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends MainComponent implements OnInit {



  ngOnInit() {
  }

  ready() {

  }

  clickHideUserMenuCallback(event){
    console.log(event);
    let toggleTag = true;
    // this.toggleTag;
    if (toggleTag) {
      toggleTag = false;
      const stepLi = $(event.target).parent();
      stepLi.find('.a-w-sel').slideToggle(0, function () {
        toggleTag = true;
      });
      $('.a-w-sel').not(stepLi.find('.a-w-sel')).hide();
    }
  }
}


