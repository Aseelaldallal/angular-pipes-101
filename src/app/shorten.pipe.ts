import { PipeTransform, Pipe } from "@angular/core";

// implements PipeTransform forces you to implement transform

@Pipe({
     name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

     transform(value: any) {
          if (value.length > 10 ) {
               return value.substr(0, 10) + "...";
          }
          return value;
     }

}
