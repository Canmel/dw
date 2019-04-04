import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwEducation extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.options = ['博士', '硕士', '本科', '专科'];
    this.title = EntityProperties.DWEDUCATION;
  }
}
