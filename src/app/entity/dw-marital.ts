import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwMarital extends DwSubject {

  options: Array<any>;

  constructor() {
    super();
    this.options = ['是', '否'];
    this.title = EntityProperties.DWMARITAL;
  }
}
