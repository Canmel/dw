import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwParagraph extends DwSubject {

  constructor() {
    super();
    this.title = EntityProperties.DWPARAGRAPH;
  }
}
