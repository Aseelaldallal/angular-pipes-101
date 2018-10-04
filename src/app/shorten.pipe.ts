import { PipeTransform, Pipe } from "@angular/core";

// implements PipeTransform forces you to implement transform

@Pipe({
     name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

     // you can add more parameters
     // in template just add another colon and add the parameter
     transform(value: any, limit: number) {
          if (value.length > limit ) {
               return value.substr(0, limit) + "...";
          }
          return value;
     }

}
