import {DwSubject} from './dw-subject';

export class DwMarital extends DwSubject{

  options: Array<any>;

  constructor() {
    super();
    this.options = ['是', '否'];
  }
}
