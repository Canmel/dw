import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormate'
})
export class DateTimeFormatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);
    return null;
  }

}
