import { PipeTransform } from "@angular/core";

// implements PipeTransform forces you to implement transform
export class ShortenPipe implements PipeTransform {

     transform(value: any) {
          return value.substr(0, 10);
     }

}
