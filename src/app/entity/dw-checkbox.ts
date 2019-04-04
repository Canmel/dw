import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwCheckbox extends DwSubject{

  options = [];

  constructor() {
    super();
    this.options = ['选项1', '选项2'];
    this.title = EntityProperties.DWCHECKBOX;
  }
}
