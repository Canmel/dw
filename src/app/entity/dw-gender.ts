import {DwSubject} from './dw-subject';

export class DwGender extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.options = ['男', '女'];
  }
}
