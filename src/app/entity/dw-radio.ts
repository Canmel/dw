import {DwSubject} from './dw-subject';

export class DwRadio extends DwSubject{

  options = [];

  constructor() {
    super();
    this.options = ['选项一', '选项二'];
  }
}
