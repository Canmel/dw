import {DwSubject} from './dw-subject';

export class DwCheckbox extends DwSubject{

  options = [];

  constructor() {
    super();
    this.options = ['选项1', '选项2'];
  }
}
