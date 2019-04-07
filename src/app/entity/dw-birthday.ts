import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwBirthday extends DwSubject {

  constructor() {
    super();
    this.quFillblankAnswer = '';
    this.title = EntityProperties.DWBIRTHDAY;
  }
}
