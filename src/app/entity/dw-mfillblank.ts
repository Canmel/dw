import {DwSubject} from './dw-subject';

export class DwMfillblank extends DwSubject {

  quFillblankAnswer: Array<any>;

  constructor() {
    super();
    this.quFillblankAnswer = [['选项1', ''], ['选项2', ''], ['选项3', '']];
  }
}
