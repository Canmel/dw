import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwFillblank extends DwSubject {

  constructor() {
    super();
    this.quFillblankAnswer = '我是默认值';
    this.title = EntityProperties.DWFILLBLANK;
  }
}
