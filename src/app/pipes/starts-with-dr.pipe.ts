import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithDr'
})
export class StartsWithDrPipe implements PipeTransform {

  transform(value:string): string {
    return "Dr "+value;
  }

}
