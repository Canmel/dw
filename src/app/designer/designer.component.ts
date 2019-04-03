import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import * as $ from 'jquery';
import {DwRadio} from '../entity/dw-radio';
import {DwCheckbox} from '../entity/dw-checkbox';
import {DwGender} from '../entity/dw-gender';
import {DwFillblank} from '../entity/dw-fillblank';
import {DwMfillblank} from '../entity/dw-mfillblank';
import {DwOrder} from '../entity/dw-order';
import {DwBirthday} from '../entity/dw-birthday';
import {DwEmail} from '../entity/dw-email';
import {DwEducation} from '../entity/dw-education';
import {DwMarital} from '../entity/dw-marital';
import {DwSalary} from '../entity/dw-salary';
import {DwParagraph} from '../entity/dw-paragraph';
import {DwPage} from '../entity/dw-page';
import {DwSubject} from '../entity/dw-subject';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @ViewChild('vcRef', {read: ViewContainerRef}) vcRef: ViewContainerRef;

  li_surveyQuItemBody = [];

  modalRef: BsModalRef;

  @ViewChild('radioDwQuTypeModel') radioDwQuTypeModel: TemplateRef<any>;

  @ViewChild('genderDwQuTypeModel') genderDwQuTypeModel: TemplateRef<any>;

  @ViewChild('checkboxDwQuTypeModel') checkboxDwQuTypeModel: TemplateRef<any>;

  @ViewChild('fillblankDwQuTypeModel') fillblankDwQuTypeModel: TemplateRef<any>;

  @ViewChild('mfillblankDwQuTypeModel') mfillblankDwQuTypeModel: TemplateRef<any>;

  @ViewChild('orderDwQuTypeModel') orderDwQuTypeModel: TemplateRef<any>;

  @ViewChild('birthdayDwQuTypeModel') birthdayDwQuTypeModel: TemplateRef<any>;

  @ViewChild('emailDwQuTypeModel') emailDwQuTypeModel: TemplateRef<any>;

  @ViewChild('educationDwQuTypeModel') educationDwQuTypeModel: TemplateRef<any>;

  @ViewChild('maritalDwQuTypeModel') maritalDwQuTypeModel: TemplateRef<any>;

  @ViewChild('salaryDwQuTypeModel') salaryDwQuTypeModel: TemplateRef<any>;

  @ViewChild('paragraphDwQuTypeModel') paragraphDwQuTypeModel: TemplateRef<any>;

  @ViewChild('pageDwQuTypeModel') pageDwQuTypeModel: TemplateRef<any>;

  dwSurvey = [];

  selectedSubject: DwSubject;

  constructor(private modalService: BsModalService) {
    $(document).click(function () {
      $('#dwCommonEditRoot').hide();
      event.stopPropagation();
    });
    this.selectedSubject = null;
  }

  ngOnInit() {
    // const _this = this;
    $(window).resize(function () {
      $('#dwCommonEditRoot').hide();
    });
  }

  itemInstanceofDwSubject(ty: any, className) {
    return ty.constructor.name === className;

  }

  dropItemsHandler(e: any) {
    console.log(e);
    if (e.dragData === 'radio') {
      this.dwSurvey.push(new DwRadio());
    } else if (e.dragData === 'checkbox') {
      this.dwSurvey.push(new DwCheckbox());
    } else if (e.dragData === 'gender') {
      this.dwSurvey.push(new DwGender());
    } else if (e.dragData === 'fillblank') {
      this.dwSurvey.push(new DwFillblank());
    } else if (e.dragData === 'mfillblank') {
      this.dwSurvey.push(new DwMfillblank());
    } else if (e.dragData === 'order') {
      this.dwSurvey.push(new DwOrder());
    } else if (e.dragData === 'birthday') {
      this.dwSurvey.push(new DwBirthday());
    } else if (e.dragData === 'email') {
      this.dwSurvey.push(new DwEmail());
    } else if (e.dragData === 'education') {
      this.dwSurvey.push(new DwEducation());
    } else if (e.dragData === 'marital') {
      this.dwSurvey.push(new DwMarital());
    } else if (e.dragData === 'salary') {
      this.dwSurvey.push(new DwSalary());
    } else if (e.dragData === 'paragraph') {
      this.dwSurvey.push(new DwParagraph());
    } else if (e.dragData === 'page') {
      this.dwSurvey.push(new DwPage());
    }
  }

  // 设置
  settingHandler(template) {
    this.modalRef = this.modalService.show(template);
  }

  // 显示工具栏
  showTooltip(event) {
    $(event.target).find('div').eq(0).addClass('hover');
    event.stopPropagation();
  }

  // 隐藏工具栏
  hideTooltip(event) {
    $(event.target).find('div').eq(0).removeClass('hover');
    event.stopPropagation();
  }

  // 问题标题编辑回调
  quCoTitleEditHandler(event, subject: DwSubject) {
    console.log(event);
    console.log(subject);
    this.selectedSubject = subject;
    this.rePositionModal(event.target);
    $('#dwCommonEditRoot').show();
    $('#dwCommonEditRoot').removeClass().addClass('quEdit');
    // 阻止事件冒泡
    event.stopPropagation();
  }

  // 问题选项编辑回调
  quCoOptionEditHandler(event) {
    this.rePositionModal(event.target);
    $('#dwCommonEditRoot').show();
    $('#dwCommonEditRoot').removeClass().addClass('quOptionEdit');
    event.stopPropagation();
  }


  dwComEditContentHandler(event) {
    event.stopPropagation();
  }

  rePositionModal(target) {
    $('#dwCommonEditRoot').css('top', $(target).offset().top);
    $('#dwCommonEditRoot').css('left', $(target).offset().left);
  }

}
