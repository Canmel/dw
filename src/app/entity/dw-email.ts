import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwEmail extends DwSubject{

  constructor() {
    super();
    this.title = EntityProperties.DWEMAIL;
    this.quFillblankAnswer = '';
  }
}
