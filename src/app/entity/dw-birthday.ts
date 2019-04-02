import {DwSubject} from './dw-subject';

export class DwBirthday extends DwSubject {

  quAnswer: string;

  constructor() {
    super();
    this.quAnswer = '';
    this.title = '您的生日是?';
  }
}
