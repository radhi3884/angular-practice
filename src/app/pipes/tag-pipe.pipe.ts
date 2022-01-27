import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagPipe'
})
export class TagPipePipe implements PipeTransform {
  // element : string = ''

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }


}
