import {DwSubject} from './dw-subject';

export class DwPage extends DwSubject {

  subLineText: string;

  constructor() {
    super();
    this.subLineText = '下一页';
  }
}
