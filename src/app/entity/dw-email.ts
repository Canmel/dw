import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwEmail extends DwSubject{

  quAnswer: string;

  constructor() {
    super();
    this.title = EntityProperties.DWEMAIL;
    this.quAnswer = '';
  }
}
