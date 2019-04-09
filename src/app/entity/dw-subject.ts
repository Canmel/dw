import {EntityProperties} from '../public/entity-properties';

export class DwSubject {
  title: string;
  options: Array<any>;
  quFillblankAnswer: string;
  quMFillblankAnswer: Array<Array<string>>;
  quAnswer: Array<any>;
  require: boolean;

  constructor() {
    this.require = false;
    this.title = EntityProperties.DWSUBJECT;
  }
}
