import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwBirthday extends DwSubject {

  quAnswer: string;

  constructor() {
    super();
    this.quAnswer = '';
    this.title = EntityProperties.DWBIRTHDAY;
  }
}
