import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operator'
})
export class OperatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
