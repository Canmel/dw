import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwGender extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.options = ['男', '女', '中'];
    this.title = EntityProperties.DWGENDER;
  }
}
