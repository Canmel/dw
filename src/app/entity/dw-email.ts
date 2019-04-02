import {DwSubject} from './dw-subject';

export class DwEmail extends DwSubject{

  quAnswer: string;

  constructor() {
    super();
    this.title = '您的邮箱是？';
    this.quAnswer = '';
  }
}
