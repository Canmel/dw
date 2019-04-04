import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwSalary extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.title = EntityProperties.DWSALARY;
    this.options = ['3000元以下', '3000-5000元', '5000-10000元', '10000-20000元', '20000元以上'];
  }
}
