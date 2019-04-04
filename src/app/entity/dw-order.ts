import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwOrder extends DwSubject {

  constructor() {
    super();
    this.options = ['选项1-1', '选项2-1', '选项3-1'];
    this.quAnswer = ['', '', ''];
    this.title = EntityProperties.DWORDER;
  }
}
