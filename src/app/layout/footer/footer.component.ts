import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainComponent} from '../../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends MainComponent implements OnInit {
  ngOnInit() {
  }
}
