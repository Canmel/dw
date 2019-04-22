import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'userstatus'
})
/**
 * 用户状态转换器
 */
export class UserstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === '1') {
      return '正常';
    }
    if (value === '0') {
      return '不可用';
    }
    return null;
  }

}
