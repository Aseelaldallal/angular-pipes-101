import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false // careful
})
export class SortPipe implements PipeTransform {

  transform(array: any, propName: string): any {
    return array.sort(function (a, b) {
      if (a[propName] < b[propName]) {
        return -1;
      }
      if (a[propName] > b[propName]) {
        return 1;
      }
      return 0;
    });
  }

}
