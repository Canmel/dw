import {DwSubject} from './dw-subject';

export class DwSalary extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.title = '您的月平均收入是？';
    this.options = ['3000元以下', '3000-5000元', '5000-10000元', '10000-20000元', '20000元以上'];
  }
}
