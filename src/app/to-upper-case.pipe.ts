import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {

  transform(value: string): unknown {
    let returnstr = value.toUpperCase()
    return returnstr;
  }

}
