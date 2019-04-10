import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';
import {SubOption} from './subjectAttr/sub-option';

export class DwRadio extends DwSubject{

  constructor() {
    super();
    this.options = [new SubOption('选项一'), new SubOption('选项二')];
    this.title = EntityProperties.DWRADIO;
  }
}
