import {DwSubject} from './dw-subject';

export class DwFillblank extends DwSubject {

  quFillblankAnswer: string;

  constructor() {
    super();
    this.quFillblankAnswer = '';
  }
}
