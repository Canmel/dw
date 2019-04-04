import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwPage extends DwSubject {

  subLineText: string;

  constructor() {
    super();
    this.subLineText = '下一页';
    this.title = EntityProperties.DWPAGE;
  }
}
