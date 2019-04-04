import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwRadio extends DwSubject{

  options = [];

  constructor() {
    super();
    this.options = ['选项一', '选项二'];
    this.title = EntityProperties.DWRADIO;
  }
}
