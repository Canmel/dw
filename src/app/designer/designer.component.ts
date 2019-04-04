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
import {DwCommonEditRoot} from '../entity/dwCommonEditRoot';
import {DwCommonType} from '../enum/dw-common-type.enum';
import {ArrayUtils} from '../utils/ArrayUtils';

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

  dwSurvey: Array<DwSubject>;

  currentSubject: DwSubject;

  dwCommonEditRoot: DwCommonEditRoot;

  constructor(private modalService: BsModalService) {
    $(document).click(function () {
      $('#dwCommonEditRoot').hide();
      event.stopPropagation();
    });
    this.dwSurvey = [];
    this.dwCommonEditRoot = new DwCommonEditRoot();
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
    $(event.target).find('.surveyQuItemBody').addClass('quDragBody');

    event.stopPropagation();
  }

  // 隐藏工具栏
  hideTooltip(event) {
    $(event.target).find('div').eq(0).removeClass('hover');
    $(event.target).find('.surveyQuItemBody').removeClass('quDragBody');
    event.stopPropagation();
  }

  // 问题标题编辑回调
  quCoTitleEditHandler(event, subject: DwSubject) {
    this.currentSubject = subject;
    this.dwCommonEditRoot.quValue = subject.title;
    this.dwCommonEditRoot.type = DwCommonType.TITLE;
    this.rePositionModal(event.target);
    $('#dwCommonEditRoot').show();
    $('#dwCommonEditRoot').removeClass().addClass('quEdit');
    $('.dwCommonEdit').css('width', $(event.target).width());
    // 阻止事件冒泡
    console.log(this.dwSurvey);
    event.stopPropagation();
  }

  // 问题选项编辑回调
  quCoOptionEditHandler(event, subject: DwSubject, option: any, params: any) {
    console.log(option);
    console.log(subject);
    this.rePositionModal(event.target);
    this.currentSubject = subject;
    this.dwCommonEditRoot.type = DwCommonType.OPTION;
    if (subject.options) {
      const i = subject.options.indexOf(option);
      this.dwCommonEditRoot.index = i;
      this.dwCommonEditRoot.quValue = option;
    }
    if(subject.quMFillblankAnswer) {
      const i = subject.quMFillblankAnswer.indexOf(option);
      this.dwCommonEditRoot.index = i;
      this.dwCommonEditRoot.quValue = option[0];
    }
    const options = this.currentSubject['options'];
    if (options) {
      console.log(options);
    }
    if (params && params.width) {
      $('.dwCommonEdit').css('width', $(params.width).width());
    } else {
      $('.dwCommonEdit').css('width', 600);
    }
    if (params && params.type && params.type === 'MFILLBLANK') {
      this.dwCommonEditRoot.type = DwCommonType.MFILLBLANK;
    }

    $('#dwCommonEditRoot').show();
    $('#dwCommonEditRoot').removeClass().addClass('quOptionEdit');
    event.stopPropagation();
  }


  dwComEditContentHandler(event) {
    event.stopPropagation();
  }

  dwComEditContentBlurHandler() {
    this.dwCommonEditRoot.quValue = $('#dwComEditContent').html();
    if (this.dwCommonEditRoot.type === DwCommonType.TITLE) {
      this.currentSubject.title = this.dwCommonEditRoot.quValue;
    } else if (this.dwCommonEditRoot.type === DwCommonType.OPTION) {
      this.currentSubject.options[this.dwCommonEditRoot.index] = this.dwCommonEditRoot.quValue;
    } else if (this.dwCommonEditRoot.type === DwCommonType.MFILLBLANK) {
      this.currentSubject.quMFillblankAnswer[this.dwCommonEditRoot.index][0] = this.dwCommonEditRoot.quValue;
    }
    console.log(this.currentSubject);
    // this.dwSurvey[0]
  }

  // 问题上移动🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼🔼
  questionToUp(event, item) {
    console.log(event, item);
    if (ArrayUtils.isFirst(this.dwSurvey, item)) {
      console.log('这是最上面的');
      return null;
    }
    console.log('不是最上面的');
    const index = this.dwSurvey.indexOf(item);
    ArrayUtils.swapArray(this.dwSurvey, index, index - 1);
  }

  // 问题下移动⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬
  questionToDown(event, item) {
    if (ArrayUtils.isLast(this.dwSurvey, item)) {
      console.log('这是最下面的');
      return null;
    }
    const index = this.dwSurvey.indexOf(item);
    ArrayUtils.swapArray(this.dwSurvey, index, index + 1);
  }

  rePositionModal(target) {
    $('#dwCommonEditRoot').css('top', $(target).offset().top);
    $('#dwCommonEditRoot').css('left', $(target).offset().left);
  }

}
