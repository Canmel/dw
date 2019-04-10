import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';
import {SubOption} from './subjectAttr/sub-option';

export class DwOrder extends DwSubject {

  constructor() {
    super();
    this.options = [new SubOption('选项1-1'), new SubOption('选项2-1'), new SubOption('选项3-1')];
    this.quAnswer = ['', '', ''];
    this.title = EntityProperties.DWORDER;
  }
}
