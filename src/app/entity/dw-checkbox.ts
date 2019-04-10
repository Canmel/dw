import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';
import {SubOption} from './subjectAttr/sub-option';

export class DwCheckbox extends DwSubject{

  constructor() {
    super();
    this.options = [new SubOption('选项1'), new SubOption('选项2')];
    this.title = EntityProperties.DWCHECKBOX;
  }
}
