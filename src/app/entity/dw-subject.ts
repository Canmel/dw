import {EntityProperties} from '../public/entity-properties';
import {SubOption} from './subjectAttr/sub-option';
import index from '@angular/cli/lib/cli';

export class DwSubject {
  title: string;
  options: Array<SubOption>;
  quFillblankAnswer: string;
  quMFillblankAnswer: Array<Array<string>>;
  quAnswer: Array<any>;
  require: boolean;

  constructor() {
    this.require = false;
    this.title = EntityProperties.DWSUBJECT;
  }

  getOptionByIndex(i: number): SubOption {
    let result = null;
    this.options.forEach(function (value, index) {
      if (index === i) {
        return result = value;
      }
    });
    return result;
  }

  setOptionByIndex(i: number, option: SubOption): void {
    this.options[i] = option;
  }
}
