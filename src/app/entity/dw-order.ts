import {DwSubject} from './dw-subject';

export class DwOrder extends DwSubject {

  options: Array<any>;
  quAnswer: Array<any>

  constructor() {
    super();
    this.options = ['选项1', '选项2', '选项3'];
    this.quAnswer = ['', '', ''];
  }
}
