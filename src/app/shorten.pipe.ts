import { PipeTransform, Pipe } from "@angular/core";

// implements PipeTransform forces you to implement transform

@Pipe({
     name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

     transform(value: any, limit: number) {
          if (value.length > limit ) {
               return value.substr(0, limit) + "...";
          }
          return value;
     }

}
