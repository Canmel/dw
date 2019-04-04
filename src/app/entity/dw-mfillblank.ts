import {DwSubject} from './dw-subject';
import {EntityProperties} from '../public/entity-properties';

export class DwMfillblank extends DwSubject {
  constructor() {
    super();
    this.quMFillblankAnswer = [['选项1', '一个默认的回答'], ['选项2', '在一个默认的回答'], ['选项3', '又一个默认回答']];
    this.title = EntityProperties.DWMFILLBLANK;
  }
}
