import {DwSubject} from './dw-subject';

export class DwEducation extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.options = ['博士', '硕士', '本科', '专科'];
  }
}
