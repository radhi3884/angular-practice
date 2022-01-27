import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe'
})
export class PowerPipePipe implements PipeTransform {

  transform(base: number, exponent: number): any {
    if(isNaN(Number(base)) || isNaN(Number(exponent))) return 'undefined';
    return Math.pow(base, exponent);
  }

}
